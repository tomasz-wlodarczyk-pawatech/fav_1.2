// Market-level favorites with snapshots so Favorites.tsx can render without refetching
import type { ProviderItem } from "../hooks/useAIProvider";

type Listener = () => void;

type FavRecord = {
  key: string;            // `${eventId}::${kind}`
  item: ProviderItem;     // snapshot at time of favorite (non-authoritative)
  addedAt: number;
};

class FavoritesStoreV2 {
  private map = new Map<string, FavRecord>(); // key -> record
  private listeners = new Set<Listener>();
  private LS_KEY = "favMarketsV2";

  constructor() {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      const arr: FavRecord[] = raw ? JSON.parse(raw) : [];
      for (const r of arr) this.map.set(r.key, r);
    } catch {}
  }

  private persist() {
    try {
      localStorage.setItem(this.LS_KEY, JSON.stringify(Array.from(this.map.values())));
    } catch {}
  }

  keyFor(item: ProviderItem) {
    return `${item.id}::${item.kind}`;
  }

  upsert(item: ProviderItem) {
    const key = this.keyFor(item);
    this.map.set(key, { key, item, addedAt: Date.now() });
    this.persist(); this.emit();
  }

  remove(key: string) {
    this.map.delete(key);
    this.persist(); this.emit();
  }

  toggle(item: ProviderItem) {
    const key = this.keyFor(item);
    this.has(key) ? this.remove(key) : this.upsert(item);
  }

  has(key: string) { return this.map.has(key); }

  list(): FavRecord[] {
    return Array.from(this.map.values()).sort((a,b) => b.addedAt - a.addedAt);
    // newest first
  }

  // subscribe
  subscribe(fn: Listener) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  private emit() { this.listeners.forEach(fn => fn()); }
}

export const favoritesStoreV2 = new FavoritesStoreV2();
export type { ProviderItem };