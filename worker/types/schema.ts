export interface ContactMessage {
    name: string,
    email: string,
    message: string
}

export interface ResendResponse {
    success?: boolean,
    message?: string,
    error?: string
}