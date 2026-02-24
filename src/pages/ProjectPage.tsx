import { useParams } from "react-router-dom"

export function ProjectPage() {
    const { id } = useParams()

    return (
        <>
            <h1>ProjetPage {id}</h1>
        </>
    )
}