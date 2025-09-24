# Overview

Favourites_v1.2 is a modern sports betting application built with React and TypeScript. The app provides a comprehensive betting platform featuring sports betting, casino games, live events, and virtual sports. The application emphasizes user experience with features like AI-powered search, customizable favorites, and real-time betting capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application follows a modern React-based single-page application (SPA) architecture using:

- **React 18** with TypeScript for type safety and better developer experience
- **React Router DOM** for client-side routing and navigation
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling approach

## Component Structure

The app is organized around key functional areas:

- **Core Pages**: Home, Sports, Casino, MyBets, Favorites, Apps, and Help
- **Navigation Components**: Header with search, bottom navigation, and side drawers
- **Interactive Elements**: Match cards, betting slips, and filter systems
- **AI Features**: AI-powered search capabilities with multiple search interfaces

## State Management

The application uses a hybrid state management approach:

- **React State**: Local component state for UI interactions and temporary data
- **Custom Stores**: 
  - `favoritesStore` for managing user favorites (legacy)
  - `favoritesStoreV2` for enhanced favorites management
  - `searchResultsStore` for caching search results
- **Context API**: `NavDrawerContext` for managing navigation drawer state

## User Interface Design

The UI follows a mobile-first design with:

- **Radix UI** components for accessible and customizable UI primitives
- **Drag-and-drop functionality** using react-dnd for customizable layouts
- **Responsive design** with Tailwind CSS utilities
- **Theme support** via next-themes for dark/light mode capabilities

## Data Flow Architecture

The application handles data through:

- **Mock Data Sources**: Sports match data, casino games, and betting information
- **AI Provider Integration**: Hooks for AI-powered search functionality
- **Real-time Updates**: Support for live betting odds and match updates
- **Favorites System**: Persistent storage of user preferences and favorites

## Performance Optimizations

- **Code Splitting**: Component-based lazy loading potential
- **Debounced Search**: Implemented in search components to reduce API calls
- **Memoization**: Strategic use of React hooks for performance
- **Asset Optimization**: Figma asset aliases in Vite configuration for efficient loading

# External Dependencies

## Core Libraries

- **React & React DOM**: Frontend framework and rendering
- **React Router DOM**: Client-side routing
- **TypeScript**: Static type checking
- **Vite**: Build tool and development server

## External APIs

- **Teams API**: https://alluring-inspiration-production.up.railway.app/teams/all
  - Provides real team data organized by league (Premier League, Serie A, Bundesliga, La Liga, Ligue 1)
  - Returns popular teams ranking and comprehensive team lists
  - Integrated with FavoriteTeamsDrawer for team selection
  - Data includes 96 teams across 5 major European leagues

## UI Components

- **Radix UI**: Complete suite of accessible React components including dialogs, dropdowns, tooltips, and form controls
- **Lucide React**: Icon library for consistent iconography
- **React DnD**: Drag and drop functionality with HTML5 backend

## Form and Input Handling

- **React Hook Form**: Form state management and validation
- **Input OTP**: One-time password input components
- **React Day Picker**: Date selection components

## Data Visualization

- **Recharts**: Chart and graph components for data visualization

## Utility Libraries

- **Class Variance Authority**: Utility for managing CSS class variants
- **clsx**: Conditional className utility
- **cmdk**: Command menu component
- **Sonner**: Toast notification system

## Layout and UI Enhancement

- **Embla Carousel React**: Carousel/slider components
- **React Resizable Panels**: Resizable panel layouts
- **Next Themes**: Theme switching capabilities

## Development Tools

- **Vite Plugins**: React SWC plugin for fast compilation
- **Path Aliases**: Configured for clean import statements
- **Asset Management**: Figma asset integration through Vite aliases

The application is designed to be easily extensible with additional betting features, sports, and casino games while maintaining a consistent user experience across all platforms.