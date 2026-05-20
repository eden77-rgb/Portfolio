import type { ContactInfoProps } from "@/types"
import ContactContent from "./ContactContent"
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts"

const ContactSection = ({ items, socials }: ContactInfoProps) => {
    const { lang } = useLanguage()

    return (
        <section id="contact" className="py-20 px-4 min-h-screen">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 bg-clip-text text-transparent leading-normal">
                    {langJSON.MainPage.ContactSection.sectionTitle[lang]}
                </h2>

                <p className="text-[rgb(var(--text-muted))] text-lg">
                    {langJSON.MainPage.ContactSection.sectionDescription[lang]}
                </p>
            </div>

            <ContactContent items={items} socials={socials} />
        </section>
    )
}

export default ContactSection