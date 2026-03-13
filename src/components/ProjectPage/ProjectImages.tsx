import type { ProjectImagesProps } from "@/types"
import { useRef, type KeyboardEvent } from "react"

const ProjectImages = ({ images }: ProjectImagesProps) => {
    const sliderRef = useRef<HTMLDivElement>(null)

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.repeat) {
            return
        }

        if (!sliderRef.current) {
            return
        }

        const container = sliderRef.current
        const slideWidth = container.clientWidth

        if (event.key == "ArrowRight") {
            container.scrollBy({ left: slideWidth, behavior: "smooth" })
        }

        if (event.key == "ArrowLeft") {
            container.scrollBy({ left: -slideWidth, behavior: "smooth" })
        }
    }

    return (
        <div className="px-12 md:px-20 lg:px-28 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-lime-400 mb-6">
                Galerie d'images
            </h2>

            {/* TODO: MaJ pour déplacer avec la souris */}
            <div
                ref={sliderRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide outline-none focus:outline-none"
            >
                {images.map((image) => (
                    <div className="min-w-full snap-center px-2">
                        <img
                            src={image.path}
                            alt={image.alt ? image.alt : ""}
                            className="w-full h-auto max-h-125 object-contain rounded-xl shadow-lg border border-lime-500/20"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectImages