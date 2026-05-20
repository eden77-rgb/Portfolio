import type { ProjectVideoProps } from "@/types"
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts";

const ProjectVideo = ({ video }: ProjectVideoProps) => {
    const { lang } = useLanguage()

    const r2Url = import.meta.env.VITE_R2_URL;
    const videoUrl = `${r2Url}${video.path}`;

    return (
        <div className="px-12 md:px-20 lg:px-28 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6">
                {langJSON.ProjectPage.videoTitle[lang]}
            </h2>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-teal-500/20 bg-linear-to-br from-teal-500/10 to-[rgb(var(--bg-secondary)/0.4)]">
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