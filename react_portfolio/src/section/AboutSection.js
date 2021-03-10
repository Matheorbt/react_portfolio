import React from 'react'
import './AboutSection.css'

function AboutSection() {
    const handleKnowMore = () => {
        var aboutKnowMorePage = document.querySelector('.about-know-more-page')
        aboutKnowMorePage.classList.toggle("about-know-more-active")
    }
    return (
        <React.Fragment>
            <div id="about"></div>
            <section className="about-main-wrapper">
                <div className="about-know-more-page">
                    <button className="about-know-more-arrow" onClick={() => handleKnowMore()}><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>Retour</button>
                    <div className="about-know-more-main-wrapper">
                        <div className="about-know-more-profile-picture-wrapper">
                            <img className="about-know-more-profile-picture" src="https://www.matheorbt.com/img/profile_picture.jpg" alt="profile" />
                        </div>
                        <div className="about-know-more-description">
                            Actuellement étudiant en première année au cursus PGE de l'école Epitech sur le campus de Lyon, j'ai
                            décidé de suivre cette formation qui permet un apprentissage par soi-même, une organisation autonome de
                            son emploi du temps et des projets en groupe.

                            De plus, je suis très intéressé par le développement web que j'ai découvert en dehors du cadre de mes
                            études au collège, j'aime la créativité et le travail en groupe que ce domaine m'apporte.</div>
                    </div>
                </div>
                <div className="about-top-wrapper">
                    <p className="about-description">Etudiant à Epitech PGE sur le campus de Lyon, passionné par le développement web, le design d’UI / UX.</p>
                    <button className="about-know-more-arrow" onClick={() => handleKnowMore()}>En savoir plus !<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
                </div>
                <div className="about-bottom-wrapper">
                    <div id="about-google-map"></div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutSection
