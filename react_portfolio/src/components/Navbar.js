import React from 'react'
import './Navbar.css';

function Navbar() {
    const handleHamburger = () => {
        const hamburgerPage = document.querySelector(".navbar-hamburger-menu-page")
        const hamburgerMenuBarOne = document.querySelector(".bar-one")
        const hamburgerMenuBarTwo = document.querySelector(".bar-two")
        const body = document.body
        body.classList.toggle("active-body")
        hamburgerPage.classList.toggle("navbar-hamburger-menu-page-active")
        hamburgerMenuBarOne.classList.toggle("bar-one-active")
        hamburgerMenuBarTwo.classList.toggle("bar-two-active")
    }
    return (
        <React.Fragment>
            <div className="navbar-hamburger-menu-page">
                <div className="navbar-hamburger-menu-page-anchor-wrapper">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">WORK</a>
                    <a href="#">CONTACT</a>
                </div>
            </div>
            <div className="navbar-wrapper">
                <div className="navbar-left-section">
                </div>
                <div className="navbar-right-section">
                    <a href="https://www.linkedin.com/in/mathéo-robert-3490271b8" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/Matheorbt" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <button className="navbar-hamburger-menu" onClick={() => handleHamburger()}><span className="navbar-hamburger-menu-bar bar-one"></span><span className="navbar-hamburger-menu-bar bar-two"></span></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
