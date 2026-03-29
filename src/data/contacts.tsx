import type { Item, Social } from "@/types";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const contactItem: Item[] = [
    {
        icon: <Mail size={20} />,
        label: "Email",
        value: "eden.vandewatyne11@gmail.com",
        href: "mailto:eden.vandewatyne11@gmail.com",
    },
    {
        icon: <Phone size={20} />,
        label: "Téléphone",
        value: "+33 7 77 78 08 93",
        href: "tel:+33777780893",
    },
    {
        icon: <MapPin size={20} />,
        label: "Localisation",
        value: "Ile de France, FR",
        href: "https://maps.google.com/?q=Ile+de+France,FR"
    }
]

export const contactSocial: Social[] = [
    {
        icon: <Github size={20} />,
        label: "Github",
        href: "https://github.com/eden77-rgb/"
    },
    {
        icon: <Linkedin size={20} />,
        label: "Linkedin",
        href: "https://www.linkedin.com/in/eden-vandewatyne/"
    }
]