import type { LucideIcon } from "lucide-react"

type Lang<T> = {
    FR: T,
    EN: T
}

export type ShareItem = {
    key: string,
    icon: LucideIcon,
    label: Lang<string>,
    sub: Lang<string>,
    onClick: () => void | Promise<void>;
}