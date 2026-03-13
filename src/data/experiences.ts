import type { Experience } from "@/types/experience";

/*
*
*   ESTIAM --> 2024 - 2027
*   BRISC --> déc 2025
*   Stage --> juil/aout 2025
*   Hackathon --> juin 2025
*   CCNA --> fev 2025
* 
*/

export const experiences: Experience[] = [
    {
        id: 1,
        type: "Formation",
        title: "Bachelor Conception de Données et Applications",
        company: "ESTIAM",
        date: {
            start: 2024,
            end: 2027
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            { content: "Conception d'architectures logicielles et modélisation de bases de données complexes." },
            { content: "Création d'API sécurisées et gestion optimisée des flux de données." },
            { content: "Développement d'interfaces dynamiques et intégration de frameworks modernes." }
        ],
        stacks: [
            "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",
            "Node.js", "PHP", "Python", "Java",
            "SQL", "NoSQL",
            "Git / Github", "Docker", "Linux"
        ]
    },
    {
        id: 2,
        type: "Certification",
        title: "Certificate of Competency in Basic Operations of Smart Logistics Facilities and Equipment",
        company: "Belt and Road International Skill Certfication Center (BRISCC)",
        date: {
            start: "déc. 2025"
        },
        location: {
            city: "Chongqing",
            country: "Chine"
        },
        stacks: [
            "WMS (Warehouse Management System)",
            "PLC Programming",
            "TMS (Transport Management System)",
            "SCADA Systems",
            "ERP Systems",
            "Industrial Robotics Basics"
        ],
        link: "https://www.linkedin.com/posts/eden-vandewatyne_nouvelle-certification-obtenue-jai-le-activity-7414367317444407296-9T94?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFew-x0Bb8wkrAs-mjH5q7S_fX630Sj5UGY",
        download: { path: "" }
    },
    {
        id: 3,
        type: "Expérience Professionnelle",
        title: "Stage Développeur Full Stack",
        company: "Eight Bamboos",
        date: {
            start: "juil. 2025",
            end: "août 2025"
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            { content: "Développement de la logique métier back-end en Python et gestion des interactions serveurs." },
            { content: "Conception d'interfaces utilisateur dynamiques et animations interactives avec JavaScript." },
            { content: "Optimisation des performances et de l'expérience utilisateur au sein d'un environnement technique full-stack." }
        ],
        stacks: [
            "Python", "JavaScript", "Three.js", "SQL", "Xampp", "Git / Github"
        ]
    },
    {
        id: 4,
        type: "Formation",
        title: "Hackathon Game Développeur Unity",
        company: "ESTIAM",
        date: {
            start: "juin 2025",
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            { content: "Conception et développement d'un jeu vidéo 3D fonctionnel en équipe sous contrainte de temps." },
            { content: "Définition et implémentation du gameplay et des mécaniques de jeu autour d'une thématique imposée." },
            { content: "Collaboration agile pour assurer la livraison d'un prototype jouable lors de la compétition." }
        ],
        stacks: [
            "Unity", "C#", "Git / Github", "Jira"
        ]
    },
    {
        id: 5,
        type: "Certification",
        title: "CCNA: Enterprise Networking, Security, and Automation",
        company: "Cisco",
        date: {
            start: "fév. 2025"
        },
        location: {
            city: "Paris",
            country: "France"
        },
        stacks: [
            "OSPF",
            "VLANs",
            "STP",
            "DHCP",
            "NAT",
            "DNS",
            "VPN",
            "IPv4 / IPv6",
            "TCP/IP",
            "AWS",
            "Azure"
        ],
        link: "https://www.credly.com/badges/c568c878-94ab-4a7b-8cf9-563e2b99100e/public_url",
        download: { path: "" }
    },
] 