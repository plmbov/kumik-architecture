import React, { useState, useEffect } from 'react'
import classes from './PortfolioContainer.module.css'
import SingleProject from '../SingleProject/SingleProject'
import projectsObject from '../../../assets/projects'
import SingleProjectCarousel from '../SingleProject/SingleProjectCarousel/SingleProjectCarousel'

const PortfolioContainer = () => {

    const [projects] = useState(projectsObject)
    const [projectToShow, setProjectToShow] = useState(false)
    const [displayProject, setDisplayProject] = useState(false)

    const showProjectDetails = (projectId) => {
        const projectToDisplay = projects.filter(project => project.projectId === projectId)
        setProjectToShow(projectToDisplay)
        setDisplayProject(true)
        document.location.hash = projectId
    }

    const hashHandler = () => {
        if (document.location.hash === '') {
            setDisplayProject(false)
        } else {
            showProjectDetails(document.location.hash.substring(1))
        }
    }

    useEffect(() => {
        hashHandler(document.location.hash)
    }, [])

    useEffect(() => {
        hashHandler()
    }, [document.location.hash])

    return (
        <>
            <div className={classes.Container}>
                <div className={classes.Projects}>
                    {projects.map(project => {
                        return <SingleProject projectData={project} key={project.projectId} clicked={() => document.location.hash = project.projectId} />
                    }
                    )
                    }
                </div>
            </div>
            {projectToShow && displayProject &&
                <SingleProjectCarousel projectToShow={projectToShow[0]} close={() => document.location.hash = ''} />
            }
        </>
    )
}

export default PortfolioContainer
