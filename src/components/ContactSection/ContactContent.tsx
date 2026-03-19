import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

const ContactContent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 max-w-5xl mx-auto">
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default ContactContent