'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navItems = [
        { href: '/', label: 'main()' },
        { href: '/blog', label: 'blog' },
        { href: '#contact', label: 'contact' },
    ]

    return (
        <header className="fixed w-[calc(100%+1px)] top-0 z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-900 sm:shadow-md">
            <div className="mx-auto md:max-w-3xl p-4 border-x border-stone-200 dark:border-stone-900">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                        garzuze
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-mono">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </nav>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className={`fixed left-0 w-full md:hidden mt-4 pb-4 transform transition-all duration-300 ease-in-out bg-white dark:bg-stone-950 shadow-2xl
                    ${isMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors ml-6"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    )
}