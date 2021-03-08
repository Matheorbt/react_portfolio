import React from 'react'
import './ProjectGrid.css'
import ProjectGridElement from './ProjectGridElement';
import { workData } from '../data/workData'


function ProjectGrid() {
    const nextSlide = () => {
        console.log("Next Slide");
    }
    const previousSlide = () => {
        console.log("Previous Slide");
    }
    return (
        <React.Fragment>
            <section className="caroussel-main-wrapper">
                {workData.map((project) => {
                    return (
                        <ProjectGridElement key={project.id} {...project} />
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default ProjectGrid
