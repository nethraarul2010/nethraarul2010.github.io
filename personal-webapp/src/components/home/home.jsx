import "./home.css";
import React from "react";
import landingImage from "../../assets/landing.png";
import Type from "./type";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {
  return (
    <div className="home-container">
      <section className="landing">
        <div className="landing-subheading">
          <h1 className="landing-heading">
            Hello, I'm <br />
            <h1 className="landing-name">Kamalanethra Arulmozhi.</h1>
          </h1>
          <div className="landing-content">
            <Type />
            <p className="landing-body">
              I am a CS grad by degree and a Software Engineer by passion! I craft
              user-centric, scalable solutions in Software Engineering, Web
              Development, and AI—turning ideas into impactful and efficient software.
            </p>
          </div>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/kamalanethraarul/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/nethraarul2010" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:arulmozhi.k@northeastern.edu">
              <FaEnvelope className="social-icon" />
            </a>
          </div>

        </div>
        <div className="landing-image">
        <DotLottieReact
         src="https://lottie.host/c484382f-28c0-469a-a1fc-390527c9039f/nhiEFVe9PV.lottie"
      loop
      autoplay
      className="lottie-animation"
    />
          {/* <img
            src={landingImage}
            alt="Kamalanethra Arulmozhi - Software Engineer"
          /> */}
        </div>
      </section>
    </div>
  );
}
