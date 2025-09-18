export default function Skill() {
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
            <section id="skills" className="py-24 bg-gray-50 font-sans">
                <div className="mx-auto px-6 lg:px-8 text-center">
                    {/* Section Header */}
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Skills
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>

                    {/* Bento Grid */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-white shadow-md hover:shadow-xl transition p-6 flex items-center justify-center h-24 text-gray-900 font-medium"
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
