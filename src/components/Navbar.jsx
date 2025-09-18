"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button, Input, Textarea } from "@/components/ui/button"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg font-sans">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                    <a href="#" className="text-xl font-bold tracking-tight text-gray-900">
                        MyPortfolio
                    </a>

                    <nav className="hidden space-x-8 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button size="sm">Hire Me</Button>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-gray-200 bg-white md:hidden">
                        <nav className="flex flex-col space-y-4 px-4 py-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-gray-700 transition hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button size="sm" className="w-fit">
                                Hire Me
                            </Button>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}