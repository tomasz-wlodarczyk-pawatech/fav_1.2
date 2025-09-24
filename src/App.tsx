import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Home } from "./components/Home";
import { MyBets } from "./components/MyBets";
import { Favorites } from "./components/Favorites";
import { Apps } from "./components/Apps";
import { Help } from "./components/Help";
import { Sports } from "./components/Sports";
import { Casino } from "./components/Casino";
import { AccountDrawer } from "./components/AccountDrawer";
import NavigationDrawer from "./components/NavigationDrawer";
import { HelpDrawer } from "./components/HelpDrawer";
import { Leagues_SideDrawer } from "./components/Leagues_SideDrawer";
import { FiltersDrawer } from "./components/FiltersDrawer";
import { BetslipDrawer } from "./components/BetslipDrawer";
import { FavoriteTeamsDrawer } from "./components/FavoriteTeamsDrawer";
import { FavoriteLeaguesDrawer } from "./components/FavoriteLeaguesDrawer";
import { NavDrawerProvider } from "./contexts/NavDrawerContext";

function AppContent() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isHelpDrawerOpen, setIsHelpDrawerOpen] =
    useState(false);
  const [isLeaguesDrawerOpen, setIsLeaguesDrawerOpen] =
    useState(false);
  const [isFiltersDrawerOpen, setIsFiltersDrawerOpen] =
    useState(false);
  const [isBetslipDrawerOpen, setIsBetslipDrawerOpen] =
    useState(false);
  const [
    isFavoriteTeamsDrawerOpen,
    setIsFavoriteTeamsDrawerOpen,
  ] = useState(false);
  const [
    isFavoriteLeaguesDrawerOpen,
    setIsFavoriteLeaguesDrawerOpen,
  ] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedLeagues, setSelectedLeagues] = useState<
    string[]
  >([]);
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>(
    [],
  );
  const [favoriteLeagues, setFavoriteLeagues] = useState<
    string[]
  >([]);

  // Load initial favorites from localStorage and set up listeners
  useEffect(() => {
    const loadFavorites = () => {
      try {
        // Load teams - convert from stored format to IDs
        const storedTeams = JSON.parse(localStorage.getItem('favTeams') || '[]');
        const teamIds = storedTeams.map((team: any) => team.id || team.name?.toLowerCase().replace(/\s+/g, '-'));
        setFavoriteTeams(teamIds.filter(Boolean));
        
        // Load leagues - convert from stored format to IDs  
        const storedLeagues = JSON.parse(localStorage.getItem('favLeagues') || '[]');
        const leagueIds = storedLeagues.map((league: any) => league.id || league.name?.toLowerCase().replace(/\s+/g, '-'));
        setFavoriteLeagues(leagueIds.filter(Boolean));
      } catch (error) {
        console.error('Error loading favorites:', error);
        setFavoriteTeams([]);
        setFavoriteLeagues([]);
      }
    };

    // Load initial data
    loadFavorites();

    // Listen for updates
    const handleTeamsUpdate = () => loadFavorites();
    const handleLeaguesUpdate = () => loadFavorites();
    
    window.addEventListener('fav:teams:updated', handleTeamsUpdate);
    window.addEventListener('fav:leagues:updated', handleLeaguesUpdate);
    
    return () => {
      window.removeEventListener('fav:teams:updated', handleTeamsUpdate);
      window.removeEventListener('fav:leagues:updated', handleLeaguesUpdate);
    };
  }, []);

  // Map URLs to page names for navigation - memoized to prevent re-render loops
  const activeItem = useMemo(() => {
    switch (location.pathname) {
      case "/":
      case "/preview_page.html":
        return "home"; // Home tab is now active for homepage
      case "/my-bets":
        return "mybets";
      case "/favorites":
        return "favorites";
      case "/apps":
        return "apps";
      case "/help":
        return "help";
      case "/sports":
        return "sports";
      case "/casino":
        return "casino";
      default:
        return "home"; // Default to home for unmatched paths
    }
  }, [location.pathname]);

  // Memoized handlers to prevent unnecessary re-renders
  const handleAccountClick = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleHelpClick = useCallback(() => {
    setIsHelpDrawerOpen(true);
  }, []);

  const handleHelpDrawerClose = useCallback(() => {
    setIsHelpDrawerOpen(false);
  }, []);

  const handleLeaguesClick = useCallback(() => {
    setIsLeaguesDrawerOpen(true);
  }, []);

  const handleLeaguesDrawerClose = useCallback(() => {
    setIsLeaguesDrawerOpen(false);
  }, []);

  const handleLeaguesApply = useCallback(
    (
      selectedLeagues: string[],
      selectedCountries: string[],
    ) => {
      setSelectedLeagues(selectedLeagues);
    },
    [],
  );

  const handleLeagueSelect = useCallback(
    (leagueName: string) => {
      setSelectedLeagues([leagueName]);
    },
    [],
  );

  const handleFiltersClick = useCallback(() => {
    setIsFiltersDrawerOpen(true);
  }, []);

  const handleFiltersDrawerClose = useCallback(() => {
    setIsFiltersDrawerOpen(false);
  }, []);

  const handleBetslipClick = useCallback(() => {
    setIsBetslipDrawerOpen(true);
  }, []);

  const handleBetslipDrawerClose = useCallback(() => {
    setIsBetslipDrawerOpen(false);
  }, []);

  const handleFavoriteTeamsClick = useCallback(() => {
    setIsFavoriteTeamsDrawerOpen(true);
  }, []);

  const handleFavoriteTeamsDrawerClose = useCallback(() => {
    setIsFavoriteTeamsDrawerOpen(false);
  }, []);

  const handleFavoriteTeamsSave = useCallback(
    (teams: string[]) => {
      setFavoriteTeams(teams);
    },
    [],
  );

  const handleFavoriteLeaguesClick = useCallback(() => {
    setIsFavoriteLeaguesDrawerOpen(true);
  }, []);

  const handleFavoriteLeaguesDrawerClose = useCallback(() => {
    setIsFavoriteLeaguesDrawerOpen(false);
  }, []);

  const handleFavoriteLeaguesSave = useCallback(
    (leagues: string[]) => {
      setFavoriteLeagues(leagues);
    },
    [],
  );

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setIsDrawerOpen(false);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onHelpClick={handleHelpClick}
              onLeaguesClick={handleLeaguesClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              onLeagueSelect={handleLeagueSelect}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/my-bets"
          element={
            <MyBets
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onHelpClick={handleHelpClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onHelpClick={handleHelpClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              favoriteTeams={favoriteTeams}
              onFavoriteTeamsClick={handleFavoriteTeamsClick}
              onFavoriteLeaguesClick={
                handleFavoriteLeaguesClick
              }
            />
          }
        />
        <Route
          path="/apps"
          element={
            <Apps
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onHelpClick={handleHelpClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/help"
          element={
            <Help
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onNavigationClick={() => {}}
              onHelpClick={handleHelpClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <Sports
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onNavigationClick={() => {}}
              onHelpClick={handleHelpClick}
              onLeaguesClick={handleLeaguesClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/casino"
          element={
            <Casino
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onNavigationClick={() => {}}
              onHelpClick={handleHelpClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        {/* Catch-all route for preview_page.html and other unmatched paths */}
        <Route
          path="*"
          element={
            <Home
              activeItem={activeItem}
              onAccountClick={handleAccountClick}
              onHelpClick={handleHelpClick}
              onLeaguesClick={handleLeaguesClick}
              onFiltersClick={handleFiltersClick}
              onBetslipClick={handleBetslipClick}
              onLeagueSelect={handleLeagueSelect}
              selectedLeagues={selectedLeagues}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>

      <AccountDrawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        onLogout={handleLogout}
      />

      <NavigationDrawer />

      <HelpDrawer
        isOpen={isHelpDrawerOpen}
        onClose={handleHelpDrawerClose}
      />

      <Leagues_SideDrawer
        isOpen={isLeaguesDrawerOpen}
        onClose={handleLeaguesDrawerClose}
        onApply={handleLeaguesApply}
      />

      <FiltersDrawer
        isOpen={isFiltersDrawerOpen}
        onClose={handleFiltersDrawerClose}
      />

      <BetslipDrawer
        isOpen={isBetslipDrawerOpen}
        onClose={handleBetslipDrawerClose}
      />

      <FavoriteTeamsDrawer
        isOpen={isFavoriteTeamsDrawerOpen}
        onClose={handleFavoriteTeamsDrawerClose}
        onSave={handleFavoriteTeamsSave}
        initialSelectedTeams={favoriteTeams}
      />

      <FavoriteLeaguesDrawer
        isOpen={isFavoriteLeaguesDrawerOpen}
        onClose={handleFavoriteLeaguesDrawerClose}
        onSave={handleFavoriteLeaguesSave}
        initialSelectedLeagues={favoriteLeagues}
      />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <NavDrawerProvider>
        <AppContent />
      </NavDrawerProvider>
    </Router>
  );
}