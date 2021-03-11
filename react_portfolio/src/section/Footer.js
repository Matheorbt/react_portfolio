import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer-main-wrapper">
                <div className="footer-left-wrapper">
                    <h1 className="footer-left-copyright"> Copyright ©{(new Date().getFullYear())} Mathéo Robert. All Rights Reserved</h1>
                </div>
                <div className="footer-right-wrapper">
                    <a className="footer-right-linkedin" href="https://www.linkedin.com/in/mathéo-robert-3490271b8" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a>
                    <a className="footer-right-git" href="https://github.com/Matheorbt" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                    <p className="footer-right-mail"><i className="fa fa-envelope" aria-hidden="true"></i> matheo.robert@epitech.eu</p>
                </div>
            </footer>
        </React.Fragment >
    )
}

export default Footer
