import type { ProjectStackProps } from "@/types"

const ProjectStack = ({ stack }: ProjectStackProps) => {
    return (
        <span className="px-3 py-1 text-xs md:text-sm bg-emerald-500/20 text-emerald-300 border-emerald-500/30 rounded-full border">
            {stack}
        </span>
    )
}

export default ProjectStack