import downloadFile from "@/utils/downloadFile";
import type { Item } from "@/types/download";

const FILENAME_FR = "cv_eden_vandewatyne.pdf"
const FILENAME_EN = "cv_eden_vandewatyne-en.pdf"

const CV_FR_PATH = `/cv/${FILENAME_FR}`
const CV_EN_PATH = `/cv/${FILENAME_EN}`

export const download: Item[] = [
    {
        key: 'fr',
        badge: 'FR',
        label: {
            FR: 'CV — Version française',
            EN: "CV — French version"
        },
        sub: {
            FR: 'PDF · Mise à jour Juin 2026',
            EN: "PDF · Updated June 2026"
        },
        filePath: CV_FR_PATH,
        onClick: () => downloadFile(CV_FR_PATH, FILENAME_FR)
    },
    {
        key: 'en',
        badge: 'EN',
        label: {
            FR: 'CV — Version anglaise',
            EN: "CV — English version"
        },
        sub: {
            FR: 'PDF · Mise à jour Juin 2026',
            EN: "PDF · Updated June 2026"
        },
        filePath: CV_EN_PATH,
        onClick: () => downloadFile(CV_EN_PATH, FILENAME_EN)
    }
];