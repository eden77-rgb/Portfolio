import { useLanguage } from "@/contexts"
import HeroAction from "./HeroAction"
import langJSON from "@/data/lang.json"

const HeroContent = () => {
    const { lang } = useLanguage()

    return (
        <>
            <section className="h-screen w-full flex items-center justify-center flex-col px-4">
                <div className="text-center max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-[1.1] pb-2">
                        <span className="block bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent">
                            Eden
                        </span>
                        <span className="block bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent pb-3">
                            Vandewatyne
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider mb-6 text-[rgb(var(--text-primary))] animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {langJSON.MainPage.HeroSection.jobTitle[lang]}
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-[rgb(var(--text-muted))] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        {langJSON.MainPage.HeroSection.jobDescription[lang]}
                    </p>
                </div>

                <HeroAction />
            </section>
        </>
    )
}

export default HeroContent