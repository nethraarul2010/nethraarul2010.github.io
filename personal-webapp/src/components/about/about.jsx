import React from "react";
import "./about.css";
import { motion } from "framer-motion"; 
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiAngularSimple,
  DiCss3, DiHtml5, DiMysql, DiDotnet, DiVisualstudio
} from "react-icons/di";
import {
  SiAmazonwebservices, SiFlask, SiIntellijidea, SiJira, SiPostman, SiFigma
} from "react-icons/si";

export default function About() {
    return (
        <div className="about-section">
            <h3 className="about-heading">About me</h3>
            <p className="fs-5 fw-normal about-body">
                Hi, I'm Kamalanethra Arulmozhi, a passionate Computer Science Master’s student at Northeastern University, Boston, with a perfect GPA of 4.0. With a strong foundation in Software Engineering and experience in Full-Stack Development, I specialize in creating user-centric solutions that combine innovation and functionality. My expertise spans Java, TypeScript, Angular, React.js, and Node.js, with hands-on experience in designing and optimizing scalable web applications.
            </p>

            <h3 className="about-heading">My Skill Set</h3>
            <div className="skills-container">
                {[
                    { icon: <DiHtml5 />, label: "HTML5" },
                    { icon: <DiCss3 />, label: "CSS3" },
                    { icon: <DiAngularSimple />, label: "Angular" },
                    { icon: <DiReact />, label: "React" },
                    { icon: <DiJavascript1 />, label: "JavaScript" },
                    { icon: <DiJava />, label: "Java" },
                    { icon: <CgCPlusPlus />, label: "C++" },
                    { icon: <DiPython />, label: "Python" },
                    { icon: <DiNodejs />, label: "Node.js" },
                    { icon: <DiDotnet />, label: ".NET" },
                    { icon: <SiFlask />, label: "Flask" },
                    { icon: <DiMysql />, label: "MySQL" },
                    { icon: <DiMongodb />, label: "MongoDB" }
                ].map((skill, index) => (
                    <motion.div 
                        key={index}
                        className="tech-icons"
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: false, amount: 0.5 }} 
                        transition={{ duration: 0.8, delay: index * 0.2 }} 
                        whileHover={{ scale: 1.1 }}  
                    >
                        {skill.icon}
                        <span className="tech-icons-text">{skill.label}</span>
                    </motion.div>
                ))}
            </div>

            <h3 className="about-heading">Tools I Use:</h3>
            <div className="skills-container">
                {[
                    { icon: <DiGit />, label: "Git" },
                    { icon: <SiAmazonwebservices />, label: "AWS" },
                    { icon: <DiVisualstudio />, label: "VS Code" },
                    { icon: <SiIntellijidea />, label: "IntelliJ" },
                    { icon: <SiPostman />, label: "Postman" },
                    { icon: <SiFigma />, label: "Figma" },
                    { icon: <SiJira />, label: "Jira" }
                ].map((tool, index) => (
                    <motion.div 
                        key={index}
                        className="tech-icons"
                        initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            viewport={{ once: false, amount: 0.5 }} 
                            transition={{ duration: 0.8, delay: index * 0.2 }} 
                        whileHover={{ scale: 1.1 }}
                    >
                        {tool.icon}
                        <span className="tech-icons-text">{tool.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
