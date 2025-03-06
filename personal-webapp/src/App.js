import React from "react";
import Nav from "./components/navbar/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import ParticlesComponent from "./sub-components/ParticleComponent";
import "./App.css";

export default function App() {
    return (
        <div className="App">
          <Nav />
            <div className="background-layer"></div>
            <div className="content">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="experience"><Projects /></section>
            <section id="resume"><Resume /></section>
            <section id="contact"><Contact /></section>
        </div>
        </div>
    );
}
