import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"
import type { ContactInfoProps } from "@/types"

const ContactContent = ({ items, socials }: ContactInfoProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 max-w-5xl mx-auto">
            <ContactInfo items={items} socials={socials} />
            <ContactForm />
        </div>
    )
}

export default ContactContent