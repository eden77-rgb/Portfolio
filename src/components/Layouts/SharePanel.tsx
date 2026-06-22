import { useEffect, useRef, useState } from 'react';
import { Check, ImageDown } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { share } from "@/data/share"
import type { ShareItem } from '@/types/share';
import langJSON from "@/data/lang.json"
import { useLanguage } from "@/contexts";

interface SharePanelProps {
    open: boolean
    onClose: () => void
    triggerRef: React.RefObject<HTMLButtonElement | null>
}

export function SharePanel({ open, onClose, triggerRef }: SharePanelProps) {
    const { lang } = useLanguage()
    const panelRef = useRef<HTMLDivElement>(null);
    const qrRef = useRef<HTMLCanvasElement>(null);
    const [qrHovered, setQrHovered] = useState(false);
    const [copiedKey, setCopiedKey] = useState<string | null>(null)
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-card')

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

    const handleClick = async (key: string, onClick: () => void | Promise<void>) => {
        await onClick();
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 5000);
    };

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    const handleQRDownload = () => {
        const canvas = qrRef.current
        if (canvas == null) return

        const padding = 24
        const size = canvas.width
        const out = document.createElement('canvas')

        out.width = size + padding * 2
        out.height = size + padding * 2

        const ctx = out.getContext('2d');
        if (ctx == null) return

        ctx.fillStyle = `rgb(${bgColor})`
        ctx.fillRect(0, 0, out.width, out.height)
        ctx.drawImage(canvas, padding, padding)

        const link = document.createElement('a')
        link.download = "eden-vandewatyne-portfolio-qr.png"
        link.href = out.toDataURL('image/png')
        link.click()
    }

    if (!open) return null;

    return (
        <div
            ref={panelRef}
            className={`fixed top-18 right-6 z-9998 w-72 rounded-2xl border backdrop-blur-xl overflow-hidden bg-[rgb(var(--bg-card))] border-[rgb(var(--lime)/0.2)]`}
        >
            <div className="px-5 pt-5 pb-3">
                <p className={`text-xs uppercase tracking-widest font-semibold mb-1 text-[rgb(var(--lime))]`}>
                    {langJSON.NavBar.SharePanel.title[lang]}
                </p>
                <p className={`text-xs text-[rgb(var(--text-muted))]`}>
                    {langJSON.NavBar.SharePanel.description[lang]}
                </p>
            </div>

            <div className={`mx-4 border-t border-[rgb(var(--border)/0.05)]`} />

            <div className="px-5 py-4 flex flex-col items-center gap-3">
                <button
                    onClick={handleQRDownload}
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                    aria-label="Télécharger le QR code"
                    title="Cliquer pour télécharger en PNG"
                    style={{ lineHeight: 0 }}
                >
                    <div className={`p-3 border transition-colors duration-200 rounded-xl bg-[rgb(var(--bg-card))] border-[rgb(var(--lime)/0.2)] group-hover:[rgb(var(--lime)/0.5)]`}>
                        <QRCodeCanvas
                            ref={qrRef}
                            value={"https://eden-vandewatyne.com/"}
                            size={148}
                            bgColor={`rgb(${bgColor})`}
                            fgColor='#84cc16'
                            level="M"
                        />
                    </div>

                    <div
                        onMouseEnter={() => setQrHovered(true)}
                        onMouseLeave={() => setQrHovered(false)}
                        className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-1.5 bg-[rgb(var(--bg-card)/0.75)] transition-all duration-300 ease-out 
                                    ${qrHovered ? "opacity-100  backdrop-blur-2px" : "opacity-0 backdrop-blur-0"}
                        `}
                    >
                        <ImageDown className={`w-6 h-6 text-[rgb(var(--lime))]`} />
                        <span className={`text-[10px] font-semibold tracking-wide text-[rgb(var(--lime))]`}>
                            {langJSON.NavBar.SharePanel.export[lang]}
                        </span>
                    </div>
                </button>

                <p className={`text-[10px] text-center text-[rgb(var(--text-muted))]`}>
                    {langJSON.NavBar.SharePanel.scan[lang]}
                </p>
            </div >

            <div className={`mx-4 border-t border-[rgb(var(--border)/0.05)]`} />

            <div className="p-3 space-y-1">
                {share.map(({ key, icon: Icon, label, sub, onClick }: ShareItem) => {
                    const isCopied = copiedKey == key

                    return (
                        <button
                            key={key}
                            onClick={() => handleClick(key, onClick)}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl border transition-all duration-200 text-left group bg-[rgb(var(--lime)/0.15)] hover:bg-[rgb(var(--lime)/0.25)] border-[rgb(var(--lime)/0.3)]`}
                        >
                            <div className={`w-9 h-9 flex items-center justify-center rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 bg-[rgb(var(--bg-card)/0.3)]`}>
                                {isCopied
                                    ? <Check className={`w-4 h-4 text-[rgb(var(--lime))]`} />
                                    : <Icon className={`w-4 h-4 text-[rgb(var(--lime))]`} />
                                }
                            </div>

                            <div className="min-w-0">
                                <p className={`text-sm font-medium leading-tight`}>
                                    {label[lang]}
                                </p>
                                <p className={`text-xs mt-0.5 truncate text-[rgb(var(--text-muted))]`}>{sub[lang]}</p>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="px-5 pb-4 pt-1">
                <p className={`text-[10px] text-center text-[rgb(var(--text-muted))]`}>
                    {langJSON.NavBar.SharePanel.footer[lang]}
                </p>
            </div>
        </div >
    );
}
