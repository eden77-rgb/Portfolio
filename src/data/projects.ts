import type { ProjetBySection } from "@/types";

export const projects: ProjetBySection = [
    {
        title: {
            FR: "Python",
            EN: "Python"
        },
        projects: [
            { // Zelda
                id: 1,
                title: "The Legend of Zelda: A Link to the Past",
                accroche: {
                    FR: "Un clone de The Legend of Zelda: A Link to the Past développé en Python.",
                    EN: "A clone of The Legend of Zelda: A Link to the Past developed in Python."
                },
                description: {
                    FR: `Implémentation d'un clone du jeu classique The Legend of Zelda: A Link to the Past développé en Python avec les bibliothèque Pygame, PyTMX et PyScroll. Ce projet m'a permis d'explorer et d'appliquer les concepts du développement de jeux 2D, notamment la gestion d'entités, les systèmes d'animation, l'architecture modulaire et la création d'une carte avec collision`,
                    EN: `Implementation of a clone of the classic game The Legend of Zelda: A Link to the Past developed in Python using Pygame, PyTMX and PyScroll. This project allowed me to explore and apply 2D game development concepts such as entity management, animation systems, modular architecture, and tilemap collision handling.`
                },
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
                video: { path: "/zelda/video.mp4", alt: "Vidéo de démonstration" },
                features: [
                    {
                        FR: { content: "Gestion d'entités jouables et PNJ." },
                        EN: { content: "Playable entity and NPC management." }
                    },
                    {
                        FR: { content: "Systèmes d'animations 2D fluides." },
                        EN: { content: "Smooth 2D animation systems." }
                    },
                    {
                        FR: { content: "Carte avec collisions et obstacles." },
                        EN: { content: "Tilemap with collisions and obstacles." }
                    },
                    {
                        FR: { content: "Architecture modulaire du moteur de jeu." },
                        EN: { content: "Modular game engine architecture." }
                    },
                    {
                        FR: { content: "Gestion des objets et inventaire." },
                        EN: { content: "Item and inventory management." }
                    },
                    {
                        FR: { content: "Interaction et scripts d'événements dans le jeu." },
                        EN: { content: "In-game event scripting and interactions." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Implémenter la détection de collisions complexe sur une carte tilemap." },
                        EN: { content: "Implement complex collision detection on a tilemap." }
                    },
                    {
                        FR: { content: "Synchroniser animations et déplacements en temps réel." },
                        EN: { content: "Synchronize animations and movement in real time." }
                    },
                    {
                        FR: { content: "Structurer un moteur modulaire permettant ajout de fonctionnalités facilement." },
                        EN: { content: "Design a modular engine allowing easy feature extension." }
                    }
                ]
            },
            { // Celeste
                id: 2,
                title: "Celeste",
                accroche: {
                    FR: "Clone minimaliste de Celeste développé avec Pygame.",
                    EN: "Minimalist Celeste clone developed with Pygame."
                },
                description: {
                    FR: `Implémentation en groupe d'un clone minimaliste du jeu de plateforme indépendant Celeste développé en Python avec la bibliothèque Pygame. Ce projet m'a permis d'explorer et d'appliquer les concepts du développement de jeux 2D orientés plateforme, notamment la gestion précise des collisions, les mécaniques de mouvement complexes (saut, dash), les systèmes d'animation fluides, l'architecture modulaire et la conception de niveaux avec obstacles et checkpoints.`,
                    EN: `Team implementation of a minimalist clone of the indie platformer Celeste using Python and Pygame. This project allowed me to explore 2D platformer development concepts such as precise collision handling, complex movement mechanics (jumping, dashing), smooth animation systems, modular architecture, and level design with obstacles and checkpoints.`
                },
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
                video: { path: "/celeste/video.mp4", alt: "Vidéo de démonstration" },
                features: [
                    {
                        FR: { content: "Mécaniques de plateforme : saut, dash." },
                        EN: { content: "Platform mechanics: jump, dash." }
                    },
                    {
                        FR: { content: "Gestion précise des collisions et des rebonds." },
                        EN: { content: "Precise collision and bounce handling." }
                    },
                    {
                        FR: { content: "Systèmes d'animations pour personnages." },
                        EN: { content: "Character animation systems." }
                    },
                    {
                        FR: { content: "Conception de niveaux avec checkpoints et obstacles." },
                        EN: { content: "Level design with checkpoints and obstacles." }
                    },
                    {
                        FR: { content: "Gestion de l'état du joueur et des interactions avec le décor." },
                        EN: { content: "Player state and environment interaction handling." }
                    },
                    {
                        FR: { content: "Gameplay solo exigeant et réactif, fidèle à l'expérience originale." },
                        EN: { content: "Challenging and responsive solo gameplay faithful to the original." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Implémenter des mécaniques complexes (dash + collisions) de manière précise." },
                        EN: { content: "Implement complex mechanics (dash + collisions) precisely." }
                    },
                    {
                        FR: { content: "Maintenir un gameplay fluide malgré les calculs physiques fréquents." },
                        EN: { content: "Maintain smooth gameplay despite heavy physics calculations." }
                    },
                    {
                        FR: { content: "Concevoir des niveaux équilibrés pour progresser tout en restant challengeant." },
                        EN: { content: "Design balanced yet challenging levels." }
                    }
                ]
            },
            { // G.E.R.A.R.D
                id: 3,
                title: "G.E.R.A.R.D",
                accroche: {
                    FR: "Architecture front-end C# / back-end Python avec communication API REST pour intérroger un IA.",
                    EN: "C# front-end / Python back-end architecture with REST API communication to query an AI system."
                },
                description: {
                    FR: `Développement d'une application interactive combinant un front-end en C# et un back-end en Python. Le projet est actuellement orienté vers la mise en place de la communication front-back via API, ainsi que l'intégration progressive de modèles d'intelligence artificielle (Ollama) pour le traitement et la génération de contenu. Ce travail me permet d'explorer les problématiques liées à l'interaction utilisateur, à l'architecture modulaire, à la gestion des flux de données et à la conception d'un système évolutif reliant une interface utilisateur riche à des services d'IA.`,
                    EN: `Development of an interactive application combining a C# front-end and a Python back-end. The project currently focuses on front-back communication via REST API, as well as progressive integration of AI models (Ollama) for content processing and generation. This work explores user interaction challenges, modular architecture, data flow management, and the design of a scalable system connecting a rich user interface to AI services.`
                },
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
                    {
                        FR: { content: "Communication front-end / back-end via API REST." },
                        EN: { content: "Front-end / back-end communication via REST API." }
                    },
                    {
                        FR: { content: "Intégration progressive de modèles d'IA pour génération et traitement de contenu." },
                        EN: { content: "Progressive integration of AI models for generation and processing." }
                    },
                    {
                        FR: { content: "Interface utilisateur interactive et responsive." },
                        EN: { content: "Interactive and responsive user interface." }
                    },
                    {
                        FR: { content: "Architecture modulaire pour faciliter l'évolution future." },
                        EN: { content: "Modular architecture for future scalability." }
                    },
                    {
                        FR: { content: "Gestion des flux de données entre interface et services IA." },
                        EN: { content: "Data flow management between UI and AI services." }
                    },
                    {
                        FR: { content: "Système évolutif permettant ajout de nouvelles fonctionnalités IA." },
                        EN: { content: "Scalable system allowing new AI features." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Définir et structurer correctement l'API pour communication front-back." },
                        EN: { content: "Design and structure the API correctly for front-back communication." }
                    },
                    {
                        FR: { content: "Assurer compatibilité et intégration fluide des modèles IA dans le workflow." },
                        EN: { content: "Ensure smooth integration of AI models into the workflow." }
                    },
                    {
                        FR: { content: "Concevoir une architecture évolutive qui supporte la montée en complexité du projet." },
                        EN: { content: "Design a scalable architecture supporting increasing complexity." }
                    }
                ]
            }
        ],
    },
    {
        title: {
            FR: "Technologie web",
            EN: "Web technologies"
        },
        projects: [
            { // Pokemon API
                id: 4,
                title: "PokeAPI 1G",
                accroche: {
                    FR: "Une application complète de Pokédex 1G développée avec .NET 10 et Blazor.",
                    EN: "A full 1st-gen Pokédex application developed with .NET 10 and Blazor."
                },
                description: {
                    FR: `Application full-stack permettant de consulter le Pokédex de la 1ère génération. Le projet repose sur une Clean Architecture robuste et est entièrement containerisé avec Docker. Il intègre une API REST sous ASP.NET Core, une interface Blazor fluide et une base de données sous Microsoft SQL Server, offrant des fonctionnalités avancées de recherche et de filtrage.`,
                    EN: `Full-stack application allowing users to browse the 1st generation Pokédex. The project is based on a robust Clean Architecture and is fully containerized with Docker. It includes a REST API built with ASP.NET Core, a smooth Blazor interface, and a Microsoft SQL Server database, providing advanced search and filtering features.`
                },
                date: 2026,
                state: "Amélioration",
                github: "https://github.com/eden77-rgb/Pokemon-API",
                stacks: [
                    ".NET 10",
                    "ASP.NET Core Web API",
                    "Blazor",
                    "Microsoft SQL Server",
                    "Docker"
                ],
                thumbnail: { path: "/assets/pokemon/thumbnail.png", alt: "Image miniature du Pokédex" },
                images: [
                    { path: "/assets/pokemon/thumbnail.png", alt: "Liste de tous les Pokémon" },
                    { path: "/assets/pokemon/1.png", alt: "Page détail d'un Pokémon" },
                    { path: "/assets/pokemon/2.png", alt: "Interface de filtrage" },
                    { path: "/assets/pokemon/3.png", alt: "Interface de recherche et filtrage" }
                ],
                features: [
                    {
                        FR: { content: "Recherche dynamique de Pokémon par nom." },
                        EN: { content: "Dynamic Pokémon search by name." }
                    },
                    {
                        FR: { content: "Filtrage avancé par types (Feu, Eau, Plante, etc.)." },
                        EN: { content: "Advanced filtering by types (Fire, Water, Grass, etc.)." }
                    },
                    {
                        FR: { content: "API REST complète (CRUD) pour la gestion des données." },
                        EN: { content: "Full REST API (CRUD) for data management." }
                    },
                    {
                        FR: { content: "Interface utilisateur moderne et réactive avec Blazor." },
                        EN: { content: "Modern and responsive UI built with Blazor." }
                    },
                    {
                        FR: { content: "Architecture logicielle découpée en couches (Clean Architecture)." },
                        EN: { content: "Layered software architecture (Clean Architecture)." }
                    },
                    {
                        FR: { content: "Orchestration complète des services via Docker Compose." },
                        EN: { content: "Full service orchestration using Docker Compose." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Mettre en œuvre une Clean Architecture pour séparer la logique métier de l'infrastructure." },
                        EN: { content: "Implement Clean Architecture to separate business logic from infrastructure." }
                    },
                    {
                        FR: { content: "Configurer la communication réseau entre les containers (API, DB, Frontend)." },
                        EN: { content: "Configure network communication between containers (API, DB, Frontend)." }
                    },
                    {
                        FR: { content: "Optimiser les requêtes SQL pour le filtrage multi-critères des entités." },
                        EN: { content: "Optimize SQL queries for multi-criteria filtering." }
                    }
                ]
            },
            { // PageWeaver
                id: 5,
                title: "PageWeaver",
                accroche: {
                    FR: "Génération de pages personnalisées à partir d'URL avec système de templates.",
                    EN: "Generation of custom pages from URLs using a template system."
                },
                description: {
                    FR: `PageWeaver est une application serverless développée avec Cloudflare Workers permettant de générer des pages HTML personnalisées à partir d'une URL. Elle offre un système de templates, de contenus dynamiques (par IA), et un cache intelligent via KV Namespace.`,
                    EN: `PageWeaver is a serverless application built with Cloudflare Workers that generates custom HTML pages from a URL. It features a template system, AI-generated dynamic content, and intelligent caching using a KV Namespace.`
                },
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
                    {
                        FR: { content: "Génération dynamique de pages HTML personnalisées à partir d'une URL." },
                        EN: { content: "Dynamic generation of custom HTML pages from a URL." }
                    },
                    {
                        FR: { content: "Système de templates modulables pour mise en page facile." },
                        EN: { content: "Modular template system for easy page layout." }
                    },
                    {
                        FR: { content: "Contenu dynamique généré par IA." },
                        EN: { content: "AI-generated dynamic content." }
                    },
                    {
                        FR: { content: "Cache intelligent et persistant via KV Namespace." },
                        EN: { content: "Intelligent and persistent caching via KV Namespace." }
                    },
                    {
                        FR: { content: "Architecture serverless pour scalabilité et déploiement edge." },
                        EN: { content: "Serverless architecture for scalability and edge deployment." }
                    },
                    {
                        FR: { content: "Temps de chargement optimisé pour performance maximale." },
                        EN: { content: "Optimized loading time for maximum performance." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Gestion efficace du cache et invalidation des pages dynamiques." },
                        EN: { content: "Efficient caching and dynamic page invalidation management." }
                    },
                    {
                        FR: { content: "Intégration du contenu IA dans un environnement serverless." },
                        EN: { content: "Integration of AI content in a serverless environment." }
                    },
                    {
                        FR: { content: "Optimisation des performances et latence pour rendu côté edge." },
                        EN: { content: "Performance and latency optimization for edge rendering." }
                    }
                ]
            },
            { // SiteLink
                id: 6,
                title: "Sitelink",
                accroche: {
                    FR: "Alternative moderne à Linktree avec architecture edge-first et temps de chargement minimal.",
                    EN: "Modern Linktree alternative with edge-first architecture and minimal load time."
                },
                description: {
                    FR: `Sitelink (SachaSLM) est une application serverless développée avec Cloudflare Workers, conçue comme une alternative moderne à Linktree pour les streamers. Elle permet de créer et partager rapidement une page de liens personnalisée, regroupant réseaux sociaux, plateformes de streaming et contenus divers. L'application propose un design minimaliste, une gestion dynamique des liens et un chargement ultra-rapide.`,
                    EN: `Sitelink (SachaSLM) is a serverless application built with Cloudflare Workers, designed as a modern Linktree alternative for streamers. It allows users to quickly create and share a custom link page combining social networks, streaming platforms, and various content. The app features a minimal design, dynamic link management, and ultra-fast loading.`
                },
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
                    {
                        FR: { content: "Création et partage rapide de pages de liens personnalisées." },
                        EN: { content: "Fast creation and sharing of custom link pages." }
                    },
                    {
                        FR: { content: "Gestion dynamique des liens : ajout, modification, suppression." },
                        EN: { content: "Dynamic link management: add, edit, delete." }
                    },
                    {
                        FR: { content: "Regroupement de réseaux sociaux, plateformes de streaming et contenus divers." },
                        EN: { content: "Aggregation of social networks, streaming platforms, and various content." }
                    },
                    {
                        FR: { content: "Interface minimaliste et responsive pour une expérience utilisateur optimale." },
                        EN: { content: "Minimal and responsive UI for optimal user experience." }
                    },
                    {
                        FR: { content: "Déploiement serverless sur Cloudflare Workers pour chargement ultra-rapide." },
                        EN: { content: "Serverless deployment on Cloudflare Workers for ultra-fast loading." }
                    },
                    {
                        FR: { content: "Architecture edge-first pour performance et scalabilité." },
                        EN: { content: "Edge-first architecture for performance and scalability." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Gestion de la persistance et synchronisation des liens côté serverless." },
                        EN: { content: "Persistence and synchronization of links in a serverless environment." }
                    },
                    {
                        FR: { content: "Optimisation du temps de chargement pour expérience ultra-rapide." },
                        EN: { content: "Load time optimization for ultra-fast experience." }
                    },
                    {
                        FR: { content: "Conception d'une interface responsive adaptée à différents appareils." },
                        EN: { content: "Designing a responsive UI for multiple devices." }
                    }
                ]
            },
            /* SERVICE DOWN
        
            { // Kanban
                id: 7,
                title: "Kanban",
                accroche: {
                    FR: "Application kanban fullstack avec React front-end / Node.js back-end sur Railway et Cloudflare Pages.",
                    EN: "Full-stack Kanban application with React front-end and Node.js back-end hosted on Railway and Cloudflare Pages."
                },
                description: {
                    FR: `App-Kanban est une application fullstack développée avec React pour le front-end et hébergée sur Cloudflare Pages, avec un back-end Node.js sur Railway. Elle permet de créer et gérer des tableaux Kanban personnalisés pour organiser des tâches, projets ou idées de manière intuitive. L'application propose une interface réactive, fluide et une synchronisation en temps réel pour une gestion de projet simple et efficace.`,
                    EN: `App-Kanban is a full-stack application built with React for the front-end and hosted on Cloudflare Pages, with a Node.js back-end on Railway. It allows users to create and manage custom Kanban boards to organize tasks, projects, or ideas intuitively. The app provides a responsive, smooth interface and real-time synchronization for simple and efficient project management.`
                },
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
                {
                    FR: { content: "Création et gestion de tableaux Kanban personnalisés." },
                    EN: { content: "Create and manage custom Kanban boards." }
                },
                {
                    FR: { content: "Gestion des tâches, listes et projets." },
                    EN: { content: "Task, list, and project management." }
                },
                {
                    FR: { content: "Interface réactive et fluide côté front-end React." },
                    EN: { content: "Smooth and responsive React front-end interface." }
                },
                {
                    FR: { content: "Synchronisation en temps réel des modifications entre utilisateurs." },
                    EN: { content: "Real-time synchronization of changes between users." }
                },
                {
                    FR: { content: "Gestion collaborative des projets avec mise à jour instantanée." },
                    EN: { content: "Collaborative project management with instant updates." }
                },
                {
                    FR: { content: "Hébergement fullstack : front sur Cloudflare Pages, back sur Railway." },
                    EN: { content: "Full-stack deployment: front-end on Cloudflare Pages, back-end on Railway." }
                }
                ],
                defis: [
                {
                    FR: { content: "Gestion des conflits lors de modifications simultanées sur le même tableau." },
                    EN: { content: "Handling conflicts when multiple users edit the same board simultaneously." }
                },
                {
                    FR: { content: "Optimisation de la synchronisation temps réel pour maintenir la réactivité." },
                    EN: { content: "Optimizing real-time synchronization to maintain responsiveness." }
                },
                {
                    FR: { content: "Structuration de l'architecture fullstack pour faciliter évolutivité et maintenance." },
                    EN: { content: "Structuring the full-stack architecture for scalability and maintainability." }
                }
                ]
            },
            */
        ],
    },
    {
        title: {
            FR: "Java",
            EN: "Java"
        },
        projects: [
            { // Mod Minecraft
                id: 8,
                title: "Mod Minecraft",
                accroche: {
                    FR: "Mod Minecraft 1.19.2 ajoutant une ressource Ruby avec minerai, outils et armures craftables.",
                    EN: "Minecraft 1.19.2 mod adding a Ruby resource with ore, tools, and craftable armor."
                },
                description: {
                    FR: `Ce mod développé pour Minecraft 1.19.2 ajoute une nouvelle ressource : le Ruby. Il introduit un minerai généré naturellement, ainsi que des outils, armes, armures et blocs craftables. Conçu pour s'intégrer à la progression vanilla, le mod propose un équilibrage soigné et une expérience fluide en solo comme en multijoueur.`,
                    EN: `This mod developed for Minecraft 1.19.2 adds a new resource: Ruby. It introduces a naturally generated ore, as well as tools, weapons, armor, and craftable blocks. Designed to fit vanilla progression, the mod offers balanced gameplay and a smooth experience in both single-player and multiplayer.`
                },
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
                    {
                        FR: { content: "Ajout d'un minerai Ruby généré naturellement dans le monde." },
                        EN: { content: "Adds a naturally generated Ruby ore in the world." }
                    },
                    {
                        FR: { content: "Création d'outils, armes et armures craftables à partir du Ruby." },
                        EN: { content: "Adds craftable tools, weapons, and armor made from Ruby." }
                    },
                    {
                        FR: { content: "Introduction de blocs et objets décoratifs liés à la nouvelle ressource." },
                        EN: { content: "Introduces decorative blocks and items related to the new resource." }
                    },
                    {
                        FR: { content: "Intégration fluide à la progression vanilla de Minecraft." },
                        EN: { content: "Seamless integration into Minecraft’s vanilla progression." }
                    },
                    {
                        FR: { content: "Compatibilité avec le mode solo et multijoueur." },
                        EN: { content: "Compatible with both single-player and multiplayer modes." }
                    },
                    {
                        FR: { content: "Équilibrage gameplay pour garantir challenge et cohérence." },
                        EN: { content: "Balanced gameplay ensuring challenge and consistency." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Assurer compatibilité avec le gameplay vanilla et l'écosystème existant." },
                        EN: { content: "Ensure compatibility with vanilla gameplay and existing ecosystem." }
                    },
                    {
                        FR: { content: "Génération procédurale du minerai Ruby dans les mondes Minecraft." },
                        EN: { content: "Procedural generation of Ruby ore in Minecraft worlds." }
                    },
                    {
                        FR: { content: "Maintenir performance et fluidité en multijoueur avec nouveaux items et blocs." },
                        EN: { content: "Maintain performance and smooth multiplayer experience with new items and blocks." }
                    }
                ]
            },
            { // Postmanman
                id: 9,
                title: "PostmanMan",
                accroche: {
                    FR: "Développement d'un outil technique reproduisant les fonctionnalités clés de Postman.",
                    EN: "Development of a technical tool replicating key features of Postman."
                },
                description: {
                    FR: `PostmanMan est une application desktop développée en Java avec JavaFX, qui reproduit les fonctionnalités principales de Postman. Elle permet d'envoyer des requêtes HTTP (GET, POST, PUT, PATCH, DELETE), de gérer les headers et le body, et de visualiser les réponses de manière claire et structurée. Le projet met en avant la gestion des appels API, le traitement des données JSON et la conception d'une interface utilisateur interactive et intuitive.`,
                    EN: `PostmanMan is a desktop application developed in Java with JavaFX that replicates the main features of Postman. It allows sending HTTP requests (GET, POST, PUT, PATCH, DELETE), managing headers and request bodies, and visualizing responses in a clear and structured way. The project highlights API request handling, JSON data processing, and the design of an interactive and intuitive user interface.`
                },
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
                    {
                        FR: { content: "Envoi de requêtes HTTP : GET, POST, PUT, PATCH, DELETE." },
                        EN: { content: "Send HTTP requests: GET, POST, PUT, PATCH, DELETE." }
                    },
                    {
                        FR: { content: "Gestion complète des headers et du body des requêtes." },
                        EN: { content: "Full management of request headers and body." }
                    },
                    {
                        FR: { content: "Visualisation claire et structurée des réponses JSON." },
                        EN: { content: "Clear and structured JSON response visualization." }
                    },
                    {
                        FR: { content: "Interface desktop interactive et intuitive avec JavaFX." },
                        EN: { content: "Interactive and intuitive desktop UI using JavaFX." }
                    },
                    {
                        FR: { content: "Sauvegarde et organisation des requêtes fréquentes." },
                        EN: { content: "Save and organize frequently used requests." }
                    },
                    {
                        FR: { content: "Workflow modulable pour exploration et test d'API." },
                        EN: { content: "Modular workflow for API exploration and testing." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Parsing efficace des réponses JSON complexes pour affichage." },
                        EN: { content: "Efficient parsing of complex JSON responses for display." }
                    },
                    {
                        FR: { content: "Gestion des erreurs et timeout des requêtes HTTP." },
                        EN: { content: "Handling HTTP errors and request timeouts." }
                    },
                    {
                        FR: { content: "Conception d'une interface modulable et ergonomique pour desktop." },
                        EN: { content: "Designing a modular and ergonomic desktop interface." }
                    }
                ]
            }
        ],
    },
    {
        title: {
            FR: "Autre",
            EN: "Other"
        },
        projects: [
            { // Flutter
                id: 10,
                title: "Baker'eat",
                accroche: {
                    FR: "Application mobile Flutter pour découverte et commande de produits boulangerie/pâtisserie.",
                    EN: "Flutter mobile application for discovering and ordering bakery and pastry products."
                },
                description: {
                    FR: `Baker'eat est une application mobile développée en Flutter, dédiée à la découverte et à la commande de produits de boulangerie et pâtisserie. Elle permet aux utilisateurs de parcourir les catalogues, rechercher des produits, passer commande et suivre leurs achats en temps réel. L'application met en avant la gestion d'API REST, l'authentification des utilisateurs, la gestion d'état, ainsi que la conception d'une interface fluide, moderne et responsive adaptée aux environnements Android et iOS.`,
                    EN: `Baker'eat is a mobile application developed with Flutter, dedicated to discovering and ordering bakery and pastry products. It allows users to browse catalogs, search for products, place orders, and track their purchases in real time. The app highlights REST API integration, user authentication, state management, and the design of a smooth, modern, and responsive interface adapted to both Android and iOS environments.`
                },
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
                    {
                        FR: { content: "Parcours et recherche de produits de boulangerie et pâtisserie." },
                        EN: { content: "Browse and search bakery and pastry products." }
                    },
                    {
                        FR: { content: "Gestion des commandes et suivi en temps réel." },
                        EN: { content: "Order management and real-time tracking." }
                    },
                    {
                        FR: { content: "Authentification sécurisée des utilisateurs." },
                        EN: { content: "Secure user authentication." }
                    },
                    {
                        FR: { content: "Gestion d'état avancée pour interface réactive." },
                        EN: { content: "Advanced state management for a reactive UI." }
                    },
                    {
                        FR: { content: "Interface moderne, fluide et responsive sur Android et iOS." },
                        EN: { content: "Modern, smooth, and responsive interface for Android and iOS." }
                    },
                    {
                        FR: { content: "Intégration d'API REST pour catalogue et traitement des commandes." },
                        EN: { content: "REST API integration for catalog and order processing." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Synchronisation en temps réel entre commandes et interface utilisateur." },
                        EN: { content: "Real-time synchronization between orders and UI." }
                    },
                    {
                        FR: { content: "Conception d'une UI performante et fluide sur différents appareils mobiles." },
                        EN: { content: "Designing a smooth and high-performance UI across devices." }
                    },
                    {
                        FR: { content: "Sécurisation des données utilisateur et authentification fiable." },
                        EN: { content: "Securing user data and ensuring reliable authentication." }
                    }
                ]
            },
            { // Masamune 
                id: 11,
                title: "Masamune Fighting",
                accroche: {
                    FR: "Jeu de combat 1v1 local inspiré des titres type Smash, avec écran partagé.",
                    EN: "Local 1v1 fighting game inspired by Smash-style titles with split-screen gameplay."
                },
                description: {
                    FR: `Masamune Fighting est un jeu de combat 1v1 en local, inspiré de l'univers des jeux type Smash, jouable sur le même PC en écran partagé. Le jeu propose des affrontements dynamiques avec des personnages aux compétences uniques, un système de dégâts progressifs et des mécaniques de knockback stratégiques. Le projet met en avant la gestion des inputs multiples (clavier/manettes), la détection de collisions, la physique de combat, ainsi que la conception d'un gameplay fluide et compétitif centré sur l'expérience multijoueur locale.`,
                    EN: `Masamune Fighting is a local 1v1 fighting game inspired by Smash-style games, playable on the same PC with split-screen gameplay. It features dynamic battles with characters that have unique abilities, a progressive damage system, and strategic knockback mechanics. The project focuses on multi-input handling (keyboard/controllers), collision detection, combat physics, and the design of a smooth and competitive gameplay experience centered on local multiplayer.`
                },
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
                    { path: "/assets/masamune/2.png", alt: "Image de l'application" }
                ],
                features: [
                    {
                        FR: { content: "Affrontements 1v1 sur le même PC." },
                        EN: { content: "Local 1v1 matches on the same PC." }
                    },
                    {
                        FR: { content: "Personnages avec compétences uniques et attaques spécifiques." },
                        EN: { content: "Characters with unique abilities and attacks." }
                    },
                    {
                        FR: { content: "Système de dégâts progressifs et mécaniques de knockback." },
                        EN: { content: "Progressive damage system and knockback mechanics." }
                    },
                    {
                        FR: { content: "Gestion des inputs multiples : clavier et manettes." },
                        EN: { content: "Multi-input handling: keyboard and controllers." }
                    },
                    {
                        FR: { content: "Détection de collisions et physique de combat optimisée." },
                        EN: { content: "Optimized collision detection and combat physics." }
                    },
                    {
                        FR: { content: "Gameplay fluide et équilibré centré sur l'expérience multijoueur locale." },
                        EN: { content: "Smooth and balanced gameplay focused on local multiplayer experience." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Implémenter des mécaniques de combat précises et réactives." },
                        EN: { content: "Implement precise and responsive combat mechanics." }
                    },
                    {
                        FR: { content: "Synchronisation des inputs multiples sans latence perceptible." },
                        EN: { content: "Synchronize multiple inputs without noticeable latency." }
                    },
                    {
                        FR: { content: "Gestion des collisions et knockback pour fluidité et équilibrage du gameplay." },
                        EN: { content: "Handle collisions and knockback for smooth and balanced gameplay." }
                    }
                ]
            }
        ]
    }
]
