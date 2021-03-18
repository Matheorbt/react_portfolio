import React from 'react'
import './ProjectGrid.css'
import { workData } from '../data/workData'


function ProjectGrid() {
    return (
        <React.Fragment>
            <section className="project-main-wrapper">
                {workData.map((project) => {
                    return (
                        <div key={project.id} className={"work-grid-element-main-wrap number-" + project.id}>
                            <div className="work-bottom-grid-element">
                                <img className="work-bottom-grid-element-img" src={project.img} alt="logo preview"></img>
                            </div>
                            <h1 className="work-bottom-grid-element-title">{project.title}</h1>
                            <p className="work-bottom-grid-element-description">{project.description}</p>
                        </div>
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default ProjectGrid
