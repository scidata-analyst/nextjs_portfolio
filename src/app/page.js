"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button, Input, Textarea } from "@/components/ui/button"

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]

    const projects = [
        {
            title: "E-commerce Website",
            description: "A full-stack online store with cart, checkout, and payment integration.",
            image: "/projects/ecommerce.png",
            link: "#",
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio built with Next.js, Tailwind, and shadcn/ui.",
            image: "/projects/portfolio.png",
            link: "#",
        },
        {
            title: "Blog Platform",
            description: "A modern blog with authentication, categories, and markdown support.",
            image: "/projects/blog.png",
            link: "#",
        },
    ]

    const skills = [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Laravel" },
        { name: "PHP" },
        { name: "Node.js" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Git" },
        { name: "Docker" },
        { name: "Figma" },
    ]

    return (
        <>
            {/* Navbar */}
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

            {/* Hero Section */}
            <section className="font-sans relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-white to-gray-50">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Hi, I’m <span className="text-primary">Your Name</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 sm:mt-6 sm:text-xl">
                        A passionate <span className="font-medium text-gray-800">Full Stack Developer</span>
                        crafting modern, responsive, and user-friendly websites.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg">View My Work</Button>
                        <Button size="lg" variant="outline">
                            Contact Me
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white font-sans">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
                        About Me
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                        I’m a passionate web developer with a love for crafting clean,
                        minimal, and user-focused digital experiences. My expertise lies
                        in building responsive websites and modern web applications
                        using the latest technologies.
                    </p>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Who I Am</h3>
                            <p className="mt-3 text-gray-600">
                                With a background in full-stack development, I specialize
                                in turning ideas into elegant, functional, and accessible
                                websites that help businesses grow.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">What I Do</h3>
                            <p className="mt-3 text-gray-600">
                                I work with modern frameworks and tools like React, Next.js,
                                Laravel, and Tailwind CSS to deliver high-performance
                                applications with a focus on SEO and UX.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-50 font-sans">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
                        My Projects
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        A selection of my recent work showcasing my skills in design and development.
                    </p>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-white font-sans">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Skills
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800 font-medium shadow-sm hover:shadow-md transition"
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50 font-sans">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
                        Contact Me
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
                        Got a project or idea? Let's work together.
                    </p>

                    <form className="mt-12 max-w-2xl mx-auto grid gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-lg border border-gray-300 p-4 text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-lg border border-gray-300 p-4 text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full rounded-lg border border-gray-300 p-4 text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        />
                        <Button type="submit" size="lg" className="mx-auto">
                            Send Message
                        </Button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-white border-t border-gray-200 text-center text-gray-600 font-sans">
                &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
            </footer>
        </>
    )
}
