import React from "react";
import { experiences } from "../../data/experience";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";  
import "./projects.css";

export default function Projects() {
    return (
        <div>
            <div>
                <h1 className="experience-heading">My Professional Experiences</h1>
                <div className="experience-container">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            viewport={{ once: false, amount: 0.5 }} 
                            transition={{ duration: 0.8, delay: index * 0.2 }} 
                        >
                            <img src={experience.logo} className="company-logo" alt={experience.company} />
                            <h3 className="job-title">{experience.title}</h3>
                            <p className="job-duration">{experience.duration}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div>
                <h1 className="experience-heading">My Projects</h1>
                <div className="experience-container">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: index * 0.2}}
                        >
                            <h3 className="project fs-5 fw-bolder">{project.title}</h3>
                            <h4 className="fs-6 fw-bold">Tech Stack: {project.techstack}</h4>
                            <p className="fs-7">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
