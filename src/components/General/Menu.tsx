import { Link, useLocation } from 'react-router-dom';

export default function Menu() {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { to: '/bienvenida', label: 'Bienvenida' },
        { to: '/about', label: 'About' },
        { to: '/cursos', label: 'Cursos' },
    ] as const;

    return (
        <nav className="mx-auto w-3/4 md:w-2/5 max-w-3xl px-3">
            <div className="rounded-2xl p-[1px] ">
                <div className="flex items-center justify-between gap-1 rounded-2xl px-2 py-2">
                    <ul className="flex-col md:flex-row no-scrollbar flex w-full items-center justify-center gap-1 overflow-x-auto">
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
                                                ? 'text-white bg-white/10 ring-1 ring-white/10 shadow-sm'
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
            </div>
        </nav>
    );
}