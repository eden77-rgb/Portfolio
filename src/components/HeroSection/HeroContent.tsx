import HeroAction from "./HeroAction"

const HeroContent = () => {
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

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider mb-6 text-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Développeur Full Stack & IA
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        Conception d'applications élégantes performantes modernes et innovantes.
                        Passionné par le design interactif et le développement innovant et polyvalent agile
                    </p>
                </div>

                <HeroAction />
            </section>
        </>
    )
}

export default HeroContent