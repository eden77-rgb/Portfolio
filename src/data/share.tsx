import type { ShareItem } from "@/types/share";
import { Link2, Linkedin, X } from "lucide-react";

const LINKEDIN_POST = `🚀 Ravi de partager le portfolio de @Eden Vandewatyne !

Un univers créatif qui reflète parfaitement son travail en tant que développeur.

👉 Découvrir son portfolio : https://eden-vandewatyne.com/

N’hésite pas à aller y jeter un œil et à lui laisser un retour 👏

#portfolio #AI #machinelearning #developpement #innovation`


const X_POST = `🔥 Petit partage du jour

Je suis tombé sur le portfolio d’Eden Vandewatyne et ça vaut clairement le détour.

On découvre un univers propre, moderne et créatif qui met bien en avant son travail de développeur.

👉 https://eden-vandewatyne.com/

#dev #portfolio #tech #AI`


export const share: ShareItem[] = [
    {
        key: "Link",
        icon: Link2,
        label: {
            FR: "Copier le lien",
            EN: "Copy the link"
        },
        sub: {
            FR: "https://eden-vandewatyne.com/",
            EN: "https://eden-vandewatyne.com/"
        },
        onClick: async () => { await navigator.clipboard.writeText("https://eden-vandewatyne.com/") },
    },
    {
        key: "Linkedin",
        icon: Linkedin,
        label: {
            FR: "Partager sur LinkedIn",
            EN: "Share on LinkedIn"
        },
        sub: {
            FR: "Créer un post avec description",
            EN: "Create a post with description"
        },
        onClick: () => {
            const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent("https://eden-vandewatyne.com/")}&text=${encodeURIComponent(LINKEDIN_POST)}`
            window.open(url, "_blank", "width=600,height=600")
        },
    },
    {
        key: "X",
        icon: X,
        label: {
            FR: "Partager sur X",
            EN: "Share on X"
        },
        sub: {
            FR: "Nouveau tweet pré-rempli",
            EN: "New pre-filled tweet"
        },
        onClick: () => {
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(X_POST)}`;
            window.open(url, '_blank', 'width=600,height=400');
        },
    },
];