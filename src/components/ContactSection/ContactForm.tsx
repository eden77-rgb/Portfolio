import { useState } from "react"

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        console.log("Form submitted:", form)
    }

    return (
        <div>
            <h3>Envoyer un message</h3>

            <div>
                <div>
                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="votre.email@exemple.com"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                    />
                </div>
            </div>

            <button
                onClick={handleSubmit}
            >
                Envoyer le message
            </button>
        </div>
    )
}

export default ContactForm