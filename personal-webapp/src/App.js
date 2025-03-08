import React, { useEffect, useState } from "react";
import Nav from "./components/navbar/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import ParticlesComponent from "./sub-components/ParticleComponent";
import Loader from "./sub-components/Loader";
import "./App.css";

export default function App() {
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 2000);
    }, []); 

    return (
        <div className="App">
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <Nav />
                    <div className="background-layer"></div>
                    <div className="content">
                        <section id="home"><Home /></section>
                        <section id="about"><About /></section>
                        <section id="experience"><Projects /></section>
                        {/* <section id="resume"><Resume /></section> */}
                        <section id="contact"><Contact /></section>
                    </div>
                </>
            )}
        </div>
    );
}
