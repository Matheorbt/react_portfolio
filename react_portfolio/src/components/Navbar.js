import React from 'react'
import './Navbar.css';

function Navbar() {
    const handleHamburger = () => {
        const hamburgerPage = document.querySelector(".navbar-hamburger-menu-page")
        const hamburgerMenuBarOne = document.querySelector(".bar-one")
        const hamburgerMenuBarTwo = document.querySelector(".bar-two")
        const navLinkHome = document.querySelector(".navbar-hamburger-menu-page-anchor-home");
        const navLinkAbout = document.querySelector(".navbar-hamburger-menu-page-anchor-about");
        const navLinkWork = document.querySelector(".navbar-hamburger-menu-page-anchor-work");
        const navLinkContact = document.querySelector(".navbar-hamburger-menu-page-anchor-contact");
        hamburgerPage.classList.toggle("navbar-hamburger-menu-page-active")
        hamburgerMenuBarOne.classList.toggle("bar-one-active")
        hamburgerMenuBarTwo.classList.toggle("bar-two-active")
        setTimeout(
            function () {
                navLinkHome.classList.toggle("inactive-navbar-right")
                navLinkAbout.classList.toggle("inactive-navbar-left")
                navLinkWork.classList.toggle("inactive-navbar-right")
                navLinkContact.classList.toggle("inactive-navbar-left")
            }, 650);
    }
    return (
        <React.Fragment>
            <div className="navbar-hamburger-menu-page">
                <div className="navbar-hamburger-menu-page-anchor-wrapper">
                    <a className="navbar-hamburger-menu-page-anchor-home inactive-navbar-right" href="#home" aria-label="HOME anchor" name="HOME Anchor" onClick={() => handleHamburger()}>HOME</a>
                    <a className="navbar-hamburger-menu-page-anchor-about inactive-navbar-left" href="#about" aria-label="ABOUT anchor" name="ABOUT Anchor" onClick={() => handleHamburger()}>ABOUT</a>
                    <a className="navbar-hamburger-menu-page-anchor-work inactive-navbar-right" href="#work" aria-label="WORK anchor" name="WORK Anchor" onClick={() => handleHamburger()}>WORK</a>
                    <a className="navbar-hamburger-menu-page-anchor-contact inactive-navbar-left" href="#contact" aria-label="CONTACT anchor" name="CONTACT Anchor" onClick={() => handleHamburger()}>CONTACT</a>
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
