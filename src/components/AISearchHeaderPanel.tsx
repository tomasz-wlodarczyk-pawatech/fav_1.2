// SUBMIT-ONLY AI SEARCH (Header panel)
// - No predictive search. Runs only on Enter or Search button.
// - Loader shown while searching.
// - Works across all pages with high z-index.
// - Uses MarketMatchCard for market results and MatchCard for 1X2.
// - Favorites toggle (incl. 1X2) writes to favoritesStoreV2.

import React, { useState } from "react";
import { X, Search as SearchIcon, Loader2 } from "lucide-react";
import MarketMatchCard from "./MarketMatchCard";
import { MatchCard } from "./MatchCard";
import { useAIProvider } from "../hooks/useAIProvider";
import { favoritesStoreV2 } from "../lib/favoritesStoreV2";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
};

export default function AISearchHeaderPanel({ isOpen, onClose, initialQuery = "" }: Props) {
  const { search } = useAIProvider();
  const [q, setQ] = useState(initialQuery);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function runSearch() {
    const query = q.trim();
    if (!query) return;
    setSubmitted(true);
    setIsLoading(true);
    setError(null);
    setResults([]); // Clear previous results when starting new search
    try {
      // give the API more time (20s). If your hook ignores options, no harm.
      const out = await search(query, { timeoutMs: 20000 });
      setResults(Array.isArray(out) ? out : []);
    } catch (e: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSearch();
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose} />}

      {/* Panel */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto w-full max-w-md px-4 pt-2">
          <div className="bg-white rounded-t-2xl shadow-2xl">
            {/* Handle */}
            <div className="flex items-center justify-center pt-2">
              <div className="h-1.5 w-12 rounded-full bg-gray-200" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onEnter}
                  placeholder="Try: Arsenal over 2.5 goals, Liverpool BTTS, Premier League 1X2..."
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
              <button
                type="button"
                onClick={runSearch}
                disabled={isLoading || !q.trim()}
                className={`h-10 px-3 rounded-lg text-sm font-medium ${
                  isLoading || !q.trim()
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-[#9ce800] text-black hover:bg-[#8bd400]"
                }`}
              >
                Search
              </button>
              <button
                className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-600 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100"
                onClick={onClose}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[65vh] overflow-y-auto px-4 pb-6 space-y-3">
              {!submitted && !q && (
                <div className="text-xs text-gray-500 px-1 py-2">
                  Try: "Arsenal over 2.5 goals", "Liverpool BTTS", "Premier League 1X2", "Real Madrid double chance"
                </div>
              )}

              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Searching...</span>
                </div>
              )}

              {error && (
                <div className="text-xs text-red-500 px-1 py-2 bg-red-50 rounded-lg">
                  Error: {error}
                </div>
              )}


              {results.map((r: any) => {
                if (r.kind === "1x2") {
                  const key = favoritesStoreV2.keyFor(r);
                  const fav = favoritesStoreV2.has(key);
                  return (
                    <MatchCard
                      key={`hdr-${r.id}-1x2`}
                      id={r.id}
                      isLive={false}
                      teams={r.teams}
                      league={r.league}
                      odds={["1","X","2"]}
                      oddsValues={[
                        r.data.one ?? "",
                        r.data.draw ?? "",
                        r.data.two ?? "",
                      ]}
                      betCount={undefined}
                      timestamp={{ time: "", date: "" }}
                      badges={[]}
                      isPopular={false}
                      boostedOddsIndex={undefined}
                      isFavorite={fav}
                      onFavoriteToggle={() => favoritesStoreV2.toggle(r)}
                    />
                  );
                }
                return <MarketMatchCard key={`hdr-${r.id}-${r.kind}`} item={r} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}