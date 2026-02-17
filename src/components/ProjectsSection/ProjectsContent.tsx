import type { ProjectsContentProps } from "@/types"
import ProjectCard from "./ProjectCard"

const ProjectsContent = ({ projets }: ProjectsContentProps) => {
    return (
        <>
            {projets.map((projet) => (
                <>
                    <ProjectCard projet={projet} />
                </>
            ))}
        </>
    )
}

export default ProjectsContent