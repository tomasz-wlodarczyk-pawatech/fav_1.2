import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { X, Search, Loader2 } from "lucide-react";
import { MatchCard } from "./MatchCard";
import MarketMatchCard from "./MarketMatchCard";
import { useAIProvider } from "../hooks/useAIProvider";
import { favoritesStore } from "../lib/favoritesStore";
import { favoritesStoreV2 } from "../lib/favoritesStoreV2";

type Props = {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
};

export function AISearchDrawer({ isOpen, initialQuery = "", onClose }: Props) {
  const [q, setQ] = useState(initialQuery);
  const [mounted, setMounted] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { search } = useAIProvider();
  const navigate = useNavigate();

  useEffect(() => {
    setQ(initialQuery);
    // Trigger search immediately when drawer opens with a query
    if (isOpen && initialQuery.trim() && initialQuery.trim().length >= 2) {
      // Check if query contains "favorite"/"favourite" first - instant response
      if (/\b(favorite|favourite)\b/i.test(initialQuery.trim())) {
        console.log("🎯 Query contains 'favorite' - executing search and navigating after 1 second");
        
        // Execute search immediately but navigate after 1 second delay
        search(initialQuery.trim()).then(() => {
          setTimeout(() => {
            onClose(); // Close the modal
            navigate('/favorites'); // Navigate to favorites
          }, 1000); // 1 second delay
        }).catch(() => {
          setTimeout(() => {
            onClose();
            navigate('/favorites');
          }, 1000); // 1 second delay
        });
        return;
      }
      
      setIsLoading(true);
      setError(null);
      setResults([]);
      
      const timeoutId = setTimeout(async () => {
        try {
          const searchResults = await search(initialQuery.trim());
          setResults(searchResults);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Search failed");
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      }, 100); // Short delay to show loading
      
      return () => clearTimeout(timeoutId);
    }
  }, [initialQuery, isOpen, search, onClose, navigate]);
  
  useEffect(() => { if (isOpen) setMounted(true); }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Clear results when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setResults([]);
      setError(null);
      setQ("");
      setIsLoading(false);
    }
  }, [isOpen]);

  // Debounced search effect
  useEffect(() => {
    if (!q.trim() || q.trim().length < 2) {
      setResults([]);
      setError(null);
      return;
    }

    // Check if query contains "favorite"/"favourite" first - instant response
    if (/\b(favorite|favourite)\b/i.test(q.trim())) {
      console.log("🎯 Query contains 'favorite' - executing search and navigating after 1 second");
      
      // Execute search immediately without debounce for favorites
      setIsLoading(true);
      search(q.trim()).then(() => {
        setIsLoading(false);
        setTimeout(() => {
          onClose(); // Close the modal
          navigate('/favorites'); // Navigate to favorites
        }, 1000); // 1 second delay
      }).catch(() => {
        setIsLoading(false);
        setTimeout(() => {
          onClose();
          navigate('/favorites');
        }, 1000); // 1 second delay
      });
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      setError(null);
      setResults([]); // Clear previous results when starting new search
      try {
        const searchResults = await search(q.trim());
        setResults(searchResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Search failed");
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [q, search, onClose, navigate]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose} />}

      {/* Sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-auto w-full max-w-md bg-white rounded-t-2xl shadow-2xl">
          {/* Handle */}
          <div className="flex items-center justify-center pt-2">
            <div className="h-1.5 w-12 rounded-full bg-gray-200" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-end px-4 py-3">
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

            {(isLoading || (q && results.length === 0 && !error)) && (
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
                    key={`ai-${r.id}-1x2`}
                    id={r.id}
                    isLive={false}
                    teams={r.teams}
                    league={r.league}
                    odds={["1","X","2"]}
                    oddsValues={[r.data.one || "", r.data.draw || "", r.data.two || ""]}
                    betCount={undefined}
                    timestamp={{ time: "", date: "" }}
                    badges={[]}
                    isPopular={false}
                    boostedOddsIndex={undefined}
                    isFavorite={fav}
                    onFavoriteToggle={() => favoritesStoreV2.toggle(r)}  // <-- store snapshot as market favorite
                  />
                );
              }
              // Non-1x2 markets use MarketMatchCard (already toggles favoritesStoreV2 inside)
              return <MarketMatchCard key={`ai-${r.id}-${r.kind}`} item={r} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}