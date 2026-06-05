type Lang<T> = {
    FR: T,
    EN: T
}
export type Item = {
    key: string,
    badge: string,
    label: Lang<string>,
    sub: Lang<string>,
    onClick: () => void
}