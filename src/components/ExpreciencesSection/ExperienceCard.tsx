import type { ExperienceCardProps } from "@/types"
import { Calendar, MapPin } from "lucide-react"
import { ProjectStack } from "@/components/common"
import { DownloadButton, ExternalButton } from "@/components/Button"

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className="bg-[#0a0a0a] border border-emerald-400/20 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-300">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-emerald-400 mb-1">
                    {experience.title}
                </h3>

                <p className="text-white font-semibold">
                    {experience.company}
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.date.start} {experience.date.end ? ` - ${experience.date.end}` : ""}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location.city}, {experience.location.country}</span>
                    </div>
                </div>
            </div>

            {experience.tasks && (
                <ul className="space-y-2 mb-5">
                    {experience.tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-400`} />
                            <span>{task.content}</span>
                        </li>
                    ))}
                </ul>
            )}

            {experience.stacks && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {experience.stacks.map((stack, index) => (
                        <ProjectStack key={index} stack={stack} />
                    ))}
                </div>
            )}

            {(experience.link || experience.download) && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-emerald-400/10">
                    {experience.link && (
                        <ExternalButton href={experience.link} />
                    )}

                    {experience.download && (
                        <DownloadButton path={experience.download.path} />
                    )}
                </div>
            )}
        </div>
    )
}

export default ExperienceCard