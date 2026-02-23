import type { ProjetBySection } from "@/types";

export const projects: ProjetBySection = {
    "Python": [
        { // Zelda
            id: 1,
            title: "The Legend of Zelda: A Link to the Past",
            accroche: "Un clone de The Legend of Zelda: A Link to the Past développé en Python.",
            description: `Implémentation d'un clone du jeu classique The Legend of Zelda: A Link to the Past développé en Python 
                avec les bibliothèque Pygame, PyTMX et PyScroll. Ce projet m'a permis d'explorer et d'appliquer les concepts du 
                développement de jeux 2D, notamment la gestion d'entités, les systèmes d'animation, l'architecture modulaire et la 
                création d'une carte avec collision`,
            date: 2025,
            state: "Amélioration",
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
            video: { path: "/assets/zelda/video.mp4", alt: "Vidéo de démonstration" },
            features: [
                { content: "Gestion d'entités jouables et PNJ." },
                { content: "Systèmes d'animations 2D fluides." },
                { content: "Carte avec collisions et obstacles." },
                { content: "Architecture modulaire du moteur de jeu." },
                { content: "Gestion des objets et inventaire." },
                { content: "Interaction et scripts d'événements dans le jeu." }
            ],
            defi: [
                { content: "Implémenter la détection de collisions complexe sur une carte tilemap." },
                { content: "Synchroniser animations et déplacements en temps réel." },
                { content: "Structurer un moteur modulaire permettant ajout de fonctionnalités facilement." }
            ]
        },
        { // Celeste
            id: 2,
            title: "Celeste",
            accroche: "Clone minimaliste de Celeste développé avec Pygame.",
            description: `Implémentation en groupe d'un clone minimaliste du jeu de plateforme indépendant Celeste développé 
                en Python avec la bibliothèque Pygame. Ce projet m'a permis d'explorer et d'appliquer les concepts du 
                développement de jeux 2D orientés plateforme, notamment la gestion précise des collisions, les mécaniques de 
                mouvement complexes (saut, dash), les systèmes d'animation fluides, l'architecture modulaire et la conception de 
                niveaux avec obstacles et checkpoints.`,
            date: 2024,
            state: "Fini",
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
            video: { path: "/assets/celeste/video.mp4", alt: "Vidéo de démonstration" },
            features: [
                { content: "Mécaniques de plateforme : saut, dash." },
                { content: "Gestion précise des collisions et des rebonds." },
                { content: "Systèmes d'animations pour personnages." },
                { content: "Conception de niveaux avec checkpoints et obstacles." },
                { content: "Gestion de l'état du joueur et des interactions avec le décor." },
                { content: "Gameplay solo exigeant et réactif, fidèle à l'expérience originale." }
            ],
            defi: [
                { content: "Implémenter des mécaniques complexes (dash + collisions) de manière précise." },
                { content: "Maintenir un gameplay fluide malgré les calculs physiques fréquents." },
                { content: "Concevoir des niveaux équilibrés pour progresser tout en restant challengeant." }
            ]
        },
        { // G.E.R.A.R.D
            id: 3,
            title: "G.E.R.A.R.D",
            accroche: "Architecture front-end C# / back-end Python avec communication API REST pour intérroger un IA.",
            description: `Développement d'une application interactive combinant un front-end en C# et un back-end en Python. 
                Le projet est actuellement orienté vers la mise en place de la communication front-back via API, ainsi que 
                l'intégration progressive de modèles d'intelligence artificielle (Ollama) pour le traitement et la génération 
                de contenu. Ce travail me permet d'explorer les problématiques liées à l'interaction utilisateur, à 
                l'architecture modulaire, à la gestion des flux de données et à la conception d'un système évolutif reliant une 
                interface utilisateur riche à des services d'IA`,
            date: 2026,
            state: "Bientot",
            github: "https://github.com/eden77-rgb/Innovation-Project",
            stacks: [
                "Python",
                "FastAPI",
                "Ollama"
            ],
            thumbnail: { path: "/assets/gerard/thumbnail.png", alt: "Aucune image disponible" },
            images: [],
            features: [
                { content: "Communication front-end / back-end via API REST." },
                { content: "Intégration progressive de modèles d'IA pour génération et traitement de contenu." },
                { content: "Interface utilisateur interactive et responsive." },
                { content: "Architecture modulaire pour faciliter l'évolution future." },
                { content: "Gestion des flux de données entre interface et services IA." },
                { content: "Système évolutif permettant ajout de nouvelles fonctionnalités IA." }
            ],
            defi: [
                { content: "Définir et structurer correctement l'API pour communication front-back." },
                { content: "Assurer compatibilité et intégration fluide des modèles IA dans le workflow." },
                { content: "Concevoir une architecture évolutive qui supporte la montée en complexité du projet." }
            ]
        }
    ],
    "Technologie web": [
        { // PageWeaver
            id: 4,
            title: "PageWeaver",
            accroche: "Génération de pages personnalisées à partir d'URL avec système de templates.",
            description: `PageWeaver est une application serverless développée avec Cloudflare Workers permettant de générer 
                des pages HTML personnalisées à partir d'une URL. Elle offre un système de templates, de contenus dynamiques 
                (par IA), et un cache intelligent via KV Namespace.`,
            date: 2025,
            state: "Fini",
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
            ],
            features: [
                { content: "Génération dynamique de pages HTML personnalisées à partir d'une URL." },
                { content: "Système de templates modulables pour mise en page facile." },
                { content: "Contenu dynamique généré par IA." },
                { content: "Cache intelligent et persistant via KV Namespace." },
                { content: "Architecture serverless pour scalabilité et déploiement edge." },
                { content: "Temps de chargement optimisé pour performance maximale." }
            ],
            defi: [
                { content: "Gestion efficace du cache et invalidation des pages dynamiques." },
                { content: "Intégration du contenu IA dans un environnement serverless." },
                { content: "Optimisation des performances et latence pour rendu côté edge." }
            ]
        },
        { // Filmbook
            id: 5,
            title: "FilmBook",
            accroche: "Architecture front-end orientée consommation d'API et rendu conditionnel dynamique.",
            description: `FilmBook est une application serverless développée avec React et hébergée sur Cloudflare Workers, 
                permettant d'explorer et de rechercher des films et séries via l'API TMDB. L'application propose une interface 
                interactive pour consulter les détails des films, les studios de production, les affiches et les têtes d'affiches`,
            github: "https://github.com/eden77-rgb/FilmBook",
            date: 2025,
            state: "Fini",
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
            ],
            features: [
                { content: "Exploration de films et séries via l'API The Movie Database." },
                { content: "Affichage détaillé : synopsis, cast, studios et affiches." },
                { content: "Interface interactive et responsive côté front-end React." },
                { content: "Gestion asynchrone des requêtes API et parsing des données JSON." },
                { content: "Déploiement serverless sur Cloudflare Workers pour performance et scalabilité." },
                { content: "Navigation fluide entre différentes catégories et fiches de films." }
            ],
            defi: [
                { content: "Gestion des quotas et limitations de l'API TMDB." },
                { content: "Normalisation et parsing correct des données JSON pour l'affichage." },
                { content: "Optimisation de l'expérience utilisateur avec temps de chargement minimal et rendu réactif." }
            ]
        },
        { // SiteLink
            id: 6,
            title: "Sitelink",
            accroche: "Alternative moderne à Linktree avec architecture edge-first et temps de chargement minimal.",
            description: `Sitelink (SachaSLM) est une application serverless développée avec Cloudflare Workers, conçue comme 
                une alternative moderne à Linktree pour les streamers. Elle permet de créer et partager rapidement une page de 
                liens personnalisée, regroupant réseaux sociaux, plateformes de streaming et contenus divers. L'application 
                propose un design minimaliste, une gestion dynamique des liens et un chargement ultra-rapide`,
            date: 2026,
            state: "En cours",
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
            ],
            features: [
                { content: "Création et partage rapide de pages de liens personnalisées." },
                { content: "Gestion dynamique des liens : ajout, modification, suppression." },
                { content: "Regroupement de réseaux sociaux, plateformes de streaming et contenus divers." },
                { content: "Interface minimaliste et responsive pour une expérience utilisateur optimale." },
                { content: "Déploiement serverless sur Cloudflare Workers pour chargement ultra-rapide." },
                { content: "Architecture edge-first pour performance et scalabilité." }
            ],
            defi: [
                { content: "Gestion de la persistance et synchronisation des liens côté serverless." },
                { content: "Optimisation du temps de chargement pour expérience ultra-rapide." },
                { content: "Conception d'une interface responsive adaptée à différents appareils." }
            ]
        },
        { // Kanban
            id: 7,
            title: "Kanban",
            accroche: "Application kanban fullstack avec React front-end / Node.js back-end sur Railway et Cloudflare Pages.",
            description: `App-Kanban est une application fullstack développée avec React pour le front-end et hébergée sur 
                Cloudflare Pages, avec un back-end Node.js sur Railway. Elle permet de créer et gérer des tableaux Kanban 
                personnalisés pour organiser des tâches, projets ou idées de manière intuitive. L'application propose une 
                interface réactive, fluide et une synchronisation en temps réel pour une gestion de projet simple et efficace.`,
            date: 2026,
            state: "Fini",
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
            ],
            features: [
                { content: "Création et gestion de tableaux Kanban personnalisés." },
                { content: "Gestion des tâches, listes et projets." },
                { content: "Interface réactive et fluide côté front-end React." },
                { content: "Synchronisation en temps réel des modifications entre utilisateurs." },
                { content: "Gestion des projets par utilisateur avec mise à jour collaborative en temps réel." },
                { content: "Hébergement fullstack : front sur Cloudflare Pages, back sur Railway." }
            ],
            defi: [
                { content: "Gestion des conflits lors de modifications simultanées sur le même tableau." },
                { content: "Optimisation de la synchronisation temps réel pour maintenir réactivité." },
                { content: "Structuration de l'architecture fullstack pour faciliter évolutivité et maintenance." }
            ]
        },
    ],
    "Java": [
        { // Mod Minecraft
            id: 8,
            title: "Mod Minecraft",
            accroche: "Mod Minecraft 1.19.2 ajoutant une ressource Ruby avec minerai, outils et armures craftables.",
            description: `Ce mod développé pour Minecraft 1.19.2, ajoute une nouvelle ressource : le Ruby. 
                Il introduit un minerai généré naturellement, ainsi que des outils, armes, armures et blocs craftables. 
                Conçu pour s'intégrer à la progression vanilla, le mod propose un équilibrage soigné et une expérience fluide 
                en solo comme en multijoueur.`,
            date: 2025,
            state: "Fini",
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
            ],
            features: [
                { content: "Ajout d'un minerai Ruby généré naturellement dans le monde." },
                { content: "Création d'outils, armes et armures craftables à partir du Ruby." },
                { content: "Introduction de blocs et objets décoratifs liés à la nouvelle ressource." },
                { content: "Intégration fluide à la progression vanilla de Minecraft." },
                { content: "Compatibilité avec le mode solo et multijoueur." },
                { content: "Équilibrage gameplay pour garantir challenge et cohérence." }
            ],
            defi: [
                { content: "Assurer compatibilité avec le gameplay vanilla et l'écosystème existant." },
                { content: "Génération procédurale du minerai Ruby dans les mondes Minecraft." },
                { content: "Maintenir performance et fluidité en multijoueur avec nouveaux items et blocs." }
            ]
        },
        { // Postmanman
            id: 9,
            title: "PostmanMan",
            accroche: "Développement d'un outil technique reproduisant les fonctionnalités clés de Postman.",
            description: `PostmanMan est une application desktop développée en Java avec JavaFX, qui reproduit les 
                fonctionnalités principales de Postman. Elle permet d'envoyer des requêtes HTTP (GET, POST, PUT, PATCH, DELETE), 
                de gérer les headers et le body, et de visualiser les réponses de manière claire et structurée. Le projet 
                met en avant la gestion des appels API, le traitement des données JSON et la conception d'une interface 
                utilisateur interactive et intuitive.`,
            date: 2026,
            state: "Amélioration",
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
            ],
            features: [
                { content: "Envoi de requêtes HTTP : GET, POST, PUT, PATCH, DELETE." },
                { content: "Gestion complète des headers et du body des requêtes." },
                { content: "Visualisation claire et structurée des réponses JSON." },
                { content: "Interface desktop interactive et intuitive avec JavaFX." },
                { content: "Sauvegarde et organisation des requêtes fréquentes." },
                { content: "Workflow modulable pour exploration et test d'API." }
            ],
            defi: [
                { content: "Parsing efficace des réponses JSON complexes pour affichage." },
                { content: "Gestion des erreurs et timeout des requêtes HTTP." },
                { content: "Conception d'une interface modulable et ergonomique pour desktop." }
            ]
        }
    ],
    "Autre": [
        { // Flutter
            id: 10,
            title: "Baker'eat",
            accroche: "Application mobile Flutter pour découverte et commande de produits boulangerie/pâtisserie.",
            description: `Baker'eat est une application mobile développée en Flutter, dédiée à la découverte et à la 
                commande de produits de boulangerie et pâtisserie. Elle permet aux utilisateurs de parcourir les catalogues, 
                rechercher des produits, passer commande et suivre leurs achats en temps réel. L'application met en avant 
                la gestion d'API REST, l'authentification des utilisateurs, la gestion d'état, ainsi que la conception d'une 
                interface fluide, moderne et responsive adaptée aux environnements Android et iOS.`,
            date: 2025,
            state: "Fini",
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
            ],
            features: [
                { content: "Parcours et recherche de produits de boulangerie et pâtisserie." },
                { content: "Gestion des commandes et suivi en temps réel." },
                { content: "Authentification sécurisée des utilisateurs." },
                { content: "Gestion d'état avancée pour interface réactive." },
                { content: "Interface moderne, fluide et responsive sur Android et iOS." },
                { content: "Intégration d'API REST pour catalogue et traitement des commandes." }
            ],
            defi: [
                { content: "Synchronisation en temps réel entre commandes et interface utilisateur." },
                { content: "Conception d'une UI performante et fluide sur différents appareils mobiles." },
                { content: "Sécurisation des données utilisateur et authentification fiable." }
            ]
        },
        { // Masamune 
            id: 9,
            title: "Masamune Fighting",
            accroche: "Jeu de combat 1v1 local inspiré des titres type Smash, avec écran partagé.",
            description: `Masamune Fighting est un jeu de combat 1v1 en local, inspiré de l'univers des jeux type Smash, 
                jouable sur le même PC en écran partagé. Le jeu propose des affrontements dynamiques avec des personnages 
                aux compétences uniques, un système de dégâts progressifs et des mécaniques de knockback stratégiques. Le 
                projet met en avant la gestion des inputs multiples (clavier/manettes), la détection de collisions, la 
                physique de combat, ainsi que la conception d'un gameplay fluide et compétitif centré sur l'expérience 
                multijoueur locale.`,
            date: 2025,
            state: "Fini",
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
            ],
            features: [
                { content: "Affrontements 1v1 sur le même PC." },
                { content: "Personnages avec compétences uniques et attaques spécifiques." },
                { content: "Système de dégâts progressifs et mécaniques de knockback." },
                { content: "Gestion des inputs multiples : clavier et manettes." },
                { content: "Détection de collisions et physique de combat optimisée." },
                { content: "Gameplay fluide et équilibré centré sur l'expérience multijoueur locale." }
            ],
            defi: [
                { content: "Implémenter des mécaniques de combat précises et réactives." },
                { content: "Synchronisation des inputs multiples sans latence perceptible." },
                { content: "Gestion des collisions et knockback pour fluidité et équilibrage du gameplay." }
            ]
        }
    ]
}
