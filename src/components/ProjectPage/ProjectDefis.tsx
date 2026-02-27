import type { ProjectDefisProps } from "@/types"

const ProjectDefi = ({ defis }: ProjectDefisProps) => {
    return (
        <div className="px-12 md:px-20 lg:px-28 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6">
                Défis techniques
            </h2>

            <ul className="grid grid-cols-1 gap-4">
                {defis.map((defi) => (
                    <li className="flex items-center gap-4 px-6 py-4 rounded-xl border border-teal-500/10 bg-linear-to-br from-teal-900/10 to-zinc-900/40 w-full">
                        <span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] shrink-0" />
                        <span className="text-zinc-300 text-base md:text-lg font-medium">
                            {defi.content}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ProjectDefi