import type { ProjectStackProps } from "@/types"

const ProjectStack = ({ stack }: ProjectStackProps) => {
    return (
        <>
            <h3>{stack}</h3>
        </>
    )
}

export default ProjectStack