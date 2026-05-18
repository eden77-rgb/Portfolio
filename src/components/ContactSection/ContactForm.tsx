import { useState } from "react"
import { SubmitButton } from "@/components/Button"
import type { ContactMessage } from "../../../worker/types"
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts"

const ContactForm = () => {
    const { lang } = useLanguage()

    const [form, setForm] = useState<ContactMessage>({ name: "", email: "", message: "" })

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

        if (status === "error") {
            setStatus("idle")
        }
    }

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) {
            setStatus("error")
            setErrorMessage(langJSON.MainPage.ContactSection.missingErrorMessage[lang])

            return
        }

        setStatus("loading")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || langJSON.MainPage.ContactSection.duringErrorMessage[lang])
            }


            setStatus("success")
            setForm({ name: "", email: "", message: "" })

            setTimeout(() => setStatus("idle"), 5000)
        }

        catch (error: unknown) {
            setStatus("error")

            if (error instanceof Error) {
                setErrorMessage(error.message);

            } else {
                setErrorMessage(langJSON.MainPage.ContactSection.unableErrorMessage[lang]);
            }
        }

        // console.log("Form submitted:", form)
    }


    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 h-full">
            <h3 className="text-xl font-bold text-white">
                {langJSON.MainPage.ContactSection.contactFormTitle[lang]}
            </h3>

            <div className="flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">
                        {langJSON.MainPage.ContactSection.contactFormNameLabel[lang]}
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder={langJSON.MainPage.ContactSection.contactFormNamePlaceholder[lang]}
                        value={form.name}
                        onChange={handleChange}
                        disabled={status == "loading"}
                        className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">
                        {langJSON.MainPage.ContactSection.contactFormEmailLabel[lang]}
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder={langJSON.MainPage.ContactSection.contactFormEmailPlaceholder[lang]}
                        value={form.email}
                        onChange={handleChange}
                        disabled={status == "loading"}
                        className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">
                        {langJSON.MainPage.ContactSection.contactFormMessageLabel[lang]}
                    </label>
                    <textarea
                        name="message"
                        placeholder={langJSON.MainPage.ContactSection.contactFormMessagePlaceholder[lang]}
                        value={form.message}
                        onChange={handleChange}
                        disabled={status == "loading"}
                        rows={6}
                        className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all w-full resize-none leading-relaxed"
                    />
                </div>

                {status == "success" && (
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm">
                        {langJSON.MainPage.ContactSection.successMessage[lang]}
                    </div>
                )}

                {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                        {errorMessage}
                    </div>
                )}
            </div>

            <SubmitButton
                action={handleSubmit}
                isLoading={status === "loading"}
                disabled={status === "loading" || status === "success"}
            />
        </div>
    )
}

export default ContactForm