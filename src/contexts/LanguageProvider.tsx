import {useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./LanguageContext";

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Language>("FR")

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider
