import type { DownloadButtonProps } from '@/types';
import downloadFile from '@/utils/downloadFile';
import { Download } from 'lucide-react';

const DownloadButton = ({ path, filename }: DownloadButtonProps) => {
    return (
        <button
            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-400/5 border border-emerald-400/40 text-emerald-400 rounded-lg hover:bg-emerald-400/10 hover:border-emerald-400/70 transition-all duration-200 text-sm font-medium active:scale-95 whitespace-nowrap"
            onClick={() => { downloadFile(path, filename) }}
        >

            <Download className="w-5 h-5 " />
            <span>Télécharger</span>
        </button>
    )
}

export default DownloadButton