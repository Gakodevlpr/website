import { Link, useNavigate, useLocation } from 'react-router-dom';
import Back from '../assets/back.svg?react'
import { useState } from 'react'

export default function Header({ classNameProp }: { classNameProp: string }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleGoBack = () => {
        navigate(-1); // Regresa a la página anterior
    };

    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { to: '/bienvenida', label: 'Bienvenida' },
        { to: '/about', label: 'About' },
        { to: '/cursos', label: 'Cursos' },
    ] as const;

    return (
        <header className={`relative flex flex-row items-center justify-between px-3 ${classNameProp}`}>
            {/* Mobile: hamburger */}
            <button
                aria-label="Abrir menú"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
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
                <div className="flex items-centergap-1 rounded-2xl px-2 py-2">
                    <ul className="md:flex-row flex w-full items-center justify-center gap-1 overflow-x-auto">
                        {navItems.map((item) => {
                            const isActive = currentPath === item.to || currentPath.startsWith(item.to + '/');

                            return (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        viewTransition={true}
                                        className={[
                                            'group relative block rounded-xl px-4 py-2 text-2xl font-medium transition-all duration-200',
                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                                            isActive
                                                ? 'text-white bg-white/10 ring-1 ring-white/10'
                                                : 'text-white/50 hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/10',
                                        ].join(' ')}
                                    >
                                        <span className="relative">
                                            {item.label}
                                            <span
                                                className={[
                                                    'pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full',
                                                    'bg-white transition-transform duration-700',
                                                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                                                ].join(' ')}
                                            />
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
                    {/* Back button */}
                    <Back
                        onClick={handleGoBack}
                        aria-label="Volver a la página anterior"
                        tabIndex={0}
                        onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') handleGoBack();
                        }}
                    />
            </div>


            {/* Mobile dropdown */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden absolute left-0 right-0 top-14 z-50 mx-3 rounded-2xl bg-black/90 ring-1 ring-white/10 backdrop-blur">
                    <ul className="flex flex-col p-2">
                        {navItems.map((item) => {
                            const isActive = currentPath === item.to || currentPath.startsWith(item.to + '/');
                            return (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        viewTransition={true}
                                        onClick={() => setIsOpen(false)}
                                        className={[
                                            'group relative block rounded-xl px-4 py-3 text-lg font-medium transition-all duration-200',
                                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                                            isActive
                                                ? 'text-white bg-white/10 ring-1 ring-white/10'
                                                : 'text-white/80 hover:text-white hover:bg-white/5 hover:ring-1 hover:ring-white/10',
                                        ].join(' ')}
                                    >
                                        <span className="relative">
                                            {item.label}
                                            <span
                                                className={[
                                                    'pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full',
                                                    'bg-white transition-transform duration-700',
                                                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                                                ].join(' ')}
                                            />
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </header>
    );
}
