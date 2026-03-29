import { useState } from "react"
import { SubmitButton } from "../Button"

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        console.log("Form submitted:", form)
    }

    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 h-full">
            <h3 className="text-xl font-bold text-white">Envoyer un message</h3>

            <div className="flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">Nom</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={handleChange}
                        className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="votre.email@exemple.com"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">Message</label>
                    <textarea
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full resize-none leading-relaxed"
                    />
                </div>
            </div>

            <SubmitButton action={handleSubmit} />
        </div>
    )
}

export default ContactForm