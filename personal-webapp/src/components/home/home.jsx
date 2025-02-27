import "./home.css";
import React from "react";
import landingImage from "../../assets/landing.png";
import Type from "./type";
export default function Home() {
    return(
        <div>
    <section className="landing">
      <div className="landing-subheading">
        <h1 className="landing-heading">Hello, I'm <br></br>Kamalanethra Arulmozhi.</h1>
        <div className="landing-content">
        <Type/>
        <p className="landing-body">I am a CS grad by degree and a Software Engineer by passion! I craft user-centric, scalable solutions in Software Engineering, Web Development, and AI—turning ideas into impactful and efficient software.</p>
        </div>
        <a href="/contact" className="cta-button">🚀 Let's Connect!</a>
      </div>
      <div className="landing-image">
        <img src={landingImage} alt="Kamalanethra Arulmozhi - Software Engineer" />
      </div>
    </section>

        </div>
    )
}