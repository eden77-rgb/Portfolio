import type { ProjectCardProps } from "@/types";
import { ProjectStack } from "@/components/common";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts";

const ProjectCard = ({ projet }: ProjectCardProps) => {
    const { lang } = useLanguage()

    return (
        <Link to={`/project/${projet.id}`} className="h-full">
            <div className="h-full flex flex-col bg-[rgb(var(--bg-card))] border border-[rgb(var(--border)/0.15)] rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="aspect-video w-full overflow-hidden bg-[rgb(var(--bg-secondary))]">
                    <img
                        src={projet.thumbnail.path}
                        alt={projet.thumbnail.path ? projet.thumbnail.path : ""}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-3 group-hover:text-emerald-400 transition-colors">
                        {projet.title}
                    </h2>
                    <p className="text-[rgb(var(--text-muted))] mb-6 line-clamp-2">
                        {projet.accroche[lang].length > 100 ? projet.accroche[lang].slice(0, 100) + "..." : projet.accroche[lang]}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {projet.stacks.map((stack, index) => (
                            <ProjectStack key={index} stack={stack} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard