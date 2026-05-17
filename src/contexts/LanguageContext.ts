import { createContext } from "react"

export type Language = "FR" | "EN"

export type LanguageContextType = {
    lang: Language
    setLang: React.Dispatch<React.SetStateAction<Language>>
}

export const LanguageContext = createContext<LanguageContextType | null>(null)
