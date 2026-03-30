import type { ExperiencesContentProps } from "@/types"
import { Award, Briefcase, GraduationCap } from "lucide-react"
import ExperienceCard from "./ExperienceCard"

/*
*
*   ExperiencesContent
*       > Timeline
*       > Appel a card
* 
*/

const ExperiencesContent = ({ experiences }: ExperiencesContentProps) => {
    return (
        <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/20 via-teal-500/40 to-lime-500/20" />

            <div className="space-y-12">
                {experiences.map((experience, index) => (
                    <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-emerald-400/40 flex items-center justify-center">
                            {
                                experience.type == "Formation" ? (
                                    <GraduationCap className="w-7 h-7 text-teal-400" />
                                ) :

                                    experience.type == "Expérience Professionnelle" ? (
                                        <Briefcase className="w-7 h-7 text-emerald-400" />
                                    ) :

                                        (
                                            <Award className="w-7 h-7 text-lime-400" />
                                        )
                            }
                        </div>

                        <div className="hidden md:block md:w-1/2" />

                        <div className="ml-20 md:ml-0 md:w-5/12 md:px-8">
                            <ExperienceCard experience={experience} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperiencesContent