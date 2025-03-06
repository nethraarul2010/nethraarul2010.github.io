import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import knimage from "../../assets/KN.png";
import "./nav.css";

export default function Nav() {
    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.6 } // ✅ Adjust threshold for better accuracy
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="#home" className="logo">
                    <img src={knimage} alt="Logo" className="logo-img" />
                </Link>
            </div>

            <div className="fs-5 navbar-right">
                <Link to="#home" className={`nav-item ${activeSection === "#home" ? "active" : ""}`}>Home</Link>
                <Link to="#about" className={`nav-item ${activeSection === "#about" ? "active" : ""}`}>About</Link>
                <Link to="#experience" className={`nav-item ${activeSection === "#experience" ? "active" : ""}`}>Experience</Link>
                <Link to="#resume" className={`nav-item ${activeSection === "#resume" ? "active" : ""}`}>Resume</Link>
                <Link to="#contact" className={`nav-item ${activeSection === "#contact" ? "active" : ""}`}>Contact</Link>
            </div>
        </nav>
    );
}
