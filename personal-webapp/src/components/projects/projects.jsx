import React from "react";
import { experiences } from "../../data/experience";
import {projects} from "../../data/projects";
import "./projects.css";


export default function Projects() {
    return(
    <div>
    <div>
    <h1 class="experience-heading">My Professional Experiences</h1>
    <div class="experience-container">
        {experiences.map((experience) => (
            <div class="experience-card">
            <img src={experience.logo} class="company-logo" alt={experience.company}/>
                <h3 className="job-title">{experience.title}</h3>
                <p className="job-duration">{experience.duration}</p>
        </div>
    ))}
    </div>
    </div>
    <div>
    <h1 class="experience-heading">My Projects</h1>
    <div class="experience-container">
        {projects.map((experience) => (
            <div class="experience-card">
            <img src={experience.image} class="company-logo" alt={experience.company}/>
                <h3 className="project fs-5 fw-bolder">{experience.title}</h3>
                <h4 className="fs-6 fw-bold">Tech Stack: {experience.techstack}</h4>
                <p className="fs-7 ">{experience.description}</p>

        </div>
    ))}
    </div>
    </div>
    </div>
    )
}