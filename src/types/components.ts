import type { Media, Project, ProjetBySection, Stack } from "@/types"

export type ButtonProps = {
    title: string,
    style?: "primary" | "secondary",
    action?: () => void
}

export type ProjectsProps = {
    sections: ProjetBySection
}

export type ProjectsContentProps = {
    projets: Project[]
}

export type ProjectCardProps = {
    projet: Project
}

export type ProjectStackProps = {
    stack: Stack
}

export type ProjectHeroProps = {
    projet: Project
}

export type ProjectDescriptionProps = {
    description: string
}

export type ProjectVideoProps = {
    video: Media
}

export type ProjectImagesProps = {
    images: Media[]
}