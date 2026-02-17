import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection"

import { projects } from "@/data/projects"

export function MainPage() {
    return (
        <>
            <HeroSection />
            <ProjectsSection sections={projects} />
        </>
    )
}