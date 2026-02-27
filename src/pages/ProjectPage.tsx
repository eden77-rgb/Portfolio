import { useParams } from "react-router-dom"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import { ProjectDefis, ProjectFeatures, ProjectVideo, ProjectDescription, ProjectHero, ProjectImages } from "@/components/ProjectPage"

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
        <div className="flex flex-col">
            <ProjectHero projet={project} />

            <ProjectDescription description={project.description} />

            {project.video &&
                <ProjectVideo video={project.video} />
            }

            {project.images.length != 0 &&
                <ProjectImages images={project.images} />
            }

            <ProjectFeatures features={project.features} />

            <ProjectDefis defis={project.defis} />
        </div>
    )
}