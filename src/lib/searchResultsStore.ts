import { TransformedMatch } from "./ai-search-types";

type Listener = () => void;

const KEY = "searchResultsCache";

function read(): TransformedMatch[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(matches: TransformedMatch[]) {
  localStorage.setItem(KEY, JSON.stringify(matches));
  window.dispatchEvent(new CustomEvent("searchResults:changed"));
}

let cache = read();
const listeners: Set<Listener> = new Set();

export const searchResultsStore = {
  get(): TransformedMatch[] {
    cache = read();
    return cache;
  },
  
  find(id: string): TransformedMatch | undefined {
    return searchResultsStore.get().find(match => match.id === id);
  },
  
  addResults(results: TransformedMatch[]) {
    // Merge with existing results, avoiding duplicates
    const existing = searchResultsStore.get();
    const existingIds = new Set(existing.map(m => m.id));
    const newResults = results.filter(r => !existingIds.has(r.id));
    const merged = [...existing, ...newResults];
    
    // Keep only the most recent 100 results to avoid storage bloat
    const trimmed = merged.slice(-100);
    
    cache = trimmed;
    write(cache);
    listeners.forEach((l) => l());
  },
  
  clear() {
    cache = [];
    write(cache);
    listeners.forEach((l) => l());
  },
  
  subscribe(listener: Listener) {
    listeners.add(listener);
    const handler = () => listener();
    window.addEventListener("searchResults:changed", handler);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("searchResults:changed", handler);
    };
  },
};