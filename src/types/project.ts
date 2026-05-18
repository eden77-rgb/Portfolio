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

export type Lang<T> = {
    FR: T,
    EN: T
}

export type Project = {
    id: number,
    title: string,
    accroche: Lang<string>,
    description: Lang<string>,
    date: number,
    state: State,
    github: string,
    live?: string,
    stacks: Stack[],
    thumbnail: Media,
    images: Media[],
    video?: Media
    features: Lang<Feature>[],
    defis: Lang<Defis>[]
}

export type Section = "Python" | "Technologie web" | "Java" | "Autre"

export type ProjectSection = {
    title: Lang<string>
    projects: Project[]
}

export type ProjetBySection = ProjectSection[]
