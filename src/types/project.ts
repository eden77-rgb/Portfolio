import type { Stack } from "@/types"

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

export type Defis = {
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
    defis: Defis[]
    
}

export type Section = "Python" | "Technologie web" | "Java" | "Autre"

export type ProjetBySection = {
    [key in Section]?: Project[]
}

