import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <>
            <section className="font-sans relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-green-100 via-green-200 to-green-300">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Hi, I’m <span className="text-green-700">Your Name</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 sm:mt-6 sm:text-xl">
                        A passionate{" "}
                        <span className="font-medium text-gray-900">Full Stack Developer</span> crafting modern,
                        responsive, and user-friendly websites.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-green-600 text-green-700 hover:bg-green-50"
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
