import React from 'react'
import './ProjectGridElement.css'

function ProjectGridElement(props) {
    const { img, title, description } = props;
    return (
        <React.Fragment>
            <div className="work-bottom-grid-element">
                <div className="work-bottom-grid-element-img-container">
                    <div className="work-bottom-grid-element-img-hover">
                        <h1 className="work-bottom-grid-element-title">{title}</h1>
                        <p className="work-bottom-grid-element-description">{description}</p>
                    </div>
                    <img className="work-bottom-grid-element-img" src={img} alt="logo preview"></img>
                </div>
            </div>
        </React.Fragment >
    )
}

export default ProjectGridElement