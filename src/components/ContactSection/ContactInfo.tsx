import type { ContactInfoProps, Item, Social } from "@/types"

const ContactInfo = ({ items, socials }: ContactInfoProps) => {
    return (
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-8 h-full">
            <h3 className="text-xl font-bold text-white">Nous contacter</h3>

            <div className="flex flex-col gap-5">
                {items.map(({ icon, label, value, href }: Item) => (
                    <div key={label} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0">
                            {icon}
                        </div>
                        <div>
                            <p className="text-xs text-emerald-700 uppercase tracking-widest font-semibold">
                                {label}
                            </p>
                            {href ? (
                                <a href={href} className="text-sm text-zinc-300 hover:text-emerald-400 transition-colors mt-0.5 block">
                                    {value}
                                </a>
                            ) : (
                                <p className="text-sm text-zinc-300 mt-0.5">{value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-zinc-800" />

            <div>
                <p className="text-sm text-zinc-500 mb-4">Me suivre sur</p>
                <div className="flex gap-3">
                    {socials.map(({ icon, label, href }: Social) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-black hover:-translate-y-1 transition-all duration-200"
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