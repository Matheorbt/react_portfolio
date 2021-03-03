import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar-wrapper">
                <div className="navbar-left-section">
                    <h1>Mathéo Robert</h1>
                </div>
                <div className="navbar-right-section">
                    <div><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                    <div><i class="fa fa-github" aria-hidden="true"></i></div>
                    <div className="navbar-hamburger-menu"><span className="navbar-hamburger-menu-bar bar-one"></span><span className="navbar-hamburger-menu-bar bar-two"></span><span className="navbar-hamburger-menu-bar bar-three"></span></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
