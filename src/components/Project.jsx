export default function Project() {
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
        {
            title: "Blog Platform",
            description: "A modern blog with authentication, categories, and markdown support.",
            image: "/projects/blog.png",
            link: "#",
        },
    ]

    return (
        <section id="projects" className="py-24 bg-gray-50 font-sans">
            <div className="mx-auto max-w-full px-4 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
                    My Projects
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    A selection of my recent work showcasing my skills in design and development.
                </p>
            </div>

            <div className="mt-16 mx-auto max-w-full px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-56 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80 transition"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
