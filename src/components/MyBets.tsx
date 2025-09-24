import { useEffect, useState } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";
import { ChevronRight } from "lucide-react";

interface MyBetsProps {
  activeItem: string;
  onAccountClick: () => void;
  onNavigationClick: () => void;
  onHelpClick: () => void;
  onFiltersClick?: () => void;
  onBetslipClick: () => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  onAISearchClick: () => void;
  onSearchWithQuery?: (query: string) => void;
}

type Tab = "open" | "settled" | "jackpots" | "virtuals";

export function MyBets({ activeItem, onAccountClick, onNavigationClick, onHelpClick, onFiltersClick, onBetslipClick, selectedLeagues, isLoggedIn, setIsLoggedIn, onAISearchClick, onSearchWithQuery }: MyBetsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("open");

  // simple mock open bet
  const openBets = [
    {
      id: "9398519030",
      placedAt: "1:45 pm, Sat 06/09",
      legs: "0/6",
      stake: "500.00",
      odds: "21.67",
      payout: "UGX 12,385.87",
      cashout: true,
    },
  ];

  // slide-in animation on mount
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 w-full relative animate-in slide-in-from-right duration-200">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header
          onAccountClick={onAccountClick}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onAISearchClick={onAISearchClick}
          onSearchWithQuery={onSearchWithQuery}
        />
      </div>

      {/* Sticky Tabs directly under Header (assumes header ~48px high) */}
      <div className="sticky top-[48px] z-30 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/80">
        <div className="px-4 py-2 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-2">
            {([
              { id: "open", label: "Open" },
              { id: "settled", label: "Settled" },
              { id: "jackpots", label: "Jackpots" },
              { id: "virtuals", label: "Virtuals" },
            ] as { id: Tab; label: string }[]).map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors flex items-center justify-center
                  ${activeTab === t.id ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-gray-800"}
                `}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content (offset for header + tabs) */}
      <div className="pt-[48px]"> {/* header height */}
        <div className="pt-[48px] px-4 pb-[120px]"> {/* tabs approx height + page padding */}
          {activeTab === "open" && (
            <div className="space-y-3">
              {openBets.map(bet => (
                <div key={bet.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-600">
                    <span>{bet.placedAt}</span>
                    <span className="font-medium">ID: #{bet.id}</span>
                  </div>

                  <div className="px-4 py-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-600 font-semibold">{bet.legs}</span>
                      {bet.cashout && (
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded-md inline-flex items-center gap-1">
                          Cashout <span className="text-[10px]">💵</span>
                        </button>
                      )}
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <div className="text-gray-500">STAKE</div>
                        <div className="font-semibold">{bet.stake}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <div className="text-gray-500">ODDS</div>
                        <div className="font-semibold">{bet.odds}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <div className="text-gray-500">PAYOUT</div>
                        <div className="font-semibold">{bet.payout}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-100">
                    View details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Empty state if no bets – leave commented for now */}
              {/* <div className="text-center text-sm text-gray-600 py-16">No open bets</div> */}
            </div>
          )}

          {activeTab !== "open" && (
            <div className="text-center text-sm text-gray-600 py-16">
              No data in "{activeTab}" for this demo.
            </div>
          )}
        </div>
      </div>



      {/* Bottom Navigation (keep as-is) */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} onBetslipClick={onBetslipClick} onNavigationClick={onNavigationClick} />
      </div>
    </div>
  );
}