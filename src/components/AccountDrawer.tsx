import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import svgPaths from "../imports/svg-00ic2zuikz";

interface AccountDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

function IconContent() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-content">
          <path d={svgPaths.p189f7200} fill="var(--fill-0, #E6E7E2)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function CloseX({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#353b40] box-border content-stretch flex items-center justify-center p-[3px] relative rounded-[2px] shrink-0 hover:bg-[#404750] transition-colors" 
      data-name="close-x"
    >
      <IconContent />
    </button>
  );
}

function Surface() {
  return (
    <div className="absolute inset-[18.75%]" data-name="surface">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="surface">
          <path d={svgPaths.p276e4800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p150e3f00} fill="var(--fill-0, #E60000)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LogoTelecom() {
  return (
    <div className="bg-[#e60000] overflow-clip relative shrink-0 size-6" data-name="logo/telecom">
      <Surface />
    </div>
  );
}

function Frame108() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-[12px]">+265 7073457532</p>
      </div>
    </div>
  );
}

function VerifyIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="verify icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="verify icon">
          <path d={svgPaths.p1b276c00} fill="var(--fill-0, #9CE800)" id="Star 1" />
          <g id="icon_check">
            <g id="Space"></g>
            <path d={svgPaths.p39252c70} fill="var(--fill-0, #252A2D)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34795() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <VerifyIcon />
    </div>
  );
}

function Frame1261158909() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame34795 />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Verified</p>
      </div>
    </div>
  );
}

function Frame1261158886() {
  return (
    <div className="content-stretch flex gap-2 h-6 items-center justify-start relative shrink-0 w-full">
      <LogoTelecom />
      <Frame108 />
      <Frame1261158909 />
    </div>
  );
}

function AccountInfoButton() {
  return (
    <div className="bg-[#ffffff] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-end justify-start pb-0 pt-3 px-3 relative w-full">
          <Frame1261158886 />
        </div>
      </div>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Button-text">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">deposit</p>
      </div>
    </div>
  );
}

function DepositButton() {
  return (
    <button className="basis-0 bg-[#9ce800] grow h-8 min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#8ac400] transition-colors" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative w-full">
          <ButtonText />
        </div>
      </div>
    </button>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Button-text">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">withdraw</p>
      </div>
    </div>
  );
}

function WithdrawButton() {
  return (
    <button className="basis-0 grow h-8 min-h-px min-w-px relative rounded-[4px] shrink-0 hover:bg-[#f5f5f5] transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#353b40] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-0 relative w-full">
          <ButtonText1 />
        </div>
      </div>
    </button>
  );
}

function ActionButtons() {
  return (
    <div className="bg-[#ffffff] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start p-[12px] relative w-full">
          <DepositButton />
          <WithdrawButton />
        </div>
      </div>
    </div>
  );
}

function AccountSection() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative rounded-[4px] shrink-0 w-full">
      <AccountInfoButton />
      <ActionButtons />
    </div>
  );
}

function TopSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-2 items-end justify-start relative shrink-0 w-full">
      <CloseX onClick={onClose} />
      <AccountSection />
    </div>
  );
}

// Navigation menu items
function MegaphoneIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <g id="shape">
            <path d={svgPaths.p2850df0} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p23e14080} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p12a66900} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p19e084c0} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.pc98f580} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p38109000} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p227da800} fill="var(--fill-0, #AAAEB0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="bg-[#ff7a00] box-border content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-1 py-0 relative rounded-[1200px] shrink-0" data-name="badge">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function NotificationsItem() {
  return (
    <div className="bg-[#ffffff] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 flex-1">
            <MegaphoneIcon />
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[18px] whitespace-pre">Notifications</p>
            </div>
          </div>
          <NotificationBadge />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path d={svgPaths.pfcb9700} fill="var(--fill-0, #252A2D)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function MyAccountIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <g id="shape">
            <path d={svgPaths.p3351d00} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p2d922ff0} fill="var(--fill-0, #AAAEB0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ManageAccountItem() {
  return (
    <button className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f5f5f5] transition-colors" data-name="Component 5">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-start p-[12px] relative w-full">
          <div className="basis-0 content-stretch flex gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">
            <MyAccountIcon />
            <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[18px] text-left">Manage Account</p>
              </div>
            </div>
          </div>
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
            <div className="flex-none rotate-[90deg]">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function MyBetsIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <g id="shape">
            <path clipRule="evenodd" d={svgPaths.p274927f0} fill="var(--fill-0, #AAAEB0)" fillRule="evenodd" />
            <path d={svgPaths.p239edc00} fill="var(--fill-0, #AAAEB0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MyBetsItem() {
  return (
    <button className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f5f5f5] transition-colors">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <MyBetsIcon />
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[18px] whitespace-pre">My Bets</p>
            </div>
          </div>
          <ChevronRight />
        </div>
      </div>
    </button>
  );
}

function StatementIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path clipRule="evenodd" d={svgPaths.p2c72ea80} fill="var(--fill-0, #AAAEB0)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function StatementItem() {
  return (
    <button className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f5f5f5] transition-colors">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <StatementIcon />
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[18px] whitespace-pre">Statement</p>
            </div>
          </div>
          <ChevronRight />
        </div>
      </div>
    </button>
  );
}

function LanguageIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path d={svgPaths.p3a7f8700} fill="var(--fill-0, #AAAEB0)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function FlagBase() {
  return (
    <div className="overflow-clip relative rounded-[87.5px] shrink-0 size-3.5" data-name="_flag-base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4_6849)" id="icon / flag / france">
          <path d={svgPaths.p3296bc80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30d22c40} fill="var(--fill-0, #D80027)" id="Vector_2" />
          <path d={svgPaths.p159b7540} fill="var(--fill-0, #051440)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_4_6849">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FlagBase1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="_flag-base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="_flag-base">
          <g clipPath="url(#clip0_4_6842)">
            <path d={svgPaths.p3296bc80} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p33861580} fill="var(--fill-0, #0052B4)" id="Vector_2" />
            <g id="Group">
              <path d={svgPaths.p23ff1d00} fill="var(--fill-0, #D80027)" id="Vector_3" />
              <path d={svgPaths.p277f3280} fill="var(--fill-0, #D80027)" id="Vector_4" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_6842">
            <rect fill="white" height="14" rx="7" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LanguageFlags() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="box-border content-stretch flex gap-2 items-center justify-center opacity-30 p-px relative shrink-0">
        <FlagBase />
      </div>
      <div className="relative rounded-[20px] shrink-0 size-4">
        <div className="absolute box-border content-stretch flex gap-2 items-center justify-center left-0 p-px top-0">
          <FlagBase1 />
        </div>
      </div>
    </div>
  );
}

function ChangeLanguageItem() {
  return (
    <button className="bg-[#ffffff] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full hover:bg-[#f5f5f5] transition-colors" data-name="change language">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 flex-1">
            <LanguageIcon />
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[18px] whitespace-pre">Change Language</p>
            </div>
          </div>
          <LanguageFlags />
        </div>
      </div>
    </button>
  );
}

// Home Icon
function HomeIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path d="M2 6L8 1.33333L14 6V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.687 2 13.3333V6Z" stroke="var(--stroke-0, #AAAEB0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
          <path d="M6 14.6667V8H10V14.6667" stroke="var(--stroke-0, #AAAEB0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
        </g>
      </svg>
    </div>
  );
}

// Apps Icon
function AppsIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <rect x="2" y="2" width="5.33333" height="5.33333" rx="1.33333" stroke="var(--stroke-0, #AAAEB0)" strokeWidth="1.5" fill="none"/>
          <rect x="8.66667" y="2" width="5.33333" height="5.33333" rx="1.33333" stroke="var(--stroke-0, #AAAEB0)" strokeWidth="1.5" fill="none"/>
          <rect x="8.66667" y="8.66667" width="5.33333" height="5.33333" rx="1.33333" stroke="var(--stroke-0, #AAAEB0)" strokeWidth="1.5" fill="none"/>
          <rect x="2" y="8.66667" width="5.33333" height="5.33333" rx="1.33333" stroke="var(--stroke-0, #AAAEB0)" strokeWidth="1.5" fill="none"/>
        </g>
      </svg>
    </div>
  );
}

function HomeItem({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f5f5f5] transition-colors"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <HomeIcon />
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[18px] whitespace-pre">Home</p>
            </div>
          </div>
          <ChevronRight />
        </div>
      </div>
    </button>
  );
}

function AppsItem({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f5f5f5] transition-colors"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <AppsIcon />
            <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[18px] whitespace-pre">Apps</p>
            </div>
          </div>
          <ChevronRight />
        </div>
      </div>
    </button>
  );
}

function MenuSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full">
      <NotificationsItem />
      <ManageAccountItem />
      <MyBetsItem />
      <StatementItem />
      <ChangeLanguageItem />
    </div>
  );
}

function MyAccountSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#8e9499] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">My Account</p>
      </div>
      <MenuSection onNavigate={onNavigate} />
    </div>
  );
}

function LogOutButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#ffffff] relative rounded-[4px] shrink-0 w-full hover:bg-[#f5f5f5] transition-colors"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-1.5 items-center justify-start p-[12px] relative w-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#cc371b] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px] whitespace-pre">Log Out</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export function AccountDrawer({ isOpen, onClose, onLogout }: AccountDrawerProps) {
  const navigate = useNavigate();

  // Handle escape key and prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogoutClick = () => {
    onLogout();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[9998] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-[#f4f5f0] transform transition-transform duration-300 ease-in-out z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-name="account-drawer"
      >
        <div className="relative size-full flex justify-end">
          <div className="box-border flex flex-col gap-3 items-stretch justify-start pb-8 pt-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative w-full h-full max-w-2xl">
            <div className="flex flex-col gap-0.5 items-stretch justify-start relative shrink-0 w-full">
              <TopSection onClose={onClose} />
            </div>
            <MyAccountSection onNavigate={handleNavigate} />
            <div className="w-full">
              <LogOutButton onClick={handleLogoutClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}