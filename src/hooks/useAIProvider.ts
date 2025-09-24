import { useCallback, useRef } from "react";

type MarketsMap = Record<string, Record<string, number | string>>;

type ApiMatch = {
  home_team: string;
  away_team: string;
  match_date: string;   // ISO
  league: string;
  competition?: string; // e.g., "Football - Spain - LaLiga"
  relevance?: number;
  markets?: MarketsMap;
  odds?: Record<string, number | string>;
  event_id?: string;    // "28365947"
};

type ApiResponse = {
  query: string;
  user_id: string;
  extracted_filters?: {
    teams?: string[];
    market_types?: string[]; // e.g. ["1X2", "Over/Under", "BTTS", "DC", "HT/FT"]
    league?: string | null;
    min_odds?: number | null;
    max_odds?: number | null;
    date_from?: string | null;
    date_to?: string | null;
  };
  matches: ApiMatch[];
};

const API_URL = "https://alluring-inspiration-production.up.railway.app/betting/analyze-fast";
const norm = (s?: string) => (s || "").toLowerCase();

export type MarketKind = "1x2" | "ou" | "btts" | "dc" | "htft";

export type ProviderItem =
  | { kind: "1x2"; id: string; startISO: string; league: string; competition?: string; teams: [{name:string},{name:string}]; data: { one?: string; draw?: string; two?: string; } }
  | { kind: "ou";  id: string; startISO: string; league: string; competition?: string; teams: [{name:string},{name:string}]; data: Array<{ line: string; over?: string; under?: string; }> } // multiple lines
  | { kind: "btts";id: string; startISO: string; league: string; competition?: string; teams: [{name:string},{name:string}]; data: { yes?: string; no?: string; } }
  | { kind: "dc";  id: string; startISO: string; league: string; competition?: string; teams: [{name:string},{name:string}]; data: { oneX?: string; xTwo?: string; oneTwo?: string; } }
  | { kind: "htft";id: string; startISO: string; league: string; competition?: string; teams: [{name:string},{name:string}]; data: { "1/1"?: string; "1/X"?: string; "1/2"?: string; "X/1"?: string; "X/X"?: string; "X/2"?: string; "2/1"?: string; "2/X"?: string; "2/2"?: string; } };

const makeEventId = (m: ApiMatch) => {
  // Prefer backend event_id (stable) else fall back to composed id
  if (m.event_id) return `evt-${m.event_id}`;
  return `${m.home_team}__${m.away_team}__${m.match_date}`.toLowerCase().replace(/\s+/g, "-");
};

// --- extractors compatible with your market keys ---
function pick1x2(m: ApiMatch) {
  const name = Object.keys(m.markets || {}).find(k => /(^|\s)1x2(\s|\|)/i.test(k));
  const src = name ? (m.markets as any)[name] : (m.odds || {});
  const g = (v: any) => (v == null ? undefined : String(v));
  return { one: g(src?.["1"]), draw: g(src?.["X"]), two: g(src?.["2"]) };
}

function pickOUAllLines(m: ApiMatch) {
  const name = Object.keys(m.markets || {}).find(k => /over\/?under/i.test(k));
  if (!name) return null;
  const block = (m.markets as any)[name] as Record<string, number | string>;
  // Build pairs: Over N.N / Under N.N for all detected lines, sorted ascending (0.5, 1.5, 2.5, ...)
  const pairs: Array<{ line: string; over?: string; under?: string }> = [];
  const seen = new Set<string>();
  Object.keys(block).forEach(k => {
    const mOver = k.match(/^over\s+([0-9]+(?:\.[0-9])?)/i);
    const mUnder = k.match(/^under\s+([0-9]+(?:\.[0-9])?)/i);
    if (mOver) {
      const line = mOver[1];
      if (!seen.has(line)) {
        pairs.push({ line, over: String(block[k]), under: String(block[`Under ${line}`] ?? "") });
        seen.add(line);
      }
    } else if (mUnder) {
      const line = mUnder[1];
      if (!seen.has(line)) {
        pairs.push({ line, over: String(block[`Over ${line}`] ?? ""), under: String(block[k]) });
        seen.add(line);
      }
    }
  });
  // sort numerically by line
  pairs.sort((a, b) => parseFloat(a.line) - parseFloat(b.line));
  return pairs.length ? pairs : null;
}

function pickBTTS(m: ApiMatch) {
  const name = Object.keys(m.markets || {}).find(k => /both\s*teams\s*to\s*score|btts/i.test(k));
  if (!name) return null;
  const b = (m.markets as any)[name];
  const g = (v: any) => (v == null ? undefined : String(v));
  return { yes: g(b["Yes"]), no: g(b["No"]) };
}

function pickDC(m: ApiMatch) {
  const name = Object.keys(m.markets || {}).find(k => /double\s*chance/i.test(k));
  if (!name) return null;
  const b = (m.markets as any)[name];
  const g = (v: any) => (v == null ? undefined : String(v));
  return { oneX: g(b["1X"]), xTwo: g(b["X2"]), oneTwo: g(b["12"]) };
}

