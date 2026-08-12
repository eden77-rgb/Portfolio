import type { ProjetBySection } from "@/types";

export const projects: ProjetBySection = [
    {
        title: {
            FR: "Data",
            EN: "Data"
        },
        projects: [
            { // FinanceETL
                id: 1,
                title: "FinanceETL",
                accroche: {
                    FR: "Pipeline ETL automatisé permettant d'extraire, transformer et historiser des données financières dans un entrepôt PostgreSQL.",
                    EN: "Automated ETL pipeline for extracting, transforming, and storing financial market data in a PostgreSQL data warehouse."
                },
                description: {
                    FR: `FinanceETL est un projet de Data Engineering visant à automatiser la collecte et le traitement de données financières. Le pipeline extrait les données de marché via l'API yfinance, applique plusieurs étapes de nettoyage et de transformation avec Pandas, calcule des indicateurs techniques, puis alimente un entrepôt de données PostgreSQL modélisé en schéma en étoile. Le projet met l'accent sur la qualité des données, la structuration relationnelle et la préparation des données pour l'analyse décisionnelle dans Power BI.`,
                    EN: `FinanceETL is a Data Engineering project designed to automate the collection and processing of financial market data. The pipeline extracts historical data from the yfinance API, performs data cleaning and transformation with Pandas, computes technical indicators, and loads the results into a PostgreSQL data warehouse organized as a star schema. The project focuses on data quality, relational modeling, and preparing analytical datasets for Power BI dashboards.`
                },
                date: 2026,
                state: "Fini",
                github: "https://github.com/eden77-rgb/FinanceETL",
                stacks: [
                    "Python",
                    "Pandas",
                    "yFinance",
                    "Jupyter",
                    "SQLAlchemy",
                    "PostgreSQL",
                    "Docker",
                    "Power BI"
                ],
                thumbnail: { path: "/assets/finance-etl/thumbnail.png", alt: "Image miniature du menu" },
                images: [
                    { path: "/assets/finance-etl/1.png", alt: "Image du jeu" },
                    { path: "/assets/finance-etl/2.png", alt: "Image d'une animations" },
                    { path: "/assets/finance-etl/3.png", alt: "Image des objets" }
                ],
                features: [
                    {
                        FR: { content: "Pipeline ETL automatisé structuré autour des phases d'extraction, transformation et chargement." },
                        EN: { content: "Automated ETL pipeline structured around extract, transform, and load phases." }
                    },
                    {
                        FR: { content: "Extraction de données historiques depuis l'API yfinance à partir d'une watchlist personnalisée." },
                        EN: { content: "Historical market data extraction from the yfinance API using a custom watchlist." }
                    },
                    {
                        FR: { content: "Nettoyage, normalisation et feature engineering avec calcul des rendements journaliers et des moyennes mobiles." },
                        EN: { content: "Data cleaning, normalization, and feature engineering including daily returns and moving averages." }
                    },
                    {
                        FR: { content: "Conception d'un entrepôt de données PostgreSQL en schéma en étoile avec intégrité référentielle." },
                        EN: { content: "PostgreSQL data warehouse designed as a star schema with referential integrity constraints." }
                    },
                    {
                        FR: { content: "Infrastructure reproductible grâce à Docker pour le déploiement local de la base de données." },
                        EN: { content: "Reproducible local infrastructure using Docker for PostgreSQL deployment." }
                    },
                    {
                        FR: { content: "Préparation des données pour la création de tableaux de bord décisionnels sous Power BI." },
                        EN: { content: "Data preparation optimized for business intelligence dashboards in Power BI." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Transformer des données financières hétérogènes en un modèle relationnel cohérent et exploitable." },
                        EN: { content: "Transform heterogeneous financial data into a consistent relational model." }
                    },
                    {
                        FR: { content: "Mettre en place un schéma en étoile garantissant les performances analytiques et l'intégrité des données." },
                        EN: { content: "Design a star schema ensuring analytical performance and data integrity." }
                    },
                    {
                        FR: { content: "Concevoir un pipeline modulaire permettant d'ajouter facilement de nouveaux indicateurs financiers." },
                        EN: { content: "Design a modular pipeline that can easily accommodate additional financial indicators." }
                    }
                ]
            },
            { // NYC Taxi Plateforme
                id: 2,
                title: "NYC Taxi Plateforme",
                accroche: {
                    FR: "Plateforme Data Engineering de bout en bout pour l'analyse des données de transport de NYC",
                    EN: "End-to-end Data Engineering platform for analyzing NYC transportation data."
                },
                description: {
                    FR: `Conception d'une plateforme Data Engineering complète autour des données publiques des taxis de New York (Yellow, Green, FHV et HVFHV). Le projet couvre l'ensemble du cycle de traitement de la donnée, de l'ingestion automatisée depuis les sources TLC jusqu'à la visualisation finale, en passant par un Data Lake MinIO, des traitements distribués avec PySpark, un entrepôt PostgreSQL, la modélisation analytique avec dbt et l'orchestration avec Apache Airflow. Développé dans un environnement Dockerisé, ce projet met en pratique des problématiques concrètes de Data Engineering telles que l'évolution des schémas, l'idempotence, la qualité des données, le partitionnement, les tests automatisés et la CI/CD.`,
                    EN: `Design and implementation of a complete Data Engineering platform built around public NYC taxi datasets (Yellow, Green, FHV and HVFHV). The project covers the full data lifecycle, from automated ingestion from TLC sources to final analytics and visualization, using MinIO as a Data Lake, PySpark for distributed processing, PostgreSQL as the analytical warehouse, dbt for data modeling, and Apache Airflow for orchestration. Built in a fully containerized environment, the project focuses on real-world Data Engineering challenges such as schema evolution, idempotent pipelines, data quality, partitioning, automated testing, and CI/CD.`
                },
                date: 2026,
                state: "En cours",
                github: "https://github.com/eden77-rgb/nyc-taxi-data-platform",
                stacks: [
                    "Python",
                    "PySpark",
                    "PostgreSQL",
                    "dbt",
                    "Airflow",
                    "MinIO",
                    "Docker",
                    "Power BI",
                    "Github Actions"
                ],
                thumbnail: { path: "/assets/nyc-taxi/thumbnail.png", alt: "Image neutre" },
                images: [
                    { path: "/assets/nyc-taxi/thumbnail.png", alt: "Image neutre" },
                ],
                features: [
                    {
                        FR: { content: "Ingestion dynamique et idempotente des données TLC avec gestion des retries, disponibilité des fichiers et stockage dans MinIO." },
                        EN: { content: "Dynamic and idempotent ingestion of TLC datasets with retry handling, file availability checks, and MinIO storage." }
                    },
                    {
                        FR: { content: "Traitements distribués PySpark pour transformer les données du Bronze vers les couches Silver et Gold." },
                        EN: { content: "Distributed PySpark processing to transform data across Bronze, Silver, and Gold layers." }
                    },
                    {
                        FR: { content: "Gestion de l'évolution des schémas et harmonisation de plusieurs sources de données taxi aux structures différentes." },
                        EN: { content: "Schema evolution handling and normalization of multiple taxi datasets with different structures." }
                    },
                    {
                        FR: { content: "Entrepôt PostgreSQL alimenté par JDBC avec stratégie d'upsert et relance des traitements sans duplication." },
                        EN: { content: "PostgreSQL warehouse loading through JDBC with upsert strategies and duplicate-safe pipeline reruns." }
                    },
                    {
                        FR: { content: "Modélisation analytique avec dbt autour d'un modèle en étoile adapté à Power BI." },
                        EN: { content: "Analytics modeling with dbt using a star schema designed for Power BI." }
                    },
                    {
                        FR: { content: "Orchestration complète avec Apache Airflow, incluant dépendances entre ingestion, Spark et dbt." },
                        EN: { content: "End-to-end orchestration with Apache Airflow, including dependencies between ingestion, Spark, and dbt." }
                    },
                    {
                        FR: { content: "Contrôles de qualité et tests automatisés avec pytest, chispa et dbt tests." },
                        EN: { content: "Automated data quality checks and testing with pytest, chispa, and dbt tests." }
                    },
                    {
                        FR: { content: "Dashboards analytiques permettant d'explorer les volumes de courses, revenus, zones, horaires et comportements de paiement." },
                        EN: { content: "Analytical dashboards exploring trip volumes, revenue, zones, peak hours, and payment behavior." }
                    }
                ],
                defis: [
                    {
                        FR: { content: "Concevoir une ingestion générique capable de gérer plusieurs types de datasets TLC sans dupliquer la logique métier." },
                        EN: { content: "Design a generic ingestion process capable of handling multiple TLC datasets without duplicating business logic." }
                    },
                    {
                        FR: { content: "Gérer les différences et l'évolution des schémas entre Yellow, Green, FHV et HVFHV tout en conservant un modèle analytique cohérent." },
                        EN: { content: "Handle schema differences and evolution across Yellow, Green, FHV, and HVFHV while maintaining a consistent analytical model." }
                    },
                    {
                        FR: { content: "Construire un pipeline idempotent permettant de rejouer les traitements et les backfills sans créer de doublons dans PostgreSQL." },
                        EN: { content: "Build an idempotent pipeline allowing reruns and backfills without creating duplicates in PostgreSQL." }
                    },
                    {
                        FR: { content: "Définir une stratégie de transformation permettant de traiter le volume important des données avec Spark avant leur exposition dans PostgreSQL." },
                        EN: { content: "Define a transformation strategy using Spark to process large datasets before exposing curated data through PostgreSQL." }
                    },
                    {
                        FR: { content: "Mettre en place une chaîne d'orchestration et de tests suffisamment robuste pour reproduire les traitements de manière fiable et automatisée." },
                        EN: { content: "Build a robust orchestration and testing workflow to reproduce data processing reliably and automatically." }
                    }
                ]
            },
        ]
    },
    {
        title: {
            FR: "Développement",
            EN: "Développement"
        },
        projects: [
            { // Zelda
                id: 3,
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
            { // G.E.R.A.R.D
                id: 4,
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
                state: "En cours",
                github: "https://github.com/eden77-rgb/G.E.R.A.R.D",
                stacks: [
                    "Python",
                    "FastAPI",
                    "Ollama",
                    "C#",
                    ".NET 10",
                    "WPF",
                ],
                thumbnail: { path: "/assets/gerard/thumbnail.png", alt: "Aucune image disponible" },
                images: [
                    { path: "/assets/gerard/thumbnail.png", alt: "Page d'accueil" },
                    { path: "/assets/gerard/1.png", alt: "Image de l'application" },
                    { path: "/assets/gerard/2.png", alt: "Image de l'application" },
                ],
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
            }
        ],
    }
]
