import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Ctx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const NavDrawerContext = createContext<Ctx | null>(null);

export const NavDrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(v => !v), []);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);
  return <NavDrawerContext.Provider value={value}>{children}</NavDrawerContext.Provider>;
};

export const useNavDrawer = () => {
  const ctx = useContext(NavDrawerContext);
  if (!ctx) throw new Error('useNavDrawer must be used within NavDrawerProvider');
  return ctx;
};