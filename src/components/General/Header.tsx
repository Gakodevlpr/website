import { Link, useNavigate, useLocation } from 'react-router-dom';
import Back from '../../assets/back.svg?react'
import { useState } from 'react'

type NavItem = {
    to: string;
    label: string;
};

const NAV_ITEMS: readonly NavItem[] = [
    { to: '/bienvenida', label: 'Bienvenida' },
    { to: '/recursos', label: 'Recursos' },
    { to: '/cursos', label: 'Cursos' },
] as const;

function isPathActive(currentPath: string, to: string): boolean {
    return currentPath === to || currentPath.startsWith(to + '/');
}

// Reusable class helpers
const LINK_COMMON = 'group relative block rounded-xl transition-all duration-200';
const LINK_FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
const DESKTOP_SIZE = 'px-4 py-2 text-2xl font-normal';
const MOBILE_SIZE = 'px-4 py-3 text-lg font-medium';

const ACTIVE_DESKTOP = 'text-white bg-white/10 ring-1 ring-blue-600';
const INACTIVE_DESKTOP = 'text-white/80 hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/10';
const ACTIVE_MOBILE = 'text-white bg-white/10 ring-1 ring-white/10';
const INACTIVE_MOBILE = 'text-white/80 hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/10';

function getLinkClass(isActive: boolean, variant: 'desktop' | 'mobile'): string {
    const size = variant === 'desktop' ? DESKTOP_SIZE : MOBILE_SIZE;
    const state = variant === 'desktop'
        ? (isActive ? ACTIVE_DESKTOP : INACTIVE_DESKTOP)
        : (isActive ? ACTIVE_MOBILE : INACTIVE_MOBILE);
    return [LINK_COMMON, LINK_FOCUS, size, state].join(' ');
}

const UNDERLINE_BASE = 'pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-white transition-transform duration-700';
function getUnderlineClass(isActive: boolean): string {
    return [UNDERLINE_BASE, isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'].join(' ');
}

function BackButton({ onActivate }: { onActivate: () => void }) {
    return (
        <Back
            onClick={onActivate}
            aria-label="Volver a la página anterior"
            tabIndex={0}
            role="button"
            className="cursor-pointer"
            onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') onActivate();
            }}
        />
    );
}

function NavItems({ currentPath, variant, onItemClick }: { currentPath: string; variant: 'desktop' | 'mobile'; onItemClick?: () => void }) {
    return (
        <>
            {NAV_ITEMS.map((item) => {
                const isActive = isPathActive(currentPath, item.to);
                return (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            viewTransition={true}
                            className={getLinkClass(isActive, variant)}
                            onClick={onItemClick}
                        >
                            <span className="relative">
                                {item.label}
                                <span className={getUnderlineClass(isActive)} />
                            </span>
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export default function Header({ classNameProp }: { classNameProp: string }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className={`relative flex flex-row items-center justify-between px-3 ${classNameProp}`}>
            {/* Mobile: hamburger */}
            <button
                aria-label="Abrir menú"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="md:hidden inline-flex items-center rounded-xl"
                onClick={() => setIsOpen((v) => !v)}
            >
                <span className="sr-only">Abrir menú</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            <div className='flex flex-row justify-center'>
            {/* Desktop nav */}
            <nav className="hidden md:block">
                <div className="flex items-center gap-1 rounded-2xl px-2 py-2">
                    <ul className="md:flex-row flex w-full items-center justify-center gap-1">
                        <NavItems currentPath={currentPath} variant="desktop" />
                    </ul>
                </div>
            </nav>
                    <BackButton
                        onActivate={() => {
                            if (document.startViewTransition) {
                                document.startViewTransition(() => navigate('/'));
                            } else {
                                navigate('/');
                            }
                        }}
                    />
            </div>


            {/* Mobile dropdown */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden absolute left-0 right-0 top-14 z-50 mx-3 rounded-2xl bg-black/90 ring-1 ring-white/10 backdrop-blur">
                    <ul className="flex flex-col p-2">
                        <NavItems currentPath={currentPath} variant="mobile" onItemClick={() => setIsOpen(false)} />
                    </ul>
                </div>
            )}
        </header>
    );
}
