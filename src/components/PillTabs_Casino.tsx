import { useState } from 'react';
import { PillTabs_Sports, createSportIcon } from './PillTabs_Sports';

// Define casino-specific tab types
export type CasinoType = 'slots' | 'table' | 'live' | 'jackpots';

export interface CasinoTabConfig {
  id: CasinoType;
  label: string;
  icon: React.ReactNode;
}

interface PillTabs_CasinoProps {
  onTabChange?: (tabId: CasinoType) => void;
  defaultActiveTab?: CasinoType;
}

// Example Casino Pills component - ready for when casino icons are available
export function PillTabs_Casino({ onTabChange, defaultActiveTab = 'slots' }: PillTabs_CasinoProps) {
  const [activeTab, setActiveTab] = useState<CasinoType>(defaultActiveTab);
  
  // Placeholder icons - replace with actual casino icons when available
  const createCasinoIcon = (iconName: string, isActive: boolean) => (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <circle 
          cx="8" 
          cy="8" 
          r="6" 
          stroke={isActive ? "#9CE800" : "#AAAEB0"} 
          strokeWidth="1.5"
          fill="none"
        />
        <text 
          x="8" 
          y="11" 
          textAnchor="middle" 
          fontSize="6" 
          fill={isActive ? "#9CE800" : "#AAAEB0"}
          fontFamily="Roboto"
        >
          {iconName.charAt(0).toUpperCase()}
        </text>
      </svg>
    </div>
  );

  const casinoTabs: CasinoTabConfig[] = [
    {
      id: 'slots',
      label: 'SLOTS',
      icon: createCasinoIcon('slots', activeTab === 'slots')
    },
    {
      id: 'table',
      label: 'TABLE',
      icon: createCasinoIcon('table', activeTab === 'table')
    },
    {
      id: 'live',
      label: 'LIVE',
      icon: createCasinoIcon('live', activeTab === 'live')
    },
    {
      id: 'jackpots',
      label: 'JACKPOTS',
      icon: createCasinoIcon('jackpots', activeTab === 'jackpots')
    }
  ];

  const handleTabChange = (tabId: string) => {
    const casinoTabId = tabId as CasinoType;
    setActiveTab(casinoTabId);
    onTabChange?.(casinoTabId);
  };

  // Cast the casino tabs to work with the generic PillTabs_Sports component
  const adaptedTabs = casinoTabs.map(tab => ({
    id: tab.id as any, // Type casting for compatibility
    label: tab.label,
    icon: tab.icon
  }));

  return (
    <PillTabs_Sports 
      tabs={adaptedTabs} 
      onTabChange={handleTabChange as any} // Type casting for compatibility
      defaultActiveTab={defaultActiveTab as any} // Type casting for compatibility
    />
  );
}