import type { ProjectsContentProps } from "@/types"
import ProjectCard from "./ProjectCard"

const ProjectsContent = ({ projets }: ProjectsContentProps) => {
    return (
        <>
            {projets.map((projet, index) => (
                <div key={index}>
                    <ProjectCard projet={projet} />
                </div>
            ))}
        </>
    )
}

export default ProjectsContent