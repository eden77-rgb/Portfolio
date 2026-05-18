import { Button } from "@/components/Button"
import { useLanguage } from "@/contexts"
import langJSON from "@/data/lang.json"

const HeroAction = () => {
    const { lang } = useLanguage()

    return (
        <>
            <section className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button title={langJSON.MainPage.HeroSection.projectButton[lang]} style="primary" action={() => { window.location.href = "#projects" }}></Button>
                <Button title={langJSON.MainPage.HeroSection.contactButton[lang]} style="secondary" action={() => { window.location.href = "#contact" }}></Button>
            </section>
        </>
    )
}

export default HeroAction