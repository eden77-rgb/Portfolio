import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection"
import { ExperiencesSection } from "@/components/ExpreciencesSection"
import { ContactSection } from "@/components/ContactSection"
import Footer from "@/components/Footer"

import { projects } from "@/data/projects"
import { experiences } from "@/data/experiences";
import { contactItem } from "@/data/contacts";
import { contactSocial } from "@/data/contacts";

export function MainPage() {
    return (
        <>
            <HeroSection />

            <main>
                <ProjectsSection sections={projects} />
                <ExperiencesSection experiences={experiences} />
                <ContactSection items={contactItem} socials={contactSocial} />
            </main>

            <Footer />
        </>
    )
}