import type { ContactInfoProps } from "@/types"
import ContactContent from "./ContactContent"

const ContactSection = ({ items, socials }: ContactInfoProps) => {
    return (
        <section id="contact" className="py-20 px-4 bg-black min-h-screen">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent leading-normal">
                    Travaillons ensemble
                </h2>

                <p className="text-gray-400 text-lg">
                    Un projet en tête ? Créons quelque chose d'incroyable ensemble.
                </p>
            </div>

            <ContactContent items={items} socials={socials} />
        </section>
    )
}

export default ContactSection