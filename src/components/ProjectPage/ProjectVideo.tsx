import type { ProjectVideoProps } from "@/types"

const ProjectVideo = ({ video }: ProjectVideoProps) => {
    const r2Url = import.meta.env.VITE_R2_URL;
    const videoUrl = `${r2Url}${video.path}`;

    return (
        <div className="px-12 md:px-20 lg:px-28 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6">
                Démonstration vidéo
            </h2>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-teal-500/20 bg-linear-to-br from-teal-900/20 to-gray-900/40">
                <video
                    src={videoUrl}
                    title={video.alt ? video.alt : ""}
                    className="w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                />
            </div>
        </div>
    )
}

export default ProjectVideo