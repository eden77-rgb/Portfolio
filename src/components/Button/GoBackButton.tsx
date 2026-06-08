import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface GoBackButtonProps {
    content: string,
    variant: "primary" | "secondary"
}

const GoBackButton = ({ content, variant }: GoBackButtonProps) => {
    const navigate = useNavigate();

    return (
        <>
            {variant == "primary" ? (
                <button
                    onClick={() => navigate(-1)}
                    className={`flex items-center gap-2 h-10 px-3 rounded-full backdrop-blur-lg border transition-all group bg-[rgb(var(--bg-card)/0.8)] border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/10`}
                >
                    <ArrowLeft className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    <span className="hidden sm:inline text-[rgb(var(--emerald))]">
                        {content}
                    </span>
                </button>

            ) : (
                
                <div className="flex justify-center py-20 px-12 md:px-20 lg:px-28">
                    <button
                        onClick={() => navigate(-1)}
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-emerald-600 via-teal-600 to-lime-600 text-white rounded-xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl shadow-emerald-900/20 active:scale-95"
                    >
                        <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
                        <span>{content}</span>
                    </button >
                </div >
            )}
        </>
    )
}

export default GoBackButton