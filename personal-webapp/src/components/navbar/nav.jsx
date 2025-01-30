import "./nav.css";
import React from "react";
import knimage from "../../assets/KN.png";


export default function Nav() {
    return(
    <div>
    <nav  className="navbar">
        <div className="navbar-left">
        <a href="/" className="logo">
                        <img src={knimage} alt="Logo" className="logo-img" />
                    </a>
        </div>
        <div className="navbar-right">
        <a href="/about" className="nav-item">About</a>
        <a href="/projects" className="nav-item">Projects</a>
        <a href="/resume" className="nav-item">Resume</a>
        <a href="/contact" className="nav-item">Contact</a>
        </div>
    </nav>
    </div>
    )
}