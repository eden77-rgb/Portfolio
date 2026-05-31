import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection"
import { ExperiencesSection } from "@/components/ExperiencesSection"
import { ContactSection } from "@/components/ContactSection"
import Footer from "@/components/Layouts/Footer"

import { projects } from "@/data/projects"
import { experiences } from "@/data/experiences";
import { contactItem, contactSocial } from "@/data/contacts";

export function MainPage() {
    return (
        <>
            <main>
                <HeroSection />
                <ProjectsSection sections={projects} />
                <ExperiencesSection experiences={experiences} />
                <ContactSection items={contactItem} socials={contactSocial} />
            </main>

            <Footer />
        </>
    )
}