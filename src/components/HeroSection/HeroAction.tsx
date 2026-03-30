import { Button } from "@/components/Button"

const HeroAction = () => {
    return (
        <>
            <section className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button title="Mes projets" style="primary" action={() => { window.location.href = "#projects" }}></Button>
                <Button title="Me contacter" style="secondary" action={() => { window.location.href = "#contact" }}></Button>
            </section>
        </>
    )
}

export default HeroAction