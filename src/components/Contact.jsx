
import { Button, Input, Textarea } from "@/components/ui/button"

export default function Contact() {
    return (
        <>
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
        </>
    )
}