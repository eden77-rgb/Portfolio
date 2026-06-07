type Lang<T> = {
    FR: T,
    EN: T
}

export type DownloadItem = {
    key: string,
    badge: string,
    label: Lang<string>,
    sub: Lang<string>,
    filePath: string,
    onClick: () => void
}