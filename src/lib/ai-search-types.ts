export interface APISearchRequest {
  query: string;
  user_id: string;
  max_results: number;
  llm_provider: "openai";
}

export interface ExtractedFilters {
  teams: string[];
  market_types: string[];
  min_odds: number | null;
  max_odds: number | null;
  date_from: string | null;
  date_to: string | null;
  league: string;
}

export interface APIMatch {
  home_team: string;
  away_team: string;
  match_date: string;
  league: string;
  relevance: number;
  markets: Record<string, Record<string, string>>;
  odds: Record<string, string>;
}

export interface APISearchResponse {
  query: string;
  user_id: string;
  extracted_filters: ExtractedFilters;
  matches: APIMatch[];
  execution_time: number;
  timestamp: string;
}

export interface TransformedMatch {
  id: string;
  isLive: boolean;
  teams: {
    home: string;
    away: string;
  };
  league: {
    name: string;
  };
  odds: string[];
  oddsValues: string[];
  betCount: number;
  timestamp: string;
  badges: string[];
  isPopular: boolean;
  boostedOddsIndex: number | null;
}