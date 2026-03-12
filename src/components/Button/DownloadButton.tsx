import type { DownloadButtonProps } from '@/types';
import { Download } from 'lucide-react';

const DownloadButton = ({ path }: DownloadButtonProps) => {
    return (
        <button
            className="group relative inline-flex items-center gap-3 px-8 py-3 bg-linear-to-r from-emerald-600 via-teal-600 to-lime-600 text-white rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-xl shadow-emerald-900/20 active:scale-95"
            onClick={() => {console.log(path)}}
        >

            <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            <span>Télécharger</span>
        </button>
    )
}

export default DownloadButton