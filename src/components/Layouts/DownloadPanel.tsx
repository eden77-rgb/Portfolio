import { Download, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { download } from "@/data/download"
import type { Item } from "@/types/download";
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts";
import type { DownloadPanelProps } from "@/types";

const DownloadPanel = ({ open, onClose, triggerRef }: DownloadPanelProps) => {
    const { lang } = useLanguage()
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return

        const handler = (e: MouseEvent) => {
            if (
                panelRef.current && !panelRef.current.contains(e.target as Node) &&
                triggerRef.current && !triggerRef.current.contains(e.target as Node)
            ) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [open, onClose, triggerRef])

    if (!open) return null;

    return (
        <div
            ref={panelRef}
            className={`fixed top-18 right-15 z-9998 w-72 rounded-2xl border backdrop-blur-xl overflow-hidden bg-[rgb(var(--bg-card))] border-[rgb(var(--emerald-mid)/0.2)]`}
        >
            <div className=" px-5 pt-5 pb-3">
                <p className={`text-xs uppercase tracking-widest font-semibold mb-1 text-[rgb(var(--emerald-mid))]`}>
                    {langJSON.NavBar.DownloadPanel.title[lang]}
                </p>
                <p className={`text-xs text-[rgb(var(--text-muted))]`}>
                    {langJSON.NavBar.DownloadPanel.description[lang]}
                </p>
            </div>

            <div className={`mx-4 border-t border-[rgb(var(--border)/0.05)]`} />

            <div className="p-3 space-y-1">
                {download.map(({ key, badge, label, sub, onClick }: Item) => {
                    return (
                        <button
                            key={key}
                            onClick={onClick}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl border transition-all duration-200 text-left group bg-[rgb(var(--emerald-mid)/0.15)] hover:bg-[rgb(var(--emerald-mid)/0.25)] border-[rgb(var(--emerald-mid)/0.3)]`}
                        >
                            <div className={`w-9 h-9 flex items-center justify-center rounded-lg shrink-0 relative overflow-hidden transition-transform duration-200 group-hover:scale-110 bg-[rgb(var(--bg-primary)/0.3)]`}>
                                <FileText className={`w-4 h-4 text-[rgb(var(--emerald-mid))]`} />
                                {badge && (
                                    <span className={`absolute bottom-0.5 right-0.5 text-[8px] font-bold text-white leading-none px-0.5 py-px rounded bg-[rgb(var(--emerald-mid))]`}>
                                        {badge}
                                    </span>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium leading-tight text-[rgb(var(--emerald-mid))]`}>
                                    {label[lang]}
                                </p>
                                <p className={`text-xs mt-0.5 truncate text-[rgb(var(--text-muted))]`}>{sub[lang]}</p>
                            </div>

                            <div className={`shrink-0 transition-all duration-200 opacity-0`}>
                                <Download className={`w-3.5 h-3.5 text-[rgb(var(--emerald-mid))]`} />
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="px-5 pb-4 pt-1">
                <p className={`text-[10px] text-center text-gray-400`}>
                    {langJSON.NavBar.DownloadPanel.footer[lang]}
                </p>
            </div>
        </div>
    )
}

export default DownloadPanel