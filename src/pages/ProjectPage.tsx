import { Navigate, useParams } from "react-router-dom"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import { ProjectDefis, ProjectFeatures, ProjectVideo, ProjectDescription, ProjectHero, ProjectImages } from "@/components/ProjectPage"
import GoBackButton from "@/components/Button/GoBackButton"
import { useEffect, useState } from "react"

export function ProjectPage() {
    const { id } = useParams()
    const [showVideo, setShowVideo] = useState(false)

    const getProjectById = (id: number): Project | undefined => {
        return Object.values(projects).flat().find(projet => projet.id == id)
    }

    const project = getProjectById(Number(id));

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        setShowVideo(false)

        if (project?.video) {
            const timer = setTimeout(() => {
                setShowVideo(true)
            }, 400)

            return () => clearTimeout(timer)
        }
    }, [project])

    if (!project) {
        return (
            <Navigate to="/" replace />
        )
    }

    return (
        <div className="flex flex-col">
            <ProjectHero projet={project} />

            <ProjectDescription description={project.description} />

            {(showVideo && project.video) &&
                <ProjectVideo video={project.video} />
            }

            {project.images.length != 0 &&
                <ProjectImages images={project.images} />
            }

            <ProjectFeatures features={project.features} />

            <ProjectDefis defis={project.defis} />

            <GoBackButton />
        </div>
    )
}