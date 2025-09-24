import { SportType } from './PillTabs_Sports';

interface Team {
  name: string;
  score?: number;
}

interface Badge {
  type: 'boosted' | 'bestOdds';
}

interface MatchData {
  id: string;
  isLive: boolean;
  teams: [Team, Team];
  league: string;
  odds: [string, string, string];
  oddsValues: [string, string, string];
  betCount: number;
  timestamp?: {
    time?: string;
    date?: string;
  };
  badges?: Badge[];
  boostedOddsIndex?: number; // 0, 1, or 2 to indicate which odds should show the fire icon in popular filter
  isFavorited?: boolean;
}

// Mock data generator for different sports
export function getSportsMatchData(sport: SportType): MatchData[] {
  const baseData = {
    football: {
      live: [
        {
          id: 'live-football-1',
          isLive: true,
          teams: [
            { name: 'Arsenal', score: 2 },
            { name: 'Chelsea', score: 1 }
          ] as [Team, Team],
          league: 'Premier League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.10', '3.45', '2.85'] as [string, string, string],
          betCount: 127,
          badges: [{ type: 'boosted' as const }],
          boostedOddsIndex: 0
        },
        {
          id: 'live-football-2',
          isLive: true,
          teams: [
            { name: 'Barcelona', score: 0 },
            { name: 'Real Madrid', score: 0 }
          ] as [Team, Team],
          league: 'La Liga',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['1.95', '3.20', '3.10'] as [string, string, string],
          betCount: 203,
          badges: [{ type: 'bestOdds' as const }],
          boostedOddsIndex: 2
        },
        {
          id: 'live-football-3',
          isLive: true,
          teams: [
            { name: 'PSG', score: 1 },
            { name: 'Marseille', score: 0 }
          ] as [Team, Team],
          league: 'Ligue 1',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['1.75', '3.80', '4.20'] as [string, string, string],
          betCount: 94,
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'live-football-4',
          isLive: true,
          teams: [
            { name: 'Inter Milan', score: 2 },
            { name: 'AC Milan', score: 2 }
          ] as [Team, Team],
          league: 'Serie A',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.30', '3.10', '2.90'] as [string, string, string],
          betCount: 178,
          badges: [{ type: 'bestOdds' as const }],
          boostedOddsIndex: 1
        },
        {
          id: 'live-football-5',
          isLive: true,
          teams: [
            { name: 'Atletico Madrid', score: 0 },
            { name: 'Sevilla', score: 1 }
          ] as [Team, Team],
          league: 'La Liga',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.05', '3.25', '3.40'] as [string, string, string],
          betCount: 112
        },
        {
          id: 'live-football-6',
          isLive: true,
          teams: [
            { name: 'Newcastle', score: 1 },
            { name: 'Brighton', score: 0 }
          ] as [Team, Team],
          league: 'Premier League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['1.90', '3.45', '3.80'] as [string, string, string],
          betCount: 67
        }
      ],
      pre: [
        {
          id: 'pre-football-1',
          isLive: false,
          teams: [
            { name: 'Liverpool' },
            { name: 'Manchester City' }
          ] as [Team, Team],
          league: 'Premier League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.45', '3.25', '2.70'] as [string, string, string],
          betCount: 89,
          timestamp: { time: '15:30', date: 'Today' },
          badges: [{ type: 'boosted' as const }, { type: 'bestOdds' as const }]
        },
        {
          id: 'pre-football-2',
          isLive: false,
          teams: [
            { name: 'Bayern Munich' },
            { name: 'Borussia Dortmund' }
          ] as [Team, Team],
          league: 'Bundesliga',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['1.85', '3.60', '3.45'] as [string, string, string],
          betCount: 156,
          timestamp: { time: '18:45', date: 'Tomorrow' },
          boostedOddsIndex: 0
        },
        {
          id: 'pre-football-3',
          isLive: false,
          teams: [
            { name: 'Manchester United' },
            { name: 'Tottenham' }
          ] as [Team, Team],
          league: 'Premier League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.15', '3.40', '3.20'] as [string, string, string],
          betCount: 145,
          timestamp: { time: '17:00', date: 'Today' },
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'pre-football-4',
          isLive: false,
          teams: [
            { name: 'Juventus' },
            { name: 'Napoli' }
          ] as [Team, Team],
          league: 'Serie A',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.60', '3.15', '2.55'] as [string, string, string],
          betCount: 98,
          timestamp: { time: '20:00', date: 'Today' }
        },
        {
          id: 'pre-football-5',
          isLive: false,
          teams: [
            { name: 'Brentford' },
            { name: 'Aston Villa' }
          ] as [Team, Team],
          league: 'Premier League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['3.20', '3.30', '2.25'] as [string, string, string],
          betCount: 73,
          timestamp: { time: '14:00', date: 'Tomorrow' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-football-6',
          isLive: false,
          teams: [
            { name: 'RB Leipzig' },
            { name: 'Bayer Leverkusen' }
          ] as [Team, Team],
          league: 'Bundesliga',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.35', '3.25', '2.85'] as [string, string, string],
          betCount: 134,
          timestamp: { time: '15:30', date: 'Tomorrow' }
        },
        {
          id: 'pre-football-7',
          isLive: false,
          teams: [
            { name: 'Valencia' },
            { name: 'Real Sociedad' }
          ] as [Team, Team],
          league: 'La Liga',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.80', '3.10', '2.50'] as [string, string, string],
          betCount: 86,
          timestamp: { time: '19:30', date: 'Tomorrow' },
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'pre-football-8',
          isLive: false,
          teams: [
            { name: 'AS Roma' },
            { name: 'Lazio' }
          ] as [Team, Team],
          league: 'Serie A',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.20', '3.35', '3.05'] as [string, string, string],
          betCount: 167,
          timestamp: { time: '20:45', date: 'Tomorrow' },
          boostedOddsIndex: 2
        },
        {
          id: 'pre-football-9',
          isLive: false,
          teams: [
            { name: 'Lyon' },
            { name: 'Monaco' }
          ] as [Team, Team],
          league: 'Ligue 1',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.95', '3.20', '2.35'] as [string, string, string],
          betCount: 76,
          timestamp: { time: '21:00', date: 'Tomorrow' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-football-10',
          isLive: false,
          teams: [
            { name: 'West Ham' },
            { name: 'Crystal Palace' }
          ] as [Team, Team],
          league: 'Premier League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.05', '3.50', '3.45'] as [string, string, string],
          betCount: 92,
          timestamp: { time: '16:00', date: 'Sunday' }
        }
      ]
    },
    efootball: {
      live: [
        {
          id: 'live-efootball-1',
          isLive: true,
          teams: [
            { name: 'Team Liquid', score: 1 },
            { name: 'FaZe Clan', score: 2 }
          ] as [Team, Team],
          league: 'eFootball Pro League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['3.20', '2.85', '2.15'] as [string, string, string],
          betCount: 45,
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'live-efootball-2',
          isLive: true,
          teams: [
            { name: 'Navi', score: 0 },
            { name: 'Vitality', score: 1 }
          ] as [Team, Team],
          league: 'eFootball World Series',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.45', '3.10', '2.80'] as [string, string, string],
          betCount: 62,
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'live-efootball-3',
          isLive: true,
          teams: [
            { name: 'Astralis', score: 2 },
            { name: 'Ninjas in Pyjamas', score: 0 }
          ] as [Team, Team],
          league: 'eFootball Championship',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['1.85', '3.45', '3.80'] as [string, string, string],
          betCount: 73
        }
      ],
      pre: [
        {
          id: 'pre-efootball-1',
          isLive: false,
          teams: [
            { name: 'G2 Esports' },
            { name: 'Fnatic' }
          ] as [Team, Team],
          league: 'eFootball Championship',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.75', '3.10', '2.50'] as [string, string, string],
          betCount: 67,
          timestamp: { time: '20:00', date: 'Today' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-efootball-2',
          isLive: false,
          teams: [
            { name: 'Cloud9' },
            { name: 'TSM' }
          ] as [Team, Team],
          league: 'eFootball Masters',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.95', '2.90', '2.65'] as [string, string, string],
          betCount: 38,
          timestamp: { time: '22:30', date: 'Today' }
        },
        {
          id: 'pre-efootball-3',
          isLive: false,
          teams: [
            { name: 'Complexity' },
            { name: 'ENCE' }
          ] as [Team, Team],
          league: 'eFootball Pro League',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.20', '3.25', '3.10'] as [string, string, string],
          betCount: 51,
          timestamp: { time: '18:45', date: 'Today' },
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'pre-efootball-4',
          isLive: false,
          teams: [
            { name: 'OG' },
            { name: 'Heroic' }
          ] as [Team, Team],
          league: 'eFootball World Series',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['3.15', '2.95', '2.45'] as [string, string, string],
          betCount: 29,
          timestamp: { time: '21:15', date: 'Today' }
        },
        {
          id: 'pre-efootball-5',
          isLive: false,
          teams: [
            { name: 'BIG' },
            { name: 'Mouz' }
          ] as [Team, Team],
          league: 'eFootball Masters',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.65', '3.05', '2.70'] as [string, string, string],
          betCount: 42,
          timestamp: { time: '19:30', date: 'Tomorrow' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-efootball-6',
          isLive: false,
          teams: [
            { name: 'Evil Geniuses' },
            { name: 'Liquid' }
          ] as [Team, Team],
          league: 'eFootball Championship',
          odds: ['1', 'X', '2'] as [string, string, string],
          oddsValues: ['2.35', '3.15', '2.95'] as [string, string, string],
          betCount: 58,
          timestamp: { time: '23:00', date: 'Tomorrow' }
        }
      ]
    },
    basketball: {
      live: [
        {
          id: 'live-basketball-1',
          isLive: true,
          teams: [
            { name: 'Lakers', score: 98 },
            { name: 'Warriors', score: 102 }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['2.35', '+4.5 1.90', '1.65'] as [string, string, string],
          betCount: 184,
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'live-basketball-2',
          isLive: true,
          teams: [
            { name: 'Celtics', score: 87 },
            { name: 'Heat', score: 85 }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.75', '-2.5 1.95', '2.25'] as [string, string, string],
          betCount: 142,
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'live-basketball-3',
          isLive: true,
          teams: [
            { name: 'Bucks', score: 76 },
            { name: 'Sixers', score: 78 }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['2.10', '+1.5 1.85', '1.80'] as [string, string, string],
          betCount: 156,
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'live-basketball-4',
          isLive: true,
          teams: [
            { name: 'Nuggets', score: 91 },
            { name: 'Suns', score: 88 }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.70', '-3.5 1.90', '2.30'] as [string, string, string],
          betCount: 203,
          boostedOddsIndex: 1
        },
        {
          id: 'live-basketball-5',
          isLive: true,
          teams: [
            { name: 'Olimpia Milano', score: 65 },
            { name: 'Fenerbahce', score: 67 }
          ] as [Team, Team],
          league: 'EuroLeague',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['2.25', '+2.5 1.80', '1.75'] as [string, string, string],
          betCount: 89,
          badges: [{ type: 'bestOdds' as const }]
        }
      ],
      pre: [
        {
          id: 'pre-basketball-1',
          isLive: false,
          teams: [
            { name: 'Nets' },
            { name: 'Knicks' }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.90', '+3.5 1.85', '2.05'] as [string, string, string],
          betCount: 96,
          timestamp: { time: '01:30', date: 'Tomorrow' },
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'pre-basketball-2',
          isLive: false,
          teams: [
            { name: 'Real Madrid' },
            { name: 'Barcelona' }
          ] as [Team, Team],
          league: 'EuroLeague',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.65', '-5.5 1.90', '2.45'] as [string, string, string],
          betCount: 73,
          timestamp: { time: '19:00', date: 'Tomorrow' }
        },
        {
          id: 'pre-basketball-3',
          isLive: false,
          teams: [
            { name: 'Clippers' },
            { name: 'Mavericks' }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.95', '-1.5 1.90', '1.95'] as [string, string, string],
          betCount: 187,
          timestamp: { time: '02:00', date: 'Tomorrow' },
          badges: [{ type: 'bestOdds' as const }],
          boostedOddsIndex: 0
        },
        {
          id: 'pre-basketball-4',
          isLive: false,
          teams: [
            { name: 'Thunder' },
            { name: 'Spurs' }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.55', '-7.5 1.85', '2.65'] as [string, string, string],
          betCount: 134,
          timestamp: { time: '03:30', date: 'Tomorrow' }
        },
        {
          id: 'pre-basketball-5',
          isLive: false,
          teams: [
            { name: 'Panathinaikos' },
            { name: 'CSKA Moscow' }
          ] as [Team, Team],
          league: 'EuroLeague',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['2.15', '-2.5 1.85', '1.80'] as [string, string, string],
          betCount: 67,
          timestamp: { time: '18:30', date: 'Tomorrow' },
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'pre-basketball-6',
          isLive: false,
          teams: [
            { name: 'Grizzlies' },
            { name: 'Kings' }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['2.30', '+2.5 1.90', '1.70'] as [string, string, string],
          betCount: 98,
          timestamp: { time: '04:00', date: 'Tomorrow' }
        },
        {
          id: 'pre-basketball-7',
          isLive: false,
          teams: [
            { name: 'Zalgiris' },
            { name: 'Maccabi Tel Aviv' }
          ] as [Team, Team],
          league: 'EuroLeague',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.85', '-4.5 1.85', '2.05'] as [string, string, string],
          betCount: 52,
          timestamp: { time: '20:00', date: 'Tomorrow' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-basketball-8',
          isLive: false,
          teams: [
            { name: 'Jazz' },
            { name: 'Trail Blazers' }
          ] as [Team, Team],
          league: 'NBA',
          odds: ['1', 'Handicap', '2'] as [string, string, string],
          oddsValues: ['1.75', '-5.5 1.90', '2.20'] as [string, string, string],
          betCount: 76,
          timestamp: { time: '05:00', date: 'Tomorrow' }
        }
      ]
    },
    tennis: {
      live: [
        {
          id: 'live-tennis-1',
          isLive: true,
          teams: [
            { name: 'Novak Djokovic', score: 2 },
            { name: 'Rafael Nadal', score: 1 }
          ] as [Team, Team],
          league: 'ATP Finals',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.45', 'O3.5 2.10', '2.85'] as [string, string, string],
          betCount: 89,
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'live-tennis-2',
          isLive: true,
          teams: [
            { name: 'Jannik Sinner', score: 1 },
            { name: 'Alexander Zverev', score: 0 }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.65', 'O2.5 1.80', '2.45'] as [string, string, string],
          betCount: 156,
          badges: [{ type: 'boosted' as const }],
          boostedOddsIndex: 2
        },
        {
          id: 'live-tennis-3',
          isLive: true,
          teams: [
            { name: 'Aryna Sabalenka', score: 1 },
            { name: 'Elena Rybakina', score: 1 }
          ] as [Team, Team],
          league: 'WTA Finals',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.90', 'O2.5 1.95', '2.00'] as [string, string, string],
          betCount: 98
        },
        {
          id: 'live-tennis-4',
          isLive: true,
          teams: [
            { name: 'Stefanos Tsitsipas', score: 0 },
            { name: 'Casper Ruud', score: 1 }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['2.25', 'U2.5 2.05', '1.75'] as [string, string, string],
          betCount: 73,
          badges: [{ type: 'bestOdds' as const }]
        }
      ],
      pre: [
        {
          id: 'pre-tennis-1',
          isLive: false,
          teams: [
            { name: 'Carlos Alcaraz' },
            { name: 'Daniil Medvedev' }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.75', 'O3.5 1.95', '2.25'] as [string, string, string],
          betCount: 124,
          timestamp: { time: '14:00', date: 'Today' },
          badges: [{ type: 'boosted' as const }],
          boostedOddsIndex: 0
        },
        {
          id: 'pre-tennis-2',
          isLive: false,
          teams: [
            { name: 'Iga Swiatek' },
            { name: 'Coco Gauff' }
          ] as [Team, Team],
          league: 'WTA Finals',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.55', 'U2.5 1.85', '2.65'] as [string, string, string],
          betCount: 67,
          timestamp: { time: '16:30', date: 'Today' }
        },
        {
          id: 'pre-tennis-3',
          isLive: false,
          teams: [
            { name: 'Taylor Fritz' },
            { name: 'Grigor Dimitrov' }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['2.05', 'O2.5 1.85', '1.85'] as [string, string, string],
          betCount: 89,
          timestamp: { time: '15:30', date: 'Today' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-tennis-4',
          isLive: false,
          teams: [
            { name: 'Jessica Pegula' },
            { name: 'Qinwen Zheng' }
          ] as [Team, Team],
          league: 'WTA Finals',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.70', 'U2.5 1.90', '2.30'] as [string, string, string],
          betCount: 112,
          timestamp: { time: '18:00', date: 'Today' }
        },
        {
          id: 'pre-tennis-5',
          isLive: false,
          teams: [
            { name: 'Holger Rune' },
            { name: 'Felix Auger-Aliassime' }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.95', 'O2.5 1.80', '1.95'] as [string, string, string],
          betCount: 76,
          timestamp: { time: '20:30', date: 'Today' },
          badges: [{ type: 'boosted' as const }]
        },
        {
          id: 'pre-tennis-6',
          isLive: false,
          teams: [
            { name: 'Barbora Krejcikova' },
            { name: 'Marketa Vondrousova' }
          ] as [Team, Team],
          league: 'WTA Finals',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['2.15', 'U2.5 2.00', '1.80'] as [string, string, string],
          betCount: 54,
          timestamp: { time: '22:00', date: 'Today' }
        },
        {
          id: 'pre-tennis-7',
          isLive: false,
          teams: [
            { name: 'Ben Shelton' },
            { name: 'Sebastian Korda' }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.85', 'O2.5 1.75', '2.05'] as [string, string, string],
          betCount: 92,
          timestamp: { time: '16:00', date: 'Tomorrow' },
          badges: [{ type: 'bestOdds' as const }]
        },
        {
          id: 'pre-tennis-8',
          isLive: false,
          teams: [
            { name: 'Beatriz Haddad Maia' },
            { name: 'Liudmila Samsonova' }
          ] as [Team, Team],
          league: 'WTA Finals',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['2.35', 'U2.5 1.85', '1.65'] as [string, string, string],
          betCount: 63,
          timestamp: { time: '19:30', date: 'Tomorrow' }
        },
        {
          id: 'pre-tennis-9',
          isLive: false,
          teams: [
            { name: 'Frances Tiafoe' },
            { name: 'Tommy Paul' }
          ] as [Team, Team],
          league: 'ATP Masters',
          odds: ['1', 'Sets O/U', '2'] as [string, string, string],
          oddsValues: ['1.75', 'O2.5 1.90', '2.25'] as [string, string, string],
          betCount: 81,
          timestamp: { time: '21:00', date: 'Tomorrow' },
          badges: [{ type: 'boosted' as const }]
        }
      ]
    }
  };

  const sportData = baseData[sport] || baseData.football;
  return [...sportData.live, ...sportData.pre];
}

// Helper function to get only live matches
export function getLiveMatches(sport: SportType): MatchData[] {
  return getSportsMatchData(sport).filter(match => match.isLive);
}

// Helper function to get only pre-match events
export function getPreMatches(sport: SportType): MatchData[] {
  return getSportsMatchData(sport).filter(match => !match.isLive);
}

// Mock favorited match IDs - in a real app, this would come from user preferences/API
const favoritedMatches = new Set([
  'live-football-1',
  'pre-football-1',
  'live-basketball-1',
  'pre-basketball-1', 
  'live-tennis-1',
  'pre-tennis-1',
  'live-efootball-1'
]);

// Helper function to get favorited matches from all sports
export function getFavoritedMatches(): MatchData[] {
  // Return empty array to show empty state for favorites tab
  return [];
  
  allSports.forEach(sport => {
    if (sport === 'favourites') return; // Skip favourites sport type
    const sportMatches = getSportsMatchData(sport);
    const favoritesForSport = sportMatches
      .filter(match => favoritedMatches.has(match.id))
      .map(match => ({ 
        ...match, 
        id: `fav-${match.id}`, // Add prefix to ensure unique keys
        isFavorited: true 
      }))
      .filter(match => {
        // Deduplicate based on the prefixed ID
        if (seenIds.has(match.id)) {
          return false;
        }
        seenIds.add(match.id);
        return true;
      });
    allFavorites.push(...favoritesForSport);
  });
  
  // Sort favorites by bet count (popular first)
  return allFavorites.sort((a, b) => b.betCount - a.betCount);
}

// Helper function to get count of favorited matches
export function getFavoritedMatchesCount(): number {
  return favoritedMatches.size;
}

// Helper function to deduplicate matches by ID
function deduplicateMatches(matches: MatchData[]): MatchData[] {
  const seenIds = new Set<string>();
  return matches.filter(match => {
    if (seenIds.has(match.id)) {
      return false;
    }
    seenIds.add(match.id);
    return true;
  });
}

// Helper function to get filtered matches based on filter type
export function getFilteredMatches(sport: SportType, filter: 'popular' | 'live' | 'upcoming'): MatchData[] {
  // Handle favourites sport separately
  if (sport === 'favourites') {
    const favMatches = getFavoritedMatches();
    let filteredMatches: MatchData[];
    
    switch (filter) {
      case 'live':
        filteredMatches = favMatches.filter(match => match.isLive);
        break;
      case 'upcoming':
        filteredMatches = favMatches.filter(match => !match.isLive);
        break;
      case 'popular':
      default:
        filteredMatches = favMatches;
        break;
    }
    
    // Ensure no duplicates in final result
    return deduplicateMatches(filteredMatches);
  }
  
  const allMatches = getSportsMatchData(sport);
  
  switch (filter) {
    case 'live':
      return allMatches.filter(match => match.isLive);
    case 'upcoming':
      return allMatches.filter(match => !match.isLive);
    case 'popular':
    default:
      // For popular, return all matches sorted by bet count
      return allMatches.sort((a, b) => b.betCount - a.betCount);
  }
}