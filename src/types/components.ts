import type { Defis, Feature, Media, Project, ProjetBySection, Stack } from "@/types"
import type { Experience } from "./experience"

export type ButtonProps = {
    title: string,
    style?: "primary" | "secondary",
    action?: () => void
}

export type ExternalButtonProps = {
    href: string
}

export type DownloadButtonProps = {
    path: string
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

export type ProjectFeaturesProps = {
    features: Feature[]
}

export type ProjectDefisProps = {
    defis: Defis[]
}

export type ExperiencesSectionProps = {
    experiences: Experience[]
}

export type ExperiencesContentProps = {
    experiences: Experience[]
}

export type ExperienceCardProps = {
    experience: Experience
}