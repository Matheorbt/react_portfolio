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
                <button className="caroussel-btn caroussel-btn-previous" type="button" onClick={() => previousSlide()}><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>
                <button className="caroussel-btn caroussel-btn-next" type="button" onClick={() => nextSlide()}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
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
