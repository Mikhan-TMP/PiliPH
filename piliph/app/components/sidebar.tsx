"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
Home, 
Vote, 
GitCompare, 
CheckSquare, 
Bookmark, 
BookOpen, 
Info, 
Settings, 
Menu, 
X 
} from "lucide-react";

const navItems = [
{ name: "Home", href: "/", icon: Home },
{ name: "Elections", href: "/elections", icon: Vote },
{ name: "Compare", href: "/compare", icon: GitCompare },
{ name: "My Vote", href: "/my-vote", icon: CheckSquare },
{ name: "Saved", href: "/saved", icon: Bookmark },
{ name: "Learn", href: "/learn", icon: BookOpen },
{ name: "About", href: "/about", icon: Info },
{ name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
const [isOpen, setIsOpen] = useState(false);
const pathname = usePathname();

return (
    <>
    {/* Mobile Header / Toggle Button */}
    <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4 sticky top-0 z-50">
        <span className="font-bold text-lg">PiliPH</span>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
        aria-label="Toggle Menu"
        >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </div>

    {/* Backdrop for Mobile */}
    {isOpen && (
        <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={() => setIsOpen(false)}
        />
    )}

    {/* Sidebar Container */}
    <aside
        className={`
            fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out
            md:translate-x-0 md:relative md:h-auto md:min-h-full md:z-auto
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
        <div>
        {/* Brand Logo / Title */}
        <div className="hidden md:flex items-center gap-2 mb-8 px-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold">
            PH
            </div>
            <span className="font-bold text-xl tracking-wide">PiliPH</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
            {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
                <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${
                    isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }
                `}
                >
                <Icon size={20} />
                <span>{item.name}</span>
                </Link>
            );
            })}
        </nav>
        </div>

        {/* Optional Footer Section */}
        <div className="border-t border-gray-800 pt-4 px-2 text-xs text-gray-500">
        © 2026 PiliPH.
        </div>
    </aside>
    </>
);
}