import type { Experience } from "@/types/experience";

/*
*
*   ESTIAM --> 2024 - Present
*   BRISCC --> déc 2025
*   Stage --> juil/aout 2025
*   Hackathon --> juin 2025
*   CCNA --> fev 2025
* 
*/

export const experiences: Experience[] = [
    {
        id: 1,
        type: "Formation",
        title: {
            FR: "Bachelor Intelligence artificielle et Big Data",
            EN: "Bachelor in Artificial Intelligence and Big Data"
        },
        company: "ESGI",
        date: {
            start: {
                FR: "sept. 2026",
                EN: "Sept. 2026"
            }
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            {
                FR: { content: "Développement de modèles d'intelligence artificielle et implémentation d'algorithmes de machine learning." },
                EN: { content: "Development of AI models and implementation of machine learning algorithms." }
            },
            {
                FR: { content: "Analyse et traitement de grandes quantités de données structurées et non structurées." },
                EN: { content: "Analysis and processing of large structured and unstructured datasets." }
            },
            {
                FR: { content: "Mise en place de pipelines de données et optimisation des performances des systèmes Big Data." },
                EN: { content: "Building data pipelines and optimizing Big Data system performance." }
            }
        ],
        stacks: [
            "Python", "Java", "C",
            "SQL", "NoSQL", "Big Data",
            "Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn", "Hadoop",
            "Data Visualization", "Power BI",
            "Git / Github", "Docker", "Linux"
        ]
    },
    {
        id: 2,
        type: "Formation",
        title: {
            FR: "Bachelor Conception de Données et Applications",
            EN: "Bachelor in Data and Application Design"
        },
        company: "ESTIAM",
        date: {
            start: {
                FR: "2024",
                EN: "2024"
            },
            end: {
                FR: "Présent",
                EN: "Present"
            }
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            {
                FR: { content: "Conception d'architectures logicielles et modélisation de bases de données complexes." },
                EN: { content: "Design of software architectures and modeling of complex databases." }
            },
            {
                FR: { content: "Création d'API sécurisées et gestion optimisée des flux de données." },
                EN: { content: "Building secure APIs and optimizing data flow management." }
            },
            {
                FR: { content: "Développement d'interfaces dynamiques et intégration de frameworks modernes." },
                EN: { content: "Developing dynamic interfaces and integrating modern frameworks." }
            }
        ],
        stacks: [
            "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",
            "Node.js", "PHP", "Python", "Java",
            "SQL", "NoSQL",
            "Git / Github", "Docker", "Linux"
        ]
    },
    {
        id: 3,
        type: "Certification",
        title: {
            FR: "Certificate of Competency in Basic Operations of Smart Logistics Facilities and Equipment",
            EN: "Certificate of Competency in Basic Operations of Smart Logistics Facilities and Equipment"
        },
        company: "Belt and Road International Skill Certfication Center (BRISCC)",
        date: {
            start: {
                FR: "déc. 2025",
                EN: "Dec. 2025"
            }
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
            "Industrial Robotics Basics",
            "AI Industrial Basics"
        ],
        link: "https://www.linkedin.com/posts/eden-vandewatyne_nouvelle-certification-obtenue-jai-le-activity-7414367317444407296-9T94?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFew-x0Bb8wkrAs-mjH5q7S_fX630Sj5UGY",
        download: { path: "" }
    },
    {
        id: 4,
        type: "Expérience Professionnelle",
        title: {
            FR: "Stage Développeur Full Stack",
            EN: "Full Stack Developer Internship"
        },
        company: "Eight Bamboos",
        date: {
            start: {
                FR: "juil. 2025",
                EN: "Jul. 2025"
            },
            end: {
                FR: "août 2025",
                EN: "Aug. 2025"
            }
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            {
                FR: { content: "Développement de la logique métier back-end en Python et gestion des interactions serveurs." },
                EN: { content: "Backend business logic development in Python and server-side interaction handling." }
            },
            {
                FR: { content: "Conception d'interfaces utilisateur dynamiques et animations interactives avec JavaScript." },
                EN: { content: "Design of dynamic user interfaces and interactive animations with JavaScript." }
            },
            {
                FR: { content: "Optimisation des performances et de l'expérience utilisateur au sein d'un environnement technique full-stack." },
                EN: { content: "Performance optimization and user experience improvements in a full-stack environment." }
            }
        ],
        stacks: [
            "Python", "JavaScript", "Three.js", "SQL", "Xampp", "Git / Github"
        ]
    },
    {
        id: 5,
        type: "Formation",
        title: {
            FR: "Hackathon Game Développeur Unity",
            EN: "Unity Game Developer Hackathon"
        },
        company: "ESTIAM",
        date: {
            start: {
                FR: "juin 2025",
                EN: "Jun. 2025"
            }
        },
        location: {
            city: "Paris",
            country: "France"
        },
        tasks: [
            {
                FR: { content: "Conception et développement d'un jeu vidéo 3D fonctionnel en équipe sous contrainte de temps." },
                EN: { content: "Design and development of a functional 3D video game in a team under time constraints." }
            },
            {
                FR: { content: "Définition et implémentation du gameplay et des mécaniques de jeu autour d'une thématique imposée." },
                EN: { content: "Definition and implementation of gameplay and mechanics based on a given theme." }
            },
            {
                FR: { content: "Collaboration agile pour assurer la livraison d'un prototype jouable lors de la compétition." },
                EN: { content: "Agile collaboration to deliver a playable prototype during the competition." }
            }
        ],
        stacks: [
            "Unity", "C#", "Git / Github", "Jira"
        ]
    },
    {
        id: 6,
        type: "Certification",
        title: {
            FR: "CCNA: Enterprise Networking, Security, and Automation",
            EN: "CCNA: Enterprise Networking, Security, and Automation"
        },
        company: "Cisco",
        date: {
            start: {
                FR: "fév. 2025",
                EN: "Feb. 2025"
            }
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