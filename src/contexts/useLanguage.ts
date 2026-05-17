import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error("useLanguage erreur")
    }

    return context
}

export default useLanguage
