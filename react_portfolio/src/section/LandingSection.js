import React from 'react'
import './LandingSection.css'

function LandingSection() {
    return (
        <React.Fragment>
            <div id="home"></div>
            <section className="landing-main-wrapper">
                <div className="landing-background-triangle"></div>
                <h1 className="landing-hero-title">PORTFOLIO</h1>
                <div className="landing-background-triangle-two"></div>
            </section>
        </React.Fragment>
    )
}

export default LandingSection
