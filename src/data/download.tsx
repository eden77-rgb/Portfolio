import type { Item } from "@/types/download";

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
        onClick: () => { },
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
        onClick: () => { },
    }
];