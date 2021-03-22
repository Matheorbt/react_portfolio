import React from 'react'
import './ProjectGrid.css'
import { workData } from '../data/workData'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

function ProjectGrid() {
    //React Spring flip animation
    const [flippedOne, setFlippedOne] = useState(false)
    const { transformOne, opacityOne } = useSpring({
        opacityOne: flippedOne ? 1 : 0,
        transformOne: `perspective(600px) rotateX(${flippedOne ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    const [flippedTwo, setFlippedTwo] = useState(false)
    const { transformTwo, opacityTwo } = useSpring({
        opacityTwo: flippedTwo ? 1 : 0,
        transformTwo: `perspective(600px) rotateX(${flippedTwo ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    const [flippedThree, setFlippedThree] = useState(false)
    const { transformThree, opacityThree } = useSpring({
        opacityThree: flippedThree ? 1 : 0,
        transformThree: `perspective(600px) rotateX(${flippedThree ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <React.Fragment>
            <h1 className="work-section-hero-title">Pour en savoir plus sur un projet cliquez dessus !</h1>
            <section className="project-main-wrapper">
                <div className="project-element-grid-wrap">
                    <div className={"work-grid-element-main-wrap number-" + workData[0].id} onClick={() => setFlippedOne(state => !state)}>
                        <animated.div className="work-bottom-grid-element-front" style={{ opacity: opacityOne.interpolate(o => 1 - o), transform: transformOne }}>
                            <img className="work-bottom-grid-element-img" src={workData[0].img} alt="logo preview"></img>
                        </animated.div>
                        <animated.div className="work-bottom-grid-element-back" style={{ opacity: opacityOne, transform: transformOne.interpolate(t => `${t} rotateX(180deg)`) }} >
                            <h1 className="work-bottom-grid-element-title">{workData[0].title}</h1>
                            <p className="work-bottom-grid-element-description">{workData[0].description}</p>
                        </animated.div>
                    </div>
                    <a className="work-bottom-grid-element-link" target="_blank" rel="noreferrer" href={workData[0].projectLink}>Accéder au projet !</a>
                </div>
                <div className="project-element-grid-wrap">
                    <div className={"work-grid-element-main-wrap number-" + workData[1].id} onClick={() => setFlippedTwo(state => !state)}>
                        <animated.div className="work-bottom-grid-element-front" style={{ opacity: opacityTwo.interpolate(o => 1 - o), transform: transformTwo }}>
                            <img className="work-bottom-grid-element-img" src={workData[1].img} alt="logo preview"></img>
                        </animated.div>
                        <animated.div className="work-bottom-grid-element-back" style={{ opacity: opacityTwo, transform: transformTwo.interpolate(t => `${t} rotateX(180deg)`) }} >
                            <h1 className="work-bottom-grid-element-title">{workData[1].title}</h1>
                            <p className="work-bottom-grid-element-description">{workData[1].description}</p>
                        </animated.div>
                    </div>
                    <a className="work-bottom-grid-element-link" target="_blank" rel="noreferrer" href={workData[1].projectLink}>Accéder au projet !</a>
                </div>
                <div className="project-element-grid-wrap">
                    <div className={"work-grid-element-main-wrap number-" + workData[2].id} onClick={() => setFlippedThree(state => !state)}>
                        <animated.div className="work-bottom-grid-element-front" style={{ opacity: opacityThree.interpolate(o => 1 - o), transform: transformThree }}>
                            <img className="work-bottom-grid-element-img" src={workData[2].img} alt="logo preview"></img>
                        </animated.div>
                        <animated.div className="work-bottom-grid-element-back" style={{ opacity: opacityThree, transform: transformThree.interpolate(t => `${t} rotateX(180deg)`) }} >
                            <h1 className="work-bottom-grid-element-title">{workData[2].title}</h1>
                            <p className="work-bottom-grid-element-description">{workData[2].description}</p>
                        </animated.div>
                    </div>
                    <a className="work-bottom-grid-element-link" rel="noreferrer" target="_blank" href={workData[2].projectLink}>Accéder au projet !</a>
                </div>
            </section>
        </React.Fragment >
    )
}

export default ProjectGrid
