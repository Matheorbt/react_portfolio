import React from 'react'
import './Navbar.css';

function Navbar() {
    const handleHamburger = () => {
        const hamburgerPage = document.querySelector(".navbar-hamburger-menu-page")
        const hamburgerMenuBarOne = document.querySelector(".bar-one")
        const hamburgerMenuBarTwo = document.querySelector(".bar-two")
        hamburgerPage.classList.toggle("navbar-hamburger-menu-page-active")
        hamburgerMenuBarOne.classList.toggle("bar-one-active")
        hamburgerMenuBarTwo.classList.toggle("bar-two-active")
    }
    return (
        <React.Fragment>
            <div className="navbar-hamburger-menu-page">
                <div className="navbar-hamburger-menu-page-anchor-wrapper">
                    <a href="#home" aria-label="HOME anchor" name="HOME Anchor">HOME</a>
                    <a href="#about" aria-label="ABOUT anchor" name="ABOUT Anchor">ABOUT</a>
                    <a href="#work" aria-label="WORK anchor" name="WORK Anchor">WORK</a>
                    <a href="#contact" aria-label="CONTACT anchor" name="CONTACT Anchor">CONTACT</a>
                </div>
            </div>
            <div className="navbar-wrapper">
                <div className="navbar-left-section">
                </div>
                <div className="navbar-right-section">
                    <a aria-label="Linkedin Link" name="Linkedin Link" href="https://www.linkedin.com/in/mathéo-robert-3490271b8" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="false"></i></a>
                    <a aria-label="GitHub Link" name="GitHub Link" href="https://github.com/Matheorbt" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="false"></i></a>
                    <button className="navbar-hamburger-menu" onClick={() => handleHamburger()}><span className="navbar-hamburger-menu-bar bar-one"></span><span className="navbar-hamburger-menu-bar bar-two"></span></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
