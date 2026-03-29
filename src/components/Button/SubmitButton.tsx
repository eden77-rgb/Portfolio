import type { SubmitButtonProps } from '@/types';

const SubmitButton = ({ action }: SubmitButtonProps) => {
    return (
        <button
            onClick={action}
            className="w-full py-4 rounded-xl font-bold text-sm text-black bg-linear-to-r from-emerald-400 via-teal-500 to-lime-400 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 tracking-wide"
        >
            <span className="text-white font-normal">Envoyer le message</span>
        </button>
    )
}

export default SubmitButton