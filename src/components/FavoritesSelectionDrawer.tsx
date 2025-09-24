import React, { useState, useEffect } from "react";
import { X, Search as SearchIcon, Users, Trophy, Target, Settings } from "lucide-react";

interface FavoritesSelectionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onManageTeams: () => void;
  onManageLeagues: () => void;
  onManageEvents: () => void;
}

type TabType = 'events' | 'teams' | 'leagues';

export function FavoritesSelectionDrawer({ 
  isOpen, 
  onClose, 
  onManageTeams, 
  onManageLeagues,
  onManageEvents
}: FavoritesSelectionDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('events');

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/50" 
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">My Favorites</h2>
            <p className="text-sm text-gray-600">Select your favorite events, teams &amp; leagues</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-600 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 pt-4 pb-2">
          <div className="bg-gray-100 rounded-full p-1 flex">
            {(['events', 'teams', 'leagues'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-3 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  activeTab === tab 
                    ? "bg-white text-black shadow-sm" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {activeTab === 'events' && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No sports favorites yet</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Star your favorite matches to see them here for quick access.
                </p>
                <button
                  onClick={onManageEvents}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#9ce800] text-black text-sm font-medium rounded-lg hover:bg-[#8bc700] focus:outline-none focus:ring-2 focus:ring-[#9ce800] focus:ring-offset-2 transition-colors"
                >
                  <Target className="h-4 w-4 mr-2" />
                  Select Events
                </button>
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray-500">Explore:</p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    {['Football', 'Basketball', 'eFootball', 'Tennis'].map((sport) => (
                      <span key={sport} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {sport}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teams' && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorite teams yet</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Select up to 5 teams to follow their matches and get personalized updates.
                </p>
                <button
                  onClick={onManageTeams}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#9ce800] text-black text-sm font-medium rounded-lg hover:bg-[#8bc700] focus:outline-none focus:ring-2 focus:ring-[#9ce800] focus:ring-offset-2 transition-colors"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Select Teams
                </button>
              </div>
            </div>
          )}

          {activeTab === 'leagues' && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorite leagues yet</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Select up to 5 leagues to see matches from your favorite competitions.
                </p>
                <button
                  onClick={onManageLeagues}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#9ce800] text-black text-sm font-medium rounded-lg hover:bg-[#8bc700] focus:outline-none focus:ring-2 focus:ring-[#9ce800] focus:ring-offset-2 transition-colors"
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  Select Leagues  
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center h-10 rounded-xl bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
          >
            Open Favorites
          </button>
        </div>
      </div>
    </>
  );
}