import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import knimage from "../../assets/KN.png";
import "./nav.css";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src={knimage} alt="Logo" className="logo-img" />
                </Link>
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <div className={`navbar-right ${menuOpen ? "show" : ""}`}>
                <Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/experience" className="nav-item" onClick={() => setMenuOpen(false)}>Experience</Link>
                <Link to="/resume" className="nav-item" onClick={() => setMenuOpen(false)}>Resume</Link>
                <Link to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}
