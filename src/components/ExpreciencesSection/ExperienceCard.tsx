import type { ExperienceCardProps } from "@/types"
import { Calendar, MapPin } from "lucide-react"
import { ProjectStack } from "@/components/common"
import { DownloadButton, ExternalButton } from "@/components/Button"

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <>
            <div>
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>

                <div className="flex">
                    <div className="flex">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.date.start} {experience.date.end ? ` - ${experience.date.end}` : ""}</span>
                    </div>

                    <div className="flex">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location.city}, {experience.location.country}</span>
                    </div>
                </div>
            </div>

            {experience.tasks && (
                <ul>
                    {experience.tasks.map((task) => (
                        <li className="flex">
                            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-400`} />
                            <span>{task.content}</span>
                        </li>
                    ))}
                </ul>
            )}

            {experience.stacks && (
                <>
                    {experience.stacks.map((stack) => (
                        <ProjectStack stack={stack} />
                    ))}
                </>
            )}

            {(experience.link || experience.download) && (
                <div>
                    {experience.link && (
                        <ExternalButton href={experience.link} />
                    )}

                    {experience.download && (
                        <DownloadButton path={experience.download.path} />
                    )}
                </div>
            )}
        </>
    )
}

export default ExperienceCard