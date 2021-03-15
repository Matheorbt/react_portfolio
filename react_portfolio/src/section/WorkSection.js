import React from 'react'
import './WorkSection.css'
import ProjectGrid from '../components/ProjectGrid';

function WorkSection() {
    return (
        <React.Fragment>
            <div id="work"></div>
            <div className="work-main-wrapper">
                <div className="work-top-wrapper">
                    <div className="work-top-hero-title"><span className="work-top-p">P</span><span className="work-top-r">r</span><span className="work-top-o">o</span><span className="work-top-j">j</span><span className="work-top-e">e</span><span className="work-top-t">t</span><span className="work-top-s">s</span></div>
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
