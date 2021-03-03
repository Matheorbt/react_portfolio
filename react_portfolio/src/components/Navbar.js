import React from 'react'
import './Navbar.css';

function Navbar() {
    const handleHamburger = () => {
        const hamburgerMenu = document.querySelector(".navbar-hamburger-menu")
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
                    <a>HOME</a>
                    <a>ABOUT</a>
                    <a>WORK</a>
                    <a>CONTACT</a>
                </div>
            </div>
            <div className="navbar-wrapper">
                <div className="navbar-left-section">
                </div>
                <div className="navbar-right-section">
                    <div><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                    <div><i className="fa fa-github" aria-hidden="true"></i></div>
                    <button className="navbar-hamburger-menu" onClick={() => handleHamburger()}><span className="navbar-hamburger-menu-bar bar-one"></span><span className="navbar-hamburger-menu-bar bar-two"></span></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
