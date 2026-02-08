import type { ProjetBySection } from "@/types";

export const projects: ProjetBySection = {
    "Python": [
        {
            id: 1,
            title: "The Legend of Zelda: A Link to the Past",
            description: `Implémentation d'un clone du jeu classique The Legend of Zelda: A Link to the Past développé en Python 
                avec les bibliothèque Pygame, PyTMX et PyScroll. Ce projet m'a permis d'explorer et d'appliquer les concepts du 
                développement de jeux 2D, notamment la gestion d'entités, les systèmes d'animation, l'architecture modulaire et la 
                création d'une carte avec collision`,
            github: "https://github.com/eden77-rgb/Zelda",
            stacks: [
                "Python",
                "Pygame",
                "PyTMX",
                "PyScroll"
            ],
            thumbnail: { path: "@/assets/zelda/thumbnail.png", alt: "Image miniature du menu" },
            images: [
                { path: "@/assets/zelda/1.png", alt: "Image du jeu" },
                { path: "@/assets/zelda/2.png", alt: "Image d'une animations" },
                { path: "@/assets/zelda/3.png", alt: "Image des objets" }
            ],
            video: { path: "@/assets/zelda/video.mp4", alt: "Vidéo de démonstration" }
        },
    ],
}