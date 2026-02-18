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

export interface Project {
    id: number,
    title: string,
    description: string,
    github: string,
    live?: string,
    stacks: Stack[],
    thumbnail: Media,
    images: Media[],
    video?: Media
}

export type Section = "Python" | "Technologie web" | "Java" | "Autre"

export type ProjetBySection = {
    [key in Section]?: Project[]
}

