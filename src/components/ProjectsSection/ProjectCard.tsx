import type { ProjectCardProps } from "@/types";
import ProjectStack from "./ProjectStack";
import { Link } from "react-router-dom";

const ProjectCard = ({ projet }: ProjectCardProps) => {
    return (
        <Link to={`/project/${projet.id}`}>
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="aspect-video w-full overflow-hidden bg-gray-900">
                    <img
                        src={projet.thumbnail.path}
                        alt={projet.thumbnail.path ? projet.thumbnail.path : ""}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {projet.title}
                    </h2>
                    <p className="text-gray-400 mb-6 line-clamp-2">
                        {projet.description.slice(0, 100) + "..."}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {projet.stacks.map((stack) => (
                            <ProjectStack stack={stack} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard