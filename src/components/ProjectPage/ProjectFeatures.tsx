import { useLanguage } from "@/contexts"
import type { ProjectFeaturesProps } from "@/types"
import langJSON from "@/data/lang.json"

const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
    const { lang } = useLanguage()
    
    return (
        <div className="px-12 md:px-20 lg:px-28 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6">
                {langJSON.ProjectPage.featureTitle[lang]}
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                    <li className="flex items-center gap-4 px-6 py-4 rounded-xl border border-emerald-500/10 bg-linear-to-br from-emerald-500/8 to-[rgb(var(--bg-secondary)/0.4)] md:[&:last-child:nth-child(odd)]:col-span-2 md:[&:last-child:nth-child(odd)]:justify-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] shrink-0" />
                        <span className="text-[rgb(var(--text-secondary))] text-base md:text-lg font-medium">
                            {feature[lang].content}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ProjectFeatures