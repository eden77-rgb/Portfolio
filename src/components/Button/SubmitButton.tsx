import type { SubmitButtonProps } from '@/types';

const SubmitButton = ({ action, isLoading, disabled }: SubmitButtonProps) => {
    return (
        <button
            onClick={action}
            disabled={disabled || isLoading}
            className={`group relative w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400
                ${isLoading || disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0"
                }
            `}
        >
            <div className="flex items-center justify-center gap-2">
                {isLoading && (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}

                <span className="text-white font-medium">
                    {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                </span>
            </div>

            {!disabled && !isLoading && (
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-10 transition-opacity" />
            )}
        </button>
    )
}

export default SubmitButton