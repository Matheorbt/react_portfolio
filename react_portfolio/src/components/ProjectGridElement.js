import React from 'react'
import './ProjectGridElement.css'

function ProjectGridElement(props) {
    const { img, title, description } = props;
    return (
        <React.Fragment>
            <div className="work-bottom-caroussel-slide">
                <div className="work-bottom-caroussel-slide-img-container">
                    <div className="work-bottom-caroussel-slide-img-hover">
                        <h1 className="work-bottom-caroussel-slide-title">{title}</h1>
                        <p className="work-bottom-caroussel-slide-description">{description}</p>
                    </div>
                    <img className="work-bottom-caroussel-slide-img" src={img} alt="logo preview"></img>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CarousselSlide
