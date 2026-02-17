import type { ProjectCardProps } from "@/types";
import ProjectStack from "./ProjectStack";

const ProjectCard = ({ projet }: ProjectCardProps) => {
    return (
        <div>
            <img src={projet.thumbnail.path} />

            <h2>{projet.title}</h2>
            <p>{projet.description.slice(0, 100) + "..."}</p>

            {projet.stacks.map((stack) => (
                <ProjectStack stack={stack} />
            ))}
        </div>
    )
}

export default ProjectCard