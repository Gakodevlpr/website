import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Layout() {
    const location = useLocation();
    const isRootPath = location.pathname === "/";

    
    return (
        <div className="min-h-screen flex flex-col">
            {!isRootPath && <Header classNameProp="sticky top-0 z-10 bg-black border-b-1 diseabled md:block"/>}
            <main className="flex-grow">
                <Outlet />
                <SpeedInsights/>
            </main>
        </div>
    )
}