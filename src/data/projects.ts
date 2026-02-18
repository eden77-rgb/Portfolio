import type { ProjetBySection } from "@/types";

export const projects: ProjetBySection = {
    "Python": [
        { // Zelda
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
            thumbnail: { path: "/assets/zelda/thumbnail.png", alt: "Image miniature du menu" },
            images: [
                { path: "/assets/zelda/1.png", alt: "Image du jeu" },
                { path: "/assets/zelda/2.png", alt: "Image d'une animations" },
                { path: "/assets/zelda/3.png", alt: "Image des objets" }
            ],
            video: { path: "/assets/zelda/video.mp4", alt: "Vidéo de démonstration" }
        },
        { // Celeste
            id: 2,
            title: "Celeste",
            description: `Implémentation en groupe d'un clone minimaliste du jeu de plateforme indépendant Celeste développé 
                en Python avec la bibliothèque Pygame. Ce projet m'a permis d'explorer et d'appliquer les concepts du 
                développement de jeux 2D orientés plateforme, notamment la gestion précise des collisions, les mécaniques de 
                mouvement complexes (saut, dash), les systèmes d'animation fluides, l'architecture modulaire et la conception de 
                niveaux avec obstacles et checkpoints.`,
            github: "https://github.com/eden77-rgb/Celeste",
            stacks: [
                "Python",
                "Pygame"
            ],
            thumbnail: { path: "/assets/celeste/thumbnail.png", alt: "Image miniature du menu" },
            images: [
                { path: "/assets/celeste/1.png", alt: "Image du jeu" },
                { path: "/assets/celeste/2.png", alt: "Image du jeu" },
                { path: "/assets/celeste/3.png", alt: "Image de la fin" }
            ],
            video: { path: "/assets/celeste/video.mp4", alt: "Vidéo de démonstration" }
        },
        { // G.E.R.A.R.D
            id: 3,
            title: "G.E.R.A.R.D",
            description: `Développement d'une application interactive combinant un front-end en C# et un back-end en Python. 
                Le projet est actuellement orienté vers la mise en place de la communication front-back via API, ainsi que 
                l'intégration progressive de modèles d'intelligence artificielle (Ollama) pour le traitement et la génération 
                de contenu. Ce travail me permet d'explorer les problématiques liées à l'interaction utilisateur, à 
                l'architecture modulaire, à la gestion des flux de données et à la conception d'un système évolutif reliant une 
                interface utilisateur riche à des services d'IA`,
            github: "https://github.com/eden77-rgb/Innovation-Project",
            stacks: [
                "Python",
                "FastAPI",
                "Ollama"
            ],
            thumbnail: { path: "/assets/gerard/thumbnail.png", alt: "Aucune image disponible" },
            images: []
        }
    ],
    "Technologie web": [
        { // PageWeaver
            id: 4,
            title: "PageWeaver",
            description: `PageWeaver est une application serverless développée avec Cloudflare Workers permettant de générer 
                des pages HTML personnalisées à partir d'une URL. Elle offre un système de templates, de contenus dynamiques 
                (par IA), et un cache intelligent via KV Namespace.`,
            github: "https://github.com/eden77-rgb/PageWeaver",
            live: "https://pageweaver.eden77-rgb.workers.dev/",
            stacks: [
                "HTML",
                "CSS",
                "JavaScript",
                "Cloudflare",
                "KV Namespace"
            ],
            thumbnail: { path: "/assets/pageweaver/thumbnail.png", alt: "Image miniature du site" },
            images: [
                { path: "/assets/pageweaver/1.png", alt: "Image du site" },
                { path: "/assets/pageweaver/2.png", alt: "Image du site" },
                { path: "/assets/pageweaver/3.png", alt: "Image du site" }
            ]
        },
        { // Filmbook
            id: 5,
            title: "FilmBook",
            description: `FilmBook est une application serverless développée avec React et hébergée sur Cloudflare Workers, 
                permettant d'explorer et de rechercher des films et séries via l'API TMDB. L'application propose une interface 
                interactive pour consulter les détails des films, les studios de production, les affiches et les têtes d'affiches`,
            github: "https://github.com/eden77-rgb/FilmBook",
            live: "https://filmbook.eden77-rgb.workers.dev/",
            stacks: [
                "React",
                "CSS",
                "React Router",
                "Cloudflare"
            ],
            thumbnail: { path: "/assets/filmbook/thumbnail.png", alt: "Image miniature du site" },
            images: [
                { path: "/assets/filmbook/1.png", alt: "Image de la page d'un film" },
                { path: "/assets/filmbook/2.png", alt: "Image de la page 404" }
            ]
        },
        { // SiteLink
            id: 6,
            title: "Sitelink",
            description: `Sitelink (SachaSLM) est une application serverless développée avec Cloudflare Workers, conçue comme 
                une alternative moderne à Linktree pour les streamers. Elle permet de créer et partager rapidement une page de 
                liens personnalisée, regroupant réseaux sociaux, plateformes de streaming et contenus divers. L'application 
                propose un design minimaliste, une gestion dynamique des liens et un chargement ultra-rapide`,
            github: "https://github.com/eden77-rgb/SachaSLM",
            live: "https://sachaslm.eden77-rgb.workers.dev/",
            stacks: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            thumbnail: { path: "/assets/sitelink/thumbnail.png", alt: "Image miniature du site" },
            images: [
                { path: "/assets/sitelink/1.png", alt: "Image du site" },
                { path: "/assets/sitelink/2.png", alt: "Image du site" },
                { path: "/assets/sitelink/3.png", alt: "Image du site" }
            ]
        },
        { // Kanban
            id: 7,
            title: "Kanban",
            description: `App-Kanban est une application fullstack développée avec React pour le front-end et hébergée sur 
                Cloudflare Pages, avec un back-end Node.js sur Railway. Elle permet de créer et gérer des tableaux Kanban 
                personnalisés pour organiser des tâches, projets ou idées de manière intuitive. L'application propose une 
                interface réactive, fluide et une synchronisation en temps réel pour une gestion de projet simple et efficace.`,
            github: "https://github.com/eden77-rgb/app-kanban",
            live: "https://9d59f1da.kanban-53y.pages.dev",
            stacks: [
                "React",
                "Node.js",
                "Tailwind CSS",
                "TanStack Router",
                "Cloudflare",
                "Railway"
            ],
            thumbnail: { path: "/assets/kanban/thumbnail.png", alt: "Image miniature du site" },
            images: [
                { path: "/assets/kanban/1.png", alt: "Image du site" },
                { path: "/assets/kanban/2.png", alt: "Image du site" },
                { path: "/assets/kanban/3.png", alt: "Image du site" }
            ]
        },
    ],
    "Java": [
        { // Mod Minecraft
            id: 8,
            title: "Mod Minecraft",
            description: `Ce mod développé pour Minecraft 1.19.2, ajoute une nouvelle ressource : le Ruby. 
                Il introduit un minerai généré naturellement, ainsi que des outils, armes, armures et blocs craftables. 
                Conçu pour s'intégrer à la progression vanilla, le mod propose un équilibrage soigné et une expérience fluide 
                en solo comme en multijoueur.`,
            github: "https://github.com/eden77-rgb/MinecraftMod",
            stacks: [
                "Java",
                "Minecraft Forge"
            ],
            thumbnail: { path: "/assets/minecraft/thumbnail.png" },
            images: [
                { path: "/assets/minecraft/1.png", alt: "Image des détails du mod" },
                { path: "/assets/minecraft/2.png", alt: "Image en jeu du mod" },
                { path: "/assets/minecraft/3.png", alt: "Image en jeu du mod" }
            ]
        },
        { // Postmanman
            id: 9,
            title: "PostmanMan",
            description: `PostmanMan est une application desktop développée en Java avec JavaFX, qui reproduit les 
                fonctionnalités principales de Postman. Elle permet d'envoyer des requêtes HTTP (GET, POST, PUT, PATCH, DELETE), 
                de gérer les headers et le body, et de visualiser les réponses de manière claire et structurée. Le projet 
                met en avant la gestion des appels API, le traitement des données JSON et la conception d'une interface 
                utilisateur interactive et intuitive.`,
            github: "https://github.com/eden77-rgb/Postmanman",
            stacks: [
                "Java",
                "JavaFX"
            ],
            thumbnail: { path: "/assets/postmanman/thumbnail.png" },
            images: [
                { path: "/assets/postmanman/1.png", alt: "Image du logiciel en action" },
                { path: "/assets/postmanman/2.png", alt: "Image du logiciel en action" },
                { path: "/assets/postmanman/3.png", alt: "Image du logiciel en action" }
            ]
        }
    ],
    "Autre" : [
        { // Flutter
            id: 10,
            title: "Baker'eat",
            description: `Baker'eat est une application mobile développée en Flutter, dédiée à la découverte et à la 
                commande de produits de boulangerie et pâtisserie. Elle permet aux utilisateurs de parcourir les catalogues, 
                rechercher des produits, passer commande et suivre leurs achats en temps réel. L'application met en avant 
                la gestion d'API REST, l'authentification des utilisateurs, la gestion d'état, ainsi que la conception d'une 
                interface fluide, moderne et responsive adaptée aux environnements Android et iOS.`,
            github: "https://github.com/eden77-rgb/Baker-eat",
            stacks: [
                "Flutter",
                "Node.js",
                "MySQL",
                "Railway"
            ],
            thumbnail: { path: "/assets/baker-eat/thumbnail.png", alt: "Image d'accueil de l'application" },
            images: [
                { path: "/assets/baker-eat/1.png", alt: "Image de l'application" },
                { path: "/assets/baker-eat/2.png", alt: "Image de l'application" },
                { path: "/assets/baker-eat/3.png", alt: "Image de l'application" }
            ]
        },
        { // Masamune 
            id: 9,
            title: "Masamune Fighting",
            description: `Masamune Fighting est un jeu de combat 1v1 en local, inspiré de l'univers des jeux type Smash, 
                jouable sur le même PC en écran partagé. Le jeu propose des affrontements dynamiques avec des personnages 
                aux compétences uniques, un système de dégâts progressifs et des mécaniques de knockback stratégiques. Le 
                projet met en avant la gestion des inputs multiples (clavier/manettes), la détection de collisions, la 
                physique de combat, ainsi que la conception d'un gameplay fluide et compétitif centré sur l'expérience 
                multijoueur locale.`,
            github: "https://github.com/eden77-rgb/DigitalGamingFinal",
            stacks: [
                "C#",
                "Unity"
            ],
            thumbnail: { path: "/assets/masamune/thumbnail.png", alt: "Image d'accueil de l'application" },
            images: [
                { path: "/assets/masamune/1.png", alt: "Image de l'application" },
                { path: "/assets/masamune/2.png", alt: "Image de l'application" },
                { path: "/assets/masamune/3.png", alt: "Image de l'application" }
            ]
        }
    ]
}
