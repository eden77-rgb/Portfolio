import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center py-20 px-12 md:px-20 lg:px-28">
            <button
                onClick={() => navigate(-1)}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-emerald-600 via-teal-600 to-lime-600 text-white rounded-xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl shadow-emerald-900/20 active:scale-95"
            >
                <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />

                <span>Retour à l'accueil</span>
            </button>
        </div>
    )
}

export default GoBackButton