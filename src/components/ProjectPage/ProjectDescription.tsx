import type { ProjectDescriptionProps } from "@/types"
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts"

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
    const { lang } = useLanguage()
    
    return (
        <div className="px-12 md:px-20 lg:px-28 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6">
                {langJSON.ProjectPage.aboutTitle[lang]}
            </h2>
            
            <p className="text-base md:text-lg text-[rgb(var(--text-muted))] leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default ProjectDescription