import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Project from "@/components/Project"
import Skill from "@/components/Skill"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Page() {

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Projects Section */}
            <Project />

            {/* Skills Section */}
            <Skill />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </>
    )
}
