import React from "react";
import { Star } from "lucide-react";
import type { ProviderItem } from "../hooks/useAIProvider";
import { favoritesStoreV2 } from "../lib/favoritesStoreV2";

function Header({ teams, league, competition }: { teams: [{name:string},{name:string}]; league: string; competition?: string }) {
  return (
    <div className="mb-2">
      <div className="text-[15px] font-medium text-gray-900 leading-tight">
        {teams[0].name}
        <div className="text-gray-900" />
        <div className="">{teams[1].name}</div>
      </div>
      <div className="text-[12px] text-gray-500">
        {league}{competition ? ` • ${competition}` : ""}
      </div>
    </div>
  );
}

function FavBtn({ item }: { item: ProviderItem }) {
  const key = favoritesStoreV2.keyFor(item);
  const isFav = favoritesStoreV2.has(key);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        favoritesStoreV2.toggle(item);
      }}
      className="p-1.5 rounded-full hover:bg-gray-100 pointer-events-auto"
      aria-label={isFav ? "Unfavorite" : "Favorite"}
    >
      <Star className={`h-4 w-4 ${isFav ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
    </button>
  );
}

export default function MarketMatchCard({ item }: { item: ProviderItem }) {
  const shell = (children: React.ReactNode, right?: React.ReactNode) => (
    <div className="bg-white rounded-xl border border-gray-200 p-3">
      <div className="flex items-start justify-between">
        <Header teams={item.teams} league={item.league} competition={item.competition} />
        <div className="flex items-center gap-2">
          {right}
          <FavBtn item={item} />
        </div>
      </div>
      {children}
    </div>
  );

  if (item.kind === "1x2") {
    const { one, draw, two } = item.data as any;
    return shell(
      <div className="grid grid-cols-3 gap-2 mt-2">
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>1</span><span className="font-semibold">{one ?? "-"}</span>
        </button>
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>X</span><span className="font-semibold">{draw ?? "-"}</span>
        </button>
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>2</span><span className="font-semibold">{two ?? "-"}</span>
        </button>
      </div>
    );
  }

  if (item.kind === "ou") {
    const lines = item.data; // Array<{line, over, under}>
    // mirror betPawa style: show up to 3 lines (0.5, 1.5, 2.5) in first render; extend as needed
    const top = lines.slice(0, 3);
    return shell(
      <div className="grid grid-cols-2 gap-2 mt-2">
        {top.map((l) => (
          <React.Fragment key={l.line}>
            <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
              <span>{`Over ${l.line}`}</span><span className="font-semibold">{l.over ?? "-"}</span>
            </button>
            <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
              <span>{`Under ${l.line}`}</span><span className="font-semibold">{l.under ?? "-"}</span>
            </button>
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (item.kind === "btts") {
    const { yes, no } = item.data as any;
    return shell(
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>Yes</span><span className="font-semibold">{yes ?? "-"}</span>
        </button>
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>No</span><span className="font-semibold">{no ?? "-"}</span>
        </button>
      </div>
    );
  }

  if (item.kind === "dc") {
    const { oneX, xTwo, oneTwo } = item.data as any;
    return shell(
      <div className="grid grid-cols-3 gap-2 mt-2">
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>1X</span><span className="font-semibold">{oneX ?? "-"}</span>
        </button>
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>X2</span><span className="font-semibold">{xTwo ?? "-"}</span>
        </button>
        <button className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
          <span>12</span><span className="font-semibold">{oneTwo ?? "-"}</span>
        </button>
      </div>
    );
  }

  if (item.kind === "htft") {
    const map = item.data as any;
    const cell = (k: string) => (
      <button key={k} className="h-10 rounded-lg bg-gray-100 text-sm flex items-center justify-between px-3">
        <span>{k}</span><span className="font-semibold">{map[k] ?? "-"}</span>
      </button>
    );
    const order = ["1/1","1/X","1/2","X/1","X/X","X/2","2/1","2/X","2/2"];
    return shell(<div className="grid grid-cols-3 gap-2 mt-2">{order.map(cell)}</div>, <div className="text-xs text-gray-500">HT/FT</div>);
  }

  return null;
}