function pickHTFT(m: ApiMatch) {
  const name = Object.keys(m.markets || {}).find(k => /half\s*time.*full\s*time|ht\/ft/i.test(k));
  if (!name) return null;
  const b = (m.markets as any)[name];
  const out: any = {};
  ["1/1","1/X","1/2","X/1","X/X","X/2","2/1","2/X","2/2"].forEach(k => {
    if (b[k] != null) out[k] = String(b[k]);
  });
  return Object.keys(out).length ? out : null;
}

// Function to fetch teams data for recognition
const fetchTeamsForRecognition = async (): Promise<{ teams: any[], leagues: string[] }> => {
  try {
    const response = await fetch('https://alluring-inspiration-production.up.railway.app/teams/all');
    const data = await response.json();
    
    const teams: any[] = [];
    const leagues = data.leagues || [];
    
    // Create a flat list of all teams for matching
    Object.entries(data.all_teams_by_league).forEach(([league, teamNames]: [string, any]) => {
      (teamNames as string[]).forEach(teamName => {
        teams.push({
          id: teamName.toLowerCase().replace(/\s+/g, '-'),
          name: teamName,
          league: league
        });
      });
    });
    
    return { teams, leagues };
  } catch (error) {
    console.error('Failed to fetch teams for recognition:', error);
    return { teams: [], leagues: [] };
  }
};

// Function to auto-add recognized teams and leagues to favorites
const autoAddToFavorites = async (query: string, extractedFilters?: ApiResponse['extracted_filters']) => {
  const { teams: allTeams, leagues: allLeagues } = await fetchTeamsForRecognition();
  
  // Enhanced direct league recognition from query text
  const directLeagueCheck = (queryText: string) => {
    const lowerQuery = queryText.toLowerCase();
    
    // Direct league mentions with "I like" or similar phrases
    if (/\b(i\s+like|love|follow|support|favorite|favourite)\b/i.test(lowerQuery)) {
      for (const league of allLeagues) {
        if (lowerQuery.includes(league.toLowerCase())) {
          return league;
        }
      }
    }
    
    // Also check for direct league mentions without "I like"
    for (const league of allLeagues) {
      if (lowerQuery.includes(league.toLowerCase())) {
        return league;
      }
    }
    
    return null;
  };
  
  // Enhanced direct team recognition from query text
  const directTeamCheck = (queryText: string) => {
    const lowerQuery = queryText.toLowerCase();
    const foundTeams: any[] = [];
    
    // Check for "I like [team]" or similar phrases
    if (/\b(i\s+like|love|follow|support|favorite|favourite)\b/i.test(lowerQuery)) {
      for (const team of allTeams) {
        if (lowerQuery.includes(team.name.toLowerCase()) || 
            lowerQuery.includes(team.name.toLowerCase().replace(/\s+/g, '')) ||
            team.name.toLowerCase().includes(lowerQuery.replace(/\b(i\s+like|love|follow|support|favorite|favourite)\s+/i, '').trim())) {
          foundTeams.push(team);
        }
      }
    }
    
    // Also check for direct team mentions
    for (const team of allTeams) {
      if (lowerQuery.includes(team.name.toLowerCase())) {
        foundTeams.push(team);
      }
    }
    
    return foundTeams;
  };
  
  // Check for direct mentions in the query first
  const directLeague = directLeagueCheck(query);
  const directTeams = directTeamCheck(query);
  
  // Auto-add directly mentioned teams or extracted teams
  const teamsToProcess = directTeams.length > 0 ? directTeams : 
    (extractedFilters?.teams || []).map(extractedTeam => {
      return allTeams.find(team => 
        team.name.toLowerCase().includes(extractedTeam.toLowerCase()) ||
        extractedTeam.toLowerCase().includes(team.name.toLowerCase())
      );
    }).filter(Boolean);
  
  if (teamsToProcess.length > 0) {
    const recognizedTeams: any[] = [];
    
    teamsToProcess.forEach(matchedTeam => {
      if (matchedTeam) {
        recognizedTeams.push({
          id: matchedTeam.id,
          name: matchedTeam.name,
          subtitle: `Football • ${matchedTeam.league}`,
          logo: "⚽" // Default logo, could be enhanced
        });
      }
    });
    
    if (recognizedTeams.length > 0) {
      // Get existing favorites
      const existingTeams = JSON.parse(localStorage.getItem('favTeams') || '[]');
      const existingIds = existingTeams.map((t: any) => t.id);
      
      // Add only new teams
      const newTeams = recognizedTeams.filter(team => !existingIds.includes(team.id));
      
      if (newTeams.length > 0) {
        const updatedTeams = [...existingTeams, ...newTeams];
        localStorage.setItem('favTeams', JSON.stringify(updatedTeams));
        window.dispatchEvent(new CustomEvent("fav:teams:updated"));
        
        // Show notification to user about auto-added teams
        console.log(`Auto-added ${newTeams.length} team(s) to favorites:`, newTeams.map(t => t.name));
      }
    }
  }
  
  // Auto-add directly mentioned league or extracted league
  const leagueToAdd = directLeague || 
    (extractedFilters?.league ? allLeagues.find(league => 
      league.toLowerCase().includes(extractedFilters.league!.toLowerCase()) ||
      extractedFilters.league!.toLowerCase().includes(league.toLowerCase())
    ) : null);
  
  if (leagueToAdd) {
    const matchedLeague = leagueToAdd;
      const existingLeagues = JSON.parse(localStorage.getItem('favLeagues') || '[]');
      const leagueId = matchedLeague.toLowerCase().replace(/\s+/g, '-');
      const exists = existingLeagues.some((l: any) => l.id === leagueId);
      
      if (!exists) {
        const newLeague = {
          id: leagueId,
          name: matchedLeague,
          country: "Europe", // Default, could be enhanced
          emoji: "🏆"
        };
        
        const updatedLeagues = [...existingLeagues, newLeague];
        localStorage.setItem('favLeagues', JSON.stringify(updatedLeagues));
        window.dispatchEvent(new CustomEvent("fav:leagues:updated"));
        
        console.log(`Auto-added league to favorites: ${matchedLeague}`);
      }
    }
  }
};

export function useAIProvider() {
  const abortRef = useRef<AbortController | null>(null);

  const search = useCallback(async (query: string, opts?: { userId?: string; max?: number; timeoutMs?: number }) : Promise<ProviderItem[]> => {
    const q = (query || "").trim();
    if (!q) return [];

    try { abortRef.current?.abort(); } catch {}
    abortRef.current = new AbortController();

    const timeoutMs = opts?.timeoutMs ?? 20000; // 20s default
    const timeout = setTimeout(() => abortRef.current?.abort(), timeoutMs);

    const body = { query: q, user_id: opts?.userId ?? "make-proto", max_results: opts?.max ?? 20, llm_provider: "openai" };

    let res: Response;
    try {
      res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: abortRef.current.signal,
      });
    } catch { 
      clearTimeout(timeout);
      return []; 
    }
    clearTimeout(timeout);
    if (!res.ok) return [];

    let data: ApiResponse;
    try { data = await res.json(); } catch { return []; }
    
    // Auto-add recognized teams and leagues to favorites after successful search
    // Always run recognition, even if no matches (for direct statements like "I like PSG")
    setTimeout(() => autoAddToFavorites(q, data.extracted_filters), 100);

    // map requested market filters to our kinds
    const wanted = (data.extracted_filters?.market_types || []).map(norm);
    const toKind = (t: string): MarketKind => {
      if (/^1x2$|(^|\W)1x2(\W|$)/i.test(t)) return "1x2";
      if (/over\/?under|totals|^ou$/i.test(t)) return "ou";
      if (/btts|both.*score/i.test(t)) return "btts";
      if (/double\s*chance|^dc$/i.test(t)) return "dc";
      if (/half.*full|ht\/ft/i.test(t)) return "htft";
      return "1x2";
    };
    const restrictTo = new Set<MarketKind>((wanted.length ? wanted : ["1x2"]).map(toKind));

    const items: ProviderItem[] = [];
    for (const m of data.matches || []) {
      const base = {
        id: makeEventId(m),
        startISO: m.match_date,
        league: m.league || "",
        competition: m.competition,
        teams: [{ name: m.home_team }, { name: m.away_team }] as [{name:string},{name:string}],
      };

      if (restrictTo.has("1x2")) {
        const x = pick1x2(m);
        if (x.one || x.draw || x.two) items.push({ kind: "1x2", ...base, data: x });
      }
      if (restrictTo.has("ou")) {
        const arr = pickOUAllLines(m);
        if (arr) items.push({ kind: "ou", ...base, data: arr });
      }
      if (restrictTo.has("btts")) {
        const x = pickBTTS(m);
        if (x) items.push({ kind: "btts", ...base, data: x });
      }
      if (restrictTo.has("dc")) {
        const x = pickDC(m);
        if (x) items.push({ kind: "dc", ...base, data: x });
      }
      if (restrictTo.has("htft")) {
        const x = pickHTFT(m);
        if (x) items.push({ kind: "htft", ...base, data: x });
      }
    }
    return items;
  }, []);

  const searchByPill = useCallback(async (pill: { team?: string; league?: string; market?: MarketKind }) => {
    const base = pill.team ? `Show ${pill.team}` : pill.league ? `Show ${pill.league}` : "";
    const mq =
      pill.market === "ou"   ? " Over/Under | Full Time"
    : pill.market === "btts" ? " Both Teams To Score | Full Time"
    : pill.market === "dc"   ? " Double Chance | Full Time"
    : pill.market === "htft" ? " Half Time/Full Time"
    : " 1X2 | Full Time";
    return base ? search(`${base} with ${mq}`) : [];
  }, [search]);

  return { search, searchByPill };
}