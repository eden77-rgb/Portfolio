export type Stack = 
    | "Python"
    | "Pygame"
    | "PyTMX"
    | "PyScroll"
    | "FastAPI"
    | "Ollama"
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "Cloudflare"
    | "Railway"
    | "KV Namespace"
    | "React"
    | "React Router"
    | "Vite"
    | "Tailwind CSS"
    | "TanStack Router"
    | "Node.js"
    | "Express"
    | "Nodemon"
    | "CORS"
    | "Java"
    | "JavaFX"
    | "Gradle"
    | "Minecraft Forge"
    | "Batch"
    | "Flutter"
    | "MySQL"
    | "C#"
    | "Unity"

export type Media = {
    path: string,
    alt?: string
}

export type State = 
    | "Bientot"
    | "En cours"
    | "Fini"
    | "Amélioration"

export type Feature = {
    content: string
}

export type Defi = {
    content: string
}

export type Project = {
    id: number,
    title: string,
    accroche: string,
    description: string,
    date: number,
    state: State,
    github: string,
    live?: string,
    stacks: Stack[],
    thumbnail: Media,
    images: Media[],
    video?: Media
    features: Feature[],
    defi: Defi[]
    
}

export type Section = "Python" | "Technologie web" | "Java" | "Autre"

export type ProjetBySection = {
    [key in Section]?: Project[]
}

