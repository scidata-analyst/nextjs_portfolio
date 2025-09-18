export default function About() {
    return (
        <>
            <section
                id="about"
                className="relative py-24 bg-gradient-to-b from-green-50 via-white to-green-50 font-sans overflow-hidden"
            >
                {/* Decorative water-drop circles */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-200/40 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-300/30 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-green-400/20 blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

                <div className="relative mx-auto max-w-full px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl drop-shadow-md">
                            About Me
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            A brief overview of who I am, my skills, and professional experience.
                        </p>
                    </div>

                    {/* Asymmetric Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {/* Main About Card */}
                        <div className="md:col-span-4 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
                            <p className="text-gray-700 leading-relaxed">
                                I’m a full-stack developer passionate about creating clean,
                                minimal, and user-focused web experiences. I specialize in
                                modern frameworks and best practices to deliver high-quality,
                                responsive applications.
                            </p>
                        </div>

                        {/* Skills Card */}
                        <div className="md:col-span-2 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">React</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Next.js</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Laravel</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">MySQL</span>
                            </div>
                        </div>

                        {/* Work Experience Card */}
                        <div className="md:col-span-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Previously worked at <span className="font-medium text-green-600">Tech Company</span>
                                as a Full Stack Developer, creating scalable applications
                                and modern web solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
