import React from 'react'
import './ProjectGrid.css'
import ProjectGridElement from './ProjectGridElement';
import { workData } from '../data/workData'


function ProjectGrid() {
    return (
        <React.Fragment>
            <section className="project-main-wrapper">
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
