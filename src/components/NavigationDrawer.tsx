import { X, Home, Trophy, Bolt, Dice1, MonitorSmartphone, Grid3X3 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavDrawer } from '../contexts/NavDrawerContext';

export default function NavigationDrawer() {
  const { isOpen, close } = useNavDrawer();
  const navigate = useNavigate();
  const location = useLocation();
  const [bottomNavH, setBottomNavH] = useState(56); // fallback

  useEffect(() => {
    // Try common hooks: data-name or id
    const el =
      document.querySelector('[data-name="BottomNavigation"]') ||
      document.getElementById("bottom-nav");
    const h = el ? Math.ceil(el.getBoundingClientRect().height) : 56;
    setBottomNavH(h);
  }, []);

  if (!isOpen) return null;

  const go = (path: string) => { navigate(path); close(); };

  // Function to check if a path is currently active
  const isActive = (path: string) => {
    if (path === "/" && (location.pathname === "/" || location.pathname === "/preview_page.html")) {
      return true;
    }
    if (path === "/sports?filter=live") {
      return location.pathname === "/sports" && location.search.includes("filter=live");
    }
    return location.pathname === path;
  };

  const Item = ({ icon, label, onClick, path }: { icon: JSX.Element; label: string; onClick: () => void; path: string }) => {
    const active = isActive(path);
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between px-4 py-4 border-b border-white/10 hover:bg-white/5 ${
          active ? 'bg-[#2f3438]' : ''
        }`}
      >
        <span className={`flex items-center gap-3 ${active ? 'text-[#9CE800]' : 'text-white'}`}>
          {icon}<span className="text-[15px] font-medium">{label}</span>
        </span>
        <span className="text-white/40">›</span>
      </button>
    );
  };

  return (
    <>
      {/* Backdrop closes on click */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={close} />
      {/* Drawer sheet sits above bottom nav */}
      <div className="fixed inset-x-0 bottom-0 z-50">
        <div
          className="fixed inset-x-0 z-[80] rounded-t-2xl bg-[#1b1f23] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200"
          style={{ bottom: `calc(${bottomNavH}px + env(safe-area-inset-bottom))` }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <button onClick={close} className="p-2 text-white/70 hover:text-white ml-auto">
              <X className="h-5 w-5" />
            </button>
          </div>

        <nav className="divide-y divide-white/10">
          <Item 
            icon={<Home className={`h-5 w-5 ${isActive("/") ? 'text-[#9CE800]' : 'text-[#9ce800]'}`} />} 
            label="Home" 
            onClick={() => go("/")} 
            path="/"
          />
          <Item 
            icon={<Trophy className={`h-5 w-5 ${isActive("/sports") ? 'text-[#9CE800]' : 'text-[#9ce800]'}`} />} 
            label="Sports" 
            onClick={() => go("/sports")} 
            path="/sports"
          />
          <Item 
            icon={<Bolt className={`h-5 w-5 ${isActive("/sports?filter=live") ? 'text-[#9CE800]' : 'text-[#9ce800]'}`} />} 
            label="Live" 
            onClick={() => go("/sports?filter=live")} 
            path="/sports?filter=live"
          />
          <Item 
            icon={<Dice1 className={`h-5 w-5 ${isActive("/casino") ? 'text-[#9CE800]' : 'text-[#9ce800]'}`} />} 
            label="Casino" 
            onClick={() => go("/casino")} 
            path="/casino"
          />
          <Item 
            icon={<MonitorSmartphone className={`h-5 w-5 ${isActive("/virtuals") ? 'text-[#9CE800]' : 'text-[#9ce800]'}`} />} 
            label="Virtuals" 
            onClick={() => go("/virtuals")} 
            path="/virtuals"
          />
          <Item 
            icon={<Grid3X3 className={`h-5 w-5 ${isActive("/apps") ? 'text-[#9CE800]' : 'text-[#9ce800]'}`} />} 
            label="AppStore" 
            onClick={() => go("/apps")} 
            path="/apps"
          />
        </nav>
        </div>
      </div>
    </>
  );
}