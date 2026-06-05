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
        onClick: () => {
            fetch(`/api/download?filePath=${encodeURIComponent(CV_FR_PATH)}`)
                .then((response) => response.blob())
                .then((blob) => {
                    const url = window.URL.createObjectURL(blob)

                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute(
                        'download',
                        `${FILENAME_FR}`,
                    )

                    document.body.appendChild(link)

                    link.click()
                    link.parentNode?.removeChild(link)
                })
        },
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
        onClick: () => {
            fetch(`/api/download?filePath=${encodeURIComponent(CV_EN_PATH)}`)
                .then((response) => response.blob())
                .then((blob) => {
                    const url = window.URL.createObjectURL(blob)

                    const link = document.createElement('a')
                    link.href = url
                    link.setAttribute(
                        'download',
                        `${FILENAME_EN}`,
                    )

                    document.body.appendChild(link)

                    link.click()
                    link.parentNode?.removeChild(link)
                })
        },
    }
];