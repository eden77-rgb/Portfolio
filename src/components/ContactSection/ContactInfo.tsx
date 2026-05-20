import type { ContactInfoProps, Item, Social } from "@/types"
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts"

const ContactInfo = ({ items, socials }: ContactInfoProps) => {
    const { lang } = useLanguage()

    return (
        <div className="bg-[rgb(var(--bg-card))] border border-[rgb(var(--border)/0.12)] rounded-2xl p-8 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-[rgb(var(--text-primary))]">
                {langJSON.MainPage.ContactSection.contactInfoTitle[lang]}
            </h3>

            <div className="flex flex-col gap-5">
                {items.map(({ icon, label, value, href }: Item) => (
                    <div key={label} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                            {icon}
                        </div>
                        <div>
                            <p className="text-xs text-emerald-700 uppercase tracking-widest font-semibold">
                                {label}
                            </p>
                            {href ? (
                                <a href={href} target="_blank" className="text-sm text-[rgb(var(--text-secondary))] hover:text-emerald-400 transition-colors mt-0.5 block">
                                    {value}
                                </a>
                            ) : (
                                <p className="text-sm text-[rgb(var(--text-secondary))] mt-0.5">{value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-[rgb(var(--border)/0.12)]" />

            <div>
                <p className="text-sm text-[rgb(var(--text-muted))] mb-4">
                    {langJSON.MainPage.ContactSection.contactInfoDescription[lang]}
                </p>
                <div className="flex gap-3">
                    {socials.map(({ icon, label, href }: Social) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 hover:bg-emerald-500 hover:text-white hover:-translate-y-1 transition-all duration-200"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactInfo