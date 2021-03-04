import React from 'react'
import './Caroussel.css'
import CarousselSlide from '../components/CarousselSlide';
import { workData } from '../data/workData'

function Caroussel() {
    return (
        <React.Fragment>
            {workData.map((project) => {
                return (
                    <CarousselSlide key={project.id} {...project} />
                )
            })}
        </React.Fragment>
    )
}

export default Caroussel
