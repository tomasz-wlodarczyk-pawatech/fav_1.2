import { useCallback, useRef } from "react";
import { favoritesStore } from "../lib/favoritesStore";
import { favoritesStoreV2 } from "../lib/favoritesStoreV2";

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

// Mock data for specific queries
const MOCK_DATA: Record<string, ApiResponse> = {
  "I want to see Man City games with odds under 1.3 any market": {
    query: "I want to see Man City games with odds under 1.3 any market",
    user_id: "aag",
    extracted_filters: {
      teams: ["Man City"],
      market_types: [],
      min_odds: null,
      max_odds: 1.3,
      date_from: null,
      date_to: null,
      league: "Premier League"
    },
    matches: [
      {
        home_team: "Manchester City",
        away_team: "Burnley FC",
        match_date: "2025-09-27T14:00:00Z",
        league: "Premier League",
        relevance: 1,
        markets: {
          "1X2 | Full Time": {
            "1": 1.15
          },
          "Double Chance | Full Time": {
            "12": 1.1,
            "1X": 1.05
          },
          "Over/Under | Full Time": {
            "Over 1.5": 1.13,
            "Under 5.5": 1.12
          }
        },
        odds: {
          "1": 1.15,
          "2": 0,
          "X": 0
        },
        event_id: "29846177",
        competition: "Football - England - Premier League"
      },
      {
        home_team: "Brentford FC",
        away_team: "Manchester City",
        match_date: "2025-10-05T15:30:00Z",
        league: "Premier League",
        relevance: 1,
        markets: {
          "Double Chance | Full Time": {
            "12": 1.23,
            "X2": 1.21
          },
          "Over/Under | Full Time": {
            "Over 0.5": 1.02,
            "Over 1.5": 1.17,
            "Under 4.5": 1.22,
            "Under 5.5": 1.07
          }
        },
        odds: {
          "1": 0,
          "2": 0,
          "X": 0
        },
        event_id: "30000315",
        competition: "Football - England - Premier League"
      }
    ]
  },
  "I love betting on Man City": {
    query: "I love betting on Man City",
    user_id: "aag",
    extracted_filters: {
      teams: ["Man City"],
      market_types: [],
      min_odds: null,
      max_odds: null,
      date_from: null,
      date_to: null,
      league: "Premier League"
    },
    matches: [
      {
        home_team: "Manchester City",
        away_team: "Burnley FC",
        match_date: "2025-09-27T14:00:00Z",
        league: "Premier League",
        relevance: 1,
        markets: {
          "1X2 | Full Time": {
            "1": 1.15,
            "2": 15.5,
            "X": 8
          },
          "Double Chance | Full Time": {
            "12": 1.1,
            "1X": 1.05,
            "X2": 4.3
          },
          "Both Teams To Score | Full Time": {
            "Yes": 2.15,
            "No": 1.7
          },
          "Over/Under | Full Time": {
            "Over 1.5": 1.13,
            "Under 1.5": 6,
            "Over 2.5": 1.43,
            "Under 2.5": 2.8,
            "Over 3.5": 2.09,
            "Under 3.5": 1.74,
            "Over 4.5": 3.5,
            "Under 4.5": 1.31,
            "Over 5.5": 6.25,
            "Under 5.5": 1.12
          },
          "Half Time/Full Time": {
            "1/1": 1.47,
            "1/X": 28,
            "1/2": 100,
            "X/1": 4.1,
            "X/X": 11,
            "X/2": 29,
            "2/1": 25,
            "2/X": 35,
            "2/2": 26
          }
        },
        odds: {
          "1": 1.15,
          "2": 15.5,
          "X": 8
        },
        event_id: "29846177",
        competition: "Football - England - Premier League"
      },
      {
        home_team: "Brentford FC",
        away_team: "Manchester City",
        match_date: "2025-10-05T15:30:00Z",
        league: "Premier League",
        relevance: 1,
        markets: {
          "1X2 | Full Time": {
            "1": 4.65,
            "2": 1.64,
            "X": 4.35
          },
          "Double Chance | Full Time": {
            "12": 1.23,
            "1X": 2.17,
            "X2": 1.21
          },
          "Both Teams To Score | Full Time": {
            "Yes": 1.63,
            "No": 2.3
          },
          "Over/Under | Full Time": {
            "Over 0.5": 1.02,
            "Under 0.5": 14,
            "Over 1.5": 1.17,
            "Under 1.5": 4.95,
            "Over 2.5": 1.57,
            "Under 2.5": 2.4,
            "Over 3.5": 2.45,
            "Under 3.5": 1.56,
            "Over 4.5": 4.25,
            "Under 4.5": 1.22,
            "Over 5.5": 8,
            "Under 5.5": 1.07
          },
          "Half Time/Full Time": {
            "1/1": 7.75,
            "1/X": 17,
            "1/2": 22,
            "X/1": 11,
            "X/X": 6.75,
            "X/2": 4.75,
            "2/1": 45,
            "2/X": 16,
            "2/2": 2.3
          }
        },
        odds: {
          "1": 4.65,
          "2": 1.64,
          "X": 4.35
        },
        event_id: "30000315",
        competition: "Football - England - Premier League"
      }
    ]
  },
  "I want to favourite Arsenal OU and BTTS": {
    query: "I want to favourite Arsenal OU and BTTS",
    user_id: "aag",
    extracted_filters: {
      teams: ["Arsenal"],
      market_types: ["over/under", "both teams to score"],
      min_odds: null,
      max_odds: null,
      date_from: null,
      date_to: null,
      league: "Premier League"
    },
    matches: [
      {
        home_team: "Newcastle United",
        away_team: "Arsenal FC",
        match_date: "2025-09-28T15:30:00Z",
        league: "Premier League",
        relevance: 1,
        markets: {
          "Both Teams To Score | Full Time": {
            "Yes": 1.84,
            "No": 1.97
          },
          "Over/Under | Full Time": {
            "Over 0.5": 1.06,
            "Under 0.5": 9.25,
            "Over 1.5": 1.33,
            "Under 1.5": 3.3,
            "Over 2.5": 2.03,
            "Under 2.5": 1.79,
            "Over 3.5": 3.55,
            "Under 3.5": 1.29,
            "Over 4.5": 7.25,
            "Under 4.5": 1.09,
            "Over 5.5": 14,
            "Under 5.5": 1.02
          }
        },
        odds: {
          "1": 0,
          "2": 0,
          "X": 0
        },
        event_id: "29860387",
        competition: "Football - England - Premier League"
      },
      {
        home_team: "Arsenal FC",
        away_team: "West Ham United",
        match_date: "2025-10-04T14:00:00Z",
        league: "Premier League",
        relevance: 1,
        markets: {
          "Both Teams To Score | Full Time": {
            "Yes": 2.21,
            "No": 1.67
          },
          "Over/Under | Full Time": {
            "Over 0.5": 1.01,
            "Under 0.5": 15,
            "Over 1.5": 1.17,
            "Under 1.5": 4.95,
            "Over 2.5": 1.56,
            "Under 2.5": 2.45,
            "Over 3.5": 2.45,
            "Under 3.5": 1.56,
            "Over 4.5": 4.25,
            "Under 4.5": 1.22,
            "Over 5.5": 8,
            "Under 5.5": 1.07
          }
        },
        odds: {
          "1": 0,
          "2": 0,
          "X": 0
        },
        event_id: "29990760",
        competition: "Football - England - Premier League"
      }
    ]
  },
  "PSG 1x2 OU": {
    query: "PSG 1x2 OU",
    user_id: "aag",
    extracted_filters: {
      teams: ["PSG"],
      market_types: ["1x2", "over/under"],
      min_odds: null,
      max_odds: null,
      date_from: null,
      date_to: null,
      league: "Ligue 1"
    },
    matches: [
      {
        home_team: "Paris Saint-Germain",
        away_team: "Olympique Marseille",
        match_date: "2025-09-28T19:45:00Z",
        league: "Ligue 1",
        relevance: 1,
        markets: {
          "1X2 | Full Time": {
            "1": 1.35,
            "X": 5.20,
            "2": 8.50
          },
          "Over/Under | Full Time": {
            "Over 0.5": 1.06,
            "Under 0.5": 9.25,
            "Over 1.5": 1.42,
            "Under 1.5": 2.85,
            "Over 2.5": 2.05,
            "Under 2.5": 1.75,
            "Over 3.5": 3.35,
            "Under 3.5": 1.32,
            "Over 4.5": 6.25,
            "Under 4.5": 1.12
          }
        },
        odds: {
          "1": 1.35,
          "X": 5.20,
          "2": 8.50
        },
        event_id: "30125847",
        competition: "Football - France - Ligue 1"
      },
      {
        home_team: "AS Monaco",
        away_team: "Paris Saint-Germain",
        match_date: "2025-10-05T16:00:00Z",
        league: "Ligue 1",
        relevance: 1,
        markets: {
          "1X2 | Full Time": {
            "1": 4.20,
            "X": 3.85,
            "2": 1.72
          },
          "Over/Under | Full Time": {
            "Over 0.5": 1.08,
            "Under 0.5": 7.50,
            "Over 1.5": 1.48,
            "Under 1.5": 2.65,
            "Over 2.5": 2.15,
            "Under 2.5": 1.68,
            "Over 3.5": 3.55,
            "Under 3.5": 1.29,
            "Over 4.5": 6.75,
            "Under 4.5": 1.10
          }
        },
        odds: {
          "1": 4.20,
          "X": 3.85,
          "2": 1.72
        },
        event_id: "30125901",
        competition: "Football - France - Ligue 1"
      }
    ]
  },
  "I love Serie A and Premier League and betting on 1x2 and OU markets": {
  "query": "I love Serie A and Premier League and betting on 1x2 and OU markets",
  "user_id": "aag",
  "extracted_filters": {
    "teams": [],
    "market_types": [
      "1X2",
      "over/under"
    ],
    "min_odds": null,
    "max_odds": null,
    "date_from": null,
    "date_to": null,
    "league": "Multi-League"
  },
  "matches": [
    {
      "home_team": "Como 1907",
      "away_team": "US Cremonese",
      "match_date": "2025-09-27T13:00:00Z",
      "league": "Serie A",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 1.49,
          "2": 6.5,
          "X": 4.35
        },
        "Over/Under | Full Time": {
          "Over 0.5": 1.04,
          "Under 0.5": 11,
          "Over 1.5": 1.29,
          "Under 1.5": 3.65,
          "Over 2.5": 1.89,
          "Under 2.5": 1.9,
          "Over 3.5": 3.25,
          "Under 3.5": 1.34,
          "Over 4.5": 6.25,
          "Under 4.5": 1.12,
          "Over 5.5": 13,
          "Under 5.5": 1.02
        }
      },
      "odds": {
        "1": 1.49,
        "2": 6.5,
        "X": 4.35
      },
      "event_id": "29752834",
      "competition": "Football - Italy - Serie A"
    },
    {
      "home_team": "Juventus Turin",
      "away_team": "Atalanta BC",
      "match_date": "2025-09-27T16:00:00Z",
      "league": "Serie A",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 1.85,
          "2": 4.25,
          "X": 3.65
        },
        "Over/Under | Full Time": {
          "Over 0.5": 1.05,
          "Under 0.5": 9.5,
          "Over 1.5": 1.32,
          "Under 1.5": 3.35,
          "Over 2.5": 2.01,
          "Under 2.5": 1.8,
          "Over 3.5": 3.55,
          "Under 3.5": 1.29,
          "Over 4.5": 7.25,
          "Under 4.5": 1.09,
          "Over 5.5": 14,
          "Under 5.5": 1.02
        }
      },
      "odds": {
        "1": 1.85,
        "2": 4.25,
        "X": 3.65
      },
      "event_id": "29752849",
      "competition": "Football - Italy - Serie A"
    },
    {
      "home_team": "Cagliari Calcio",
      "away_team": "Inter Milano",
      "match_date": "2025-09-27T18:45:00Z",
      "league": "Serie A",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 5.5,
          "2": 1.6,
          "X": 4.15
        },
        "Over/Under | Full Time": {
          "Over 0.5": 1.04,
          "Under 0.5": 11,
          "Over 1.5": 1.25,
          "Under 1.5": 3.95,
          "Over 2.5": 1.8,
          "Under 2.5": 2.01,
          "Over 3.5": 3,
          "Under 3.5": 1.4,
          "Over 4.5": 5.75,
          "Under 4.5": 1.14,
          "Over 5.5": 11,
          "Under 5.5": 1.04
        }
      },
      "odds": {
        "1": 5.5,
        "2": 1.6,
        "X": 4.15
      },
      "event_id": "29752845",
      "competition": "Football - Italy - Serie A"
    },
    {
      "home_team": "Brentford FC",
      "away_team": "Manchester United",
      "match_date": "2025-09-27T11:30:00Z",
      "league": "Premier League",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 3.4,
          "2": 2.02,
          "X": 3.8
        },
        "Over/Under | Full Time": {
          "Over 0.5": 1.02,
          "Under 0.5": 13,
          "Over 1.5": 1.2,
          "Under 1.5": 4.55,
          "Over 2.5": 1.66,
          "Under 2.5": 2.22,
          "Over 3.5": 2.6,
          "Under 3.5": 1.49,
          "Over 4.5": 4.75,
          "Under 4.5": 1.19,
          "Over 5.5": 9.25,
          "Under 5.5": 1.06
        }
      },
      "odds": {
        "1": 3.4,
        "2": 2.02,
        "X": 3.8
      },
      "event_id": "29845812",
      "competition": "Football - England - Premier League"
    },
    {
      "home_team": "Chelsea FC",
      "away_team": "Brighton & Hove Albion",
      "match_date": "2025-09-27T14:00:00Z",
      "league": "Premier League",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 1.78,
          "2": 4.15,
          "X": 4.05
        },
        "Over/Under | Full Time": {
          "Over 0.5": 1.02,
          "Under 0.5": 14,
          "Over 1.5": 1.18,
          "Under 1.5": 4.85,
          "Over 2.5": 1.6,
          "Under 2.5": 2.35,
          "Over 3.5": 2.5,
          "Under 3.5": 1.54,
          "Over 4.5": 4.45,
          "Under 4.5": 1.21,
          "Over 5.5": 8.25,
          "Under 5.5": 1.07
        }
      },
      "odds": {
        "1": 1.78,
        "2": 4.15,
        "X": 4.05
      },
      "event_id": "29845541",
      "competition": "Football - England - Premier League"
    },
    {
      "home_team": "Crystal Palace",
      "away_team": "Liverpool FC",
      "match_date": "2025-09-27T14:00:00Z",
      "league": "Premier League",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 4.05,
          "2": 1.81,
          "X": 3.95
        },
        "Over/Under | Full Time": {
          "Over 0.5": 1.03,
          "Under 0.5": 12,
          "Over 1.5": 1.22,
          "Under 1.5": 4.25,
          "Over 2.5": 1.72,
          "Under 2.5": 2.12,
          "Over 3.5": 2.8,
          "Under 3.5": 1.44,
          "Over 4.5": 5.25,
          "Under 4.5": 1.16,
          "Over 5.5": 10,
          "Under 5.5": 1.05
        }
      },
      "odds": {
        "1": 4.05,
        "2": 1.81,
        "X": 3.95
      },
      "event_id": "29846196",
      "competition": "Football - England - Premier League"
    },
    {
      "home_team": "Manchester City",
      "away_team": "Burnley FC",
      "match_date": "2025-09-27T14:00:00Z",
      "league": "Premier League",
      "relevance": 1,
      "markets": {
        "1X2 | Full Time": {
          "1": 1.15,
          "2": 15.5,
          "X": 8
        },
        "Over/Under | Full Time": {
          "Over 1.5": 1.13,
          "Under 1.5": 6,
          "Over 2.5": 1.43,
          "Under 2.5": 2.8,
          "Over 3.5": 2.09,
          "Under 3.5": 1.74,
          "Over 4.5": 3.5,
          "Under 4.5": 1.31,
          "Over 5.5": 6.25,
          "Under 5.5": 1.12
        }
      },
      "odds": {
        "1": 1.15,
        "2": 15.5,
        "X": 8
      },
      "event_id": "29846177",
      "competition": "Football - England - Premier League"
    }
  ]
}
};

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
    if (!queryText || typeof queryText !== 'string') return null;
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
    if (!queryText || typeof queryText !== 'string') return [];
    const lowerQuery = queryText.toLowerCase();
    const foundTeams: any[] = [];
    
    // Check for "I like [team]" or similar phrases
    if (/\b(i\s+like|love|follow|support|favorite|favourite)\b/i.test(lowerQuery)) {
      const cleanedQuery = lowerQuery.replace(/\b(i\s+like|love|follow|support|favorite|favourite)\s+/i, '').trim();
      for (const team of allTeams) {
        const teamLower = team.name.toLowerCase();
        // Enhanced matching: exact, partial, and keyword matches
        if (lowerQuery.includes(teamLower) || 
            teamLower.includes(cleanedQuery) ||
            cleanedQuery.includes(teamLower) ||
            // Handle cases like "Juventus" matching "Juventus Turin"
            teamLower.split(' ').some(word => cleanedQuery.includes(word) && word.length > 3) ||
            cleanedQuery.split(' ').some(word => teamLower.includes(word) && word.length > 3)) {
          foundTeams.push(team);
        }
      }
    }
    
    // Also check for direct team mentions with enhanced matching
    for (const team of allTeams) {
      const teamLower = team.name.toLowerCase();
      if (lowerQuery.includes(teamLower) ||
          teamLower.includes(lowerQuery) ||
          // Handle partial matches like "juventus" → "juventus turin"
          teamLower.split(' ').some(word => lowerQuery.includes(word) && word.length > 3) ||
          lowerQuery.split(' ').some(word => teamLower.includes(word) && word.length > 3)) {
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
};

export function useAIProvider() {
  const abortRef = useRef<AbortController | null>(null);

  const search = useCallback(async (query: string, opts?: { userId?: string; max?: number; timeoutMs?: number }) : Promise<ProviderItem[]> => {
    const q = (query || "").trim();
    if (!q) return [];

    // Check for mock data first
    if (MOCK_DATA[q]) {
      console.log(`🎯 Using mock data for query: "${q}"`);
      const data = MOCK_DATA[q];
      
      // Still run auto-add to favorites for mock data
      setTimeout(() => autoAddToFavorites(q, data.extracted_filters), 100);
      
      // Continue with the same processing logic for mock data
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

      // Check if query contains "favorite"/"favourite" and auto-add items to favorites
      if (/\b(favorite|favourite)\b/i.test(q)) {
        let addedCount = 0;
        const addedItems: string[] = [];
        
        items.forEach(item => {
          // Add to favoritesStoreV2 (for Favourite markets section)
          const key = favoritesStoreV2.keyFor(item);
          if (!favoritesStoreV2.has(key)) {
            favoritesStoreV2.upsert(item);
            addedCount++;
            addedItems.push(`${item.teams[0].name} vs ${item.teams[1].name} (${item.kind.toUpperCase()})`);
          }
          
          // Also add to regular favoritesStore (for match cards)
          if (!favoritesStore.has(item.id)) {
            const currentFavorites = favoritesStore.get();
            favoritesStore.set([...currentFavorites, item.id]);
          }
        });
        
        if (addedCount > 0) {
          console.log(`🌟 Auto-added ${addedCount} market item(s) to favorites:`, addedItems);
        }
      }

      return items;
    }

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

    // Check if query contains "favorite"/"favourite" and auto-add items to favorites
    if (/\b(favorite|favourite)\b/i.test(q)) {
      let addedCount = 0;
      const addedItems: string[] = [];
      
      items.forEach(item => {
        // Add to favoritesStoreV2 (for Favourite markets section)
        const key = favoritesStoreV2.keyFor(item);
        if (!favoritesStoreV2.has(key)) {
          favoritesStoreV2.upsert(item);
          addedCount++;
          addedItems.push(`${item.teams[0].name} vs ${item.teams[1].name} (${item.kind.toUpperCase()})`);
        }
        
        // Also add to regular favoritesStore (for match cards)
        if (!favoritesStore.has(item.id)) {
          const currentFavorites = favoritesStore.get();
          favoritesStore.set([...currentFavorites, item.id]);
        }
      });
      
      if (addedCount > 0) {
        console.log(`🌟 Auto-added ${addedCount} market item(s) to favorites:`, addedItems);
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