import type { ExperiencesSectionProps } from "@/types"
import ExperiencesContent from "./ExperiencesContent"
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts"

/*
*
*   ExperiencesSection
*       > Titre + description section
*       > Appel du content
* 
*/

const ExperiencesSection = ({ experiences }: ExperiencesSectionProps) => {
    const { lang } = useLanguage()
    
    return (
        <section id="experiences">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent leading-normal">
                    {langJSON.MainPage.ExperiencesSection.sectionTitle[lang]}
                </h2>

                <p className="text-[rgb(var(--text-muted))] text-lg">
                    {langJSON.MainPage.ExperiencesSection.sectionDescription[lang]}
                </p>
            </div>

            <ExperiencesContent experiences={experiences} />
        </section>
    )
}

export default ExperiencesSection