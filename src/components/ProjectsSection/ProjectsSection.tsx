import type { ProjectsProps } from "@/types"
import ProjectsContent from "./ProjectsContent"

const ProjectsSection = ({ sections }: ProjectsProps) => {

    return (
        <>
            {Object.entries(sections).map(([titre, projets]) => (
                <div>
                    <p>Titre: {titre}</p>

                    <ProjectsContent projets={projets} />
                </div>
            ))}
        </>
    )
}

export default ProjectsSection