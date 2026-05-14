import { useEffect, useState } from "react"

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const fullHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / fullHeight) * 100

            setScrollProgress(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="fixed top-0 left-0 right-0 h-1 bg-black/50 z-50">
            <div
                className="h-full bg-linear-to-r from-emerald-500 via-teal-500 to-lime-500 origin-left"
                style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />
        </section>
    )
}

export default ScrollProgress
