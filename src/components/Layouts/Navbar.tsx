import { useLanguage } from "@/contexts"
import { Download, Languages, Moon, Share2, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const NavBar = () => {
    const { lang, setLang } = useLanguage()
    const [isDark, setIsDark] = useState(true)

    useEffect(() => { console.log("[DEBUG]: lang: ", lang) }, [lang])

    return (
        <nav className="fixed top-6 right-6 z-50 flex items-center gap-3">
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-lg border border-emerald-500/20 rounded-full px-4 py-2 hover:border-emerald-500/40 transition-all">
                <Languages className="w-4 h-4 text-emerald-400" />

                <div className="flex items-center gap-1 ml-2">
                    <button
                        onClick={() => { setLang('FR') }}
                        className={`px-2 py-1 rounded-md text-sm font-medium transition-all 
                        ${lang == "FR"
                                ? "text-emerald-400 bg-emerald-500/20"
                                : "text-gray-400 hover:text-emerald-300"
                            }`}
                    >
                        FR
                    </button>

                    <span className="text-gray-600">|</span>

                    <button
                        onClick={() => { setLang('EN') }}
                        className={`px-2 py-1 rounded-md text-sm font-medium transition-all 
                        ${lang == "EN"
                                ? "text-emerald-400 bg-emerald-500/20"
                                : "text-gray-400 hover:text-emerald-300"
                            }`}
                    >
                        EN
                    </button>
                </div>
            </div>

            <button
                onClick={() => { setIsDark(!isDark) }}
                className="flex items-center justify-center w-10 h-10 bg-black/40 backdrop-blur-lg border border-emerald-500/20 rounded-full hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all group"
                aria-label="Toggle theme"
            >
                {isDark ? (
                    <Moon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                ) : (
                    <Sun className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                )}
            </button>

            <button
                onClick={() => { }}
                className="flex items-center justify-center w-10 h-10 bg-black/40 backdrop-blur-lg border border-teal-500/20 rounded-full hover:border-teal-500/40 hover:bg-teal-500/10 transition-all group"
                aria-label="Download CV"
            >
                <Download className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </button>

            <button
                onClick={() => { }}
                className="flex items-center justify-center w-10 h-10 bg-black/40 backdrop-blur-lg border border-lime-500/20 rounded-full hover:border-lime-500/40 hover:bg-lime-500/10 transition-all group"
                aria-label="Share portfolio"
            >
                <Share2 className="w-5 h-5 text-lime-400 group-hover:text-lime-300 transition-colors" />
            </button>
        </nav>
    )
}

export default NavBar