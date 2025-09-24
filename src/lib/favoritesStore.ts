type Listener = () => void;

const KEY = "favoriteMatches";

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(ids: string[]) {
  localStorage.setItem(KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent("favorites:changed"));
}

let cache = read();
const listeners: Set<Listener> = new Set();

export const favoritesStore = {
  get(): string[] {
    cache = read();
    return cache;
  },
  has(id: string) {
    return favoritesStore.get().includes(id);
  },
  set(ids: string[]) {
    cache = Array.from(new Set(ids));
    write(cache);
    listeners.forEach((l) => l());
  },
  toggle(id: string) {
    const next = favoritesStore.has(id)
      ? favoritesStore.get().filter((x) => x !== id)
      : [...favoritesStore.get(), id];
    favoritesStore.set(next);
  },
  subscribe(listener: Listener) {
    listeners.add(listener);
    const handler = () => listener();
    window.addEventListener("favorites:changed", handler);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("favorites:changed", handler);
    };
  },
};