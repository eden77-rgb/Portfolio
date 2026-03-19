import type { ExperiencesSectionProps } from "@/types"
import ExperiencesContent from "./ExperiencesContent"

/*
*
*   ExperiencesSection
*       > Titre + description section
*       > Appel du content
* 
*/

const ExperiencesSection = ({ experiences }: ExperiencesSectionProps) => {
    return (
        <section>
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent leading-normal">
                    Parcours Professionnel
                </h2>

                <p className="text-gray-400 text-lg">
                    Expérience, formation et certifications
                </p>
            </div>

            <ExperiencesContent experiences={experiences} />
        </section>
    )
}

export default ExperiencesSection