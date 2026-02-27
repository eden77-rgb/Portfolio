import type { ProjectDescriptionProps } from "@/types"

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
    return (
        <div className="px-12 md:px-20 lg:px-28 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-lime-400 mb-6">
                À propos du projet
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default ProjectDescription