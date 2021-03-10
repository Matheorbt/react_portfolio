import React from 'react'
import './WorkSection.css'
import ProjectGrid from '../components/ProjectGrid';

function WorkSection() {
    return (
        <React.Fragment>
            <div id="work"></div>
            <div className="work-main-wrapper">
                <div className="work-top-wrapper">
                    <h1 className="work-top-hero-title">Projets</h1>
                </div>
                <div className="work-bottom-wrapper">
                    <div className="work-bottom-caroussel-container">
                        <ProjectGrid />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorkSection
