import type { ReactNode } from "react"

export type Item = {
    icon: ReactNode,
    label: string,
    value: string,
    href?: string
}

export type Social = {
    icon: ReactNode,
    label: string,
    href?: string
}

export type ContactInfoProps = {
    items: Item[],
    socials: Social[]
}