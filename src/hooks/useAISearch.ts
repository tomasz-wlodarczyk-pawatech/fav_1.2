import { useState, useCallback } from "react";
import {
  APISearchRequest,
  APISearchResponse,
  TransformedMatch,
} from "../lib/ai-search-types";
import { searchResultsStore } from "../lib/searchResultsStore";

const API_ENDPOINT =
  "https://alluring-inspiration-production.up.railway.app/betting/analyze-fast";

export function useAISearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TransformedMatch[]>(
    [],
  );
  const [error, setError] = useState<string | null>(null);

  const transformMatch = (
    match: any,
    index: number,
  ): TransformedMatch => {
    // Generate a unique ID from home/away teams and match date
    const id =
      `${match.home_team}-${match.away_team}-${match.match_date}`
        .replace(/\s+/g, "-")
        .toLowerCase();

    // Extract odds values from the odds object and format them properly
    const oddsEntries = Object.entries(match.odds || {});
    
    // Map common betting market types to standard labels
    const getOddsLabel = (key: string): string => {
      const normalizedKey = key.toLowerCase();
      if (normalizedKey.includes('home') || normalizedKey === '1') return '1';
      if (normalizedKey.includes('draw') || normalizedKey === 'x') return 'X';
      if (normalizedKey.includes('away') || normalizedKey === '2') return '2';
      if (normalizedKey.includes('handicap')) return 'HCP';
      if (normalizedKey.includes('over')) return 'Over';
      if (normalizedKey.includes('under')) return 'Under';
      return key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter as fallback
    };

    // Create proper odds labels and values for MatchCard component
    // Always ensure we have exactly 3 items for consistency
    const rawOdds = oddsEntries.slice(0, 3);
    while (rawOdds.length < 3) {
      rawOdds.push(['', '1.00']); // Pad with default values
    }

    const odds = rawOdds.map(([key], index) => {
      if (key) return getOddsLabel(key);
      // Fallback labels if key is missing
      return ['1', 'X', '2'][index] || `Bet${index + 1}`;
    });

    const oddsValues = rawOdds.map(([, value]) => {
      const numValue = parseFloat(value as string);
      return !isNaN(numValue) && numValue > 0 ? numValue.toFixed(2) : '1.00';
    });

    // Determine if live based on match date (if it's close to current time)
    const matchDate = new Date(match.match_date);
    const now = new Date();
    const diffMinutes =
      Math.abs(now.getTime() - matchDate.getTime()) /
      (1000 * 60);
    const isLive = diffMinutes < 120; // Consider live if within 2 hours

    return {
      id,
      isLive,
      teams: {
        home: match.home_team,
        away: match.away_team,
      },
      league: {
        name: match.league,
      },
      odds,
      oddsValues,
      betCount: Object.keys(match.markets || {}).length,
      timestamp: match.match_date,
      badges: match.relevance > 0.8 ? ["High Relevance"] : [],
      isPopular: match.relevance > 0.9,
      boostedOddsIndex: null,
    };
  };

  const search = useCallback(
    async (query: string, maxResults: number = 10, force: boolean = false) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const requestBody: APISearchRequest = {
          query: query.trim(),
          user_id: `figma-make-${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${force ? 'forced' : 'normal'}`, // Unique session ID with force flag and random string
          max_results: maxResults,
          llm_provider: "openai",
        };

        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          // Add timeout to prevent hanging requests
          signal: AbortSignal.timeout(15000), // 15 second timeout
        });

        if (!response.ok) {
          throw new Error(
            `API request failed: ${response.status} ${response.statusText}`,
          );
        }

        const data: APISearchResponse = await response.json();
        console.log(data);
        if (data.matches && Array.isArray(data.matches)) {
          const transformedMatches =
            data.matches.map(transformMatch);
          setResults(transformedMatches);
          // Store search results for favorites functionality
          searchResultsStore.addResults(transformedMatches);
        } else {
          setResults([]);
        }
      } catch (err) {
        console.error("AI Search API Error:", err);
        let errorMessage = "Failed to search matches";

        if (err instanceof Error) {
          if (err.name === "AbortError") {
            errorMessage =
              "Search request timed out. Please try again.";
          } else if (
            err.message.includes("NetworkError") ||
            err.message.includes("fetch")
          ) {
            errorMessage =
              "Network error. Please check your connection.";
          } else {
            errorMessage = err.message;
          }
        }

        setError(errorMessage);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    search,
    clearResults,
    results,
    isLoading,
    error,
  };
}