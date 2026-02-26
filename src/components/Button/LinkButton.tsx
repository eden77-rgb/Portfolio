import type { ButtonProps } from "@/types"
import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"

const LinkButton = ({ title, style, action }: ButtonProps) => {
    return (
        <>
            <button
                className={
                    style == "primary" ?
                        "flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-lg text-white font-medium transition-all transform hover:scale-105" :
                        "flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-white font-medium transition-all transform hover:scale-105"
                }
                onClick={action}
            >
                {style === "primary" ?
                    <ExternalLink size={16} /> :
                    <SiGithub size={16} />
                }
                {title}
            </button>
        </>
    )
}

export default LinkButton