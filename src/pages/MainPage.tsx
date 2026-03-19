import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection"
import { ExperiencesSection } from "@/components/ExpreciencesSection"
import { ContactSection } from "@/components/ContactSection"

import { projects } from "@/data/projects"
import { experiences } from "@/data/experiences";

export function MainPage() {
    return (
        <>
            <HeroSection />
            <ProjectsSection sections={projects} />
            <ExperiencesSection experiences={experiences}/>
            <ContactSection />
        </>
    )
}