import { useParams } from "react-router-dom"
import { projects } from "@/data/projects"
import type { Project } from "@/types"

export function ProjectPage() {
    const { id } = useParams()

    /*
    * Thumbnail <img>
    * 
    * ProjectHero
    *   > date
    *   > titre
    *   > accroche
    *   > stacks
    *   > liens
    * 
    * ProjectDescription
    *   > titre type: A propos ...
    *   > description
    * 
    * ProjectImages
    *   > titre type: Images ...
    *   > un map des images
    * 
    * ProjectFeatures
    *   > titre type: Features ...
    *   > un map des feature
    * 
    * ProjectDefi
    *   > titre type: Defi ...
    *   > un map des Defis 
    * 
    * Bouton : Retour a l'accueil
    */

    const getProjectById = (id: number): Project | undefined => {
        return Object.values(projects).flat().find(projet => projet.id == id)
    }

    const project = getProjectById(Number(id));

    if (!project) {
        return (<h1>Projet introuvable</h1>)
    }


    return (
        <>
            <h1>ProjetPage {project.title}</h1>
        </>
    )
}