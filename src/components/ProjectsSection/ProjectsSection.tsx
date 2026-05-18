import type { ProjectsProps } from "@/types"
import ProjectsContent from "./ProjectsContent"
import { useLanguage } from "@/contexts"


const ProjectsSection = ({ sections }: ProjectsProps) => {
    const { lang } = useLanguage()
    
    const gridCols: Record<1 | 2 | 3 | 4, string> = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
    }

    return (
        <section id="projects" className="py-20 px-4 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {sections.map((section) => (
                    <div key={section.title[lang]} className="w-full mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent leading-normal">
                            {section.title[lang]}
                        </h2>

                        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[section.projects.length as 1 | 2 | 3]} gap-8`}>
                            <ProjectsContent projets={section.projects} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection