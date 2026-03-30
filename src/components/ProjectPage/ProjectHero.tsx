import type { ProjectHeroProps } from "@/types"
import { ProjectStack } from "@/components/common"
import { LinkButton } from "@/components/Button"
import { Calendar } from "lucide-react"

const ProjectHero = ({ projet }: ProjectHeroProps) => {
    return (
        <div className="relative h-[80vh] flex flex-col justify-end">
            <div className="absolute inset-0">
                <img
                    src={projet.thumbnail.path}
                    alt={projet.title}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-black/95" />
            </div>

            <div className="relative z-10 px-6 md:px-20 lg:px-28 pb-16 pt-32">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-6">
                    <Calendar size={14} />
                    <p>{projet.date}</p>
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] pb-2 mb-6 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent">
                    {projet.title}
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
                    {projet.accroche}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {projet.stacks.map((stack) => (
                        <ProjectStack stack={stack} />
                    ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                    {projet.live &&
                        <LinkButton title="Voir la démo" style="primary" action={() => { window.open(projet.live, "_blank") }} />
                    }

                    <LinkButton title="Code source" style="secondary" action={() => { window.open(projet.github, "_blank") }} />
                </div>
            </div>
        </div>
    )
}

export default ProjectHero