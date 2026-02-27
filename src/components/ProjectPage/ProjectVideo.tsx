import type { ProjectVideoProps } from "@/types"

const ProjectVideo = ({ video }: ProjectVideoProps) => {
    return (
        <div className="px-12 md:px-20 lg:px-28 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6">
                Démonstration vidéo
            </h2>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-teal-500/20 bg-linear-to-br from-teal-900/20 to-gray-900/40">
                <iframe
                    src={video.path}
                    title={video.alt ? video.alt : ""}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
        </div>
    )
}

export default ProjectVideo