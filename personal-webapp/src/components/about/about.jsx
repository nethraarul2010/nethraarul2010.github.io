import React from "react";
import "./about.css";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiCss3,
  DiHtml5,
  DiMysql,
  DiDotnet,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiAmazonwebservices,
  SiFlask, SiIntellijidea, SiJira,
} from "react-icons/si";
import {
  SiPostman,
  SiFigma
} from "react-icons/si";

import { TbBrandGolang } from "react-icons/tb";
export default function About() {
    return(
    <div class="about-section">
    <h3 class="about-heading">About me</h3>
    <p class="fs-5 fw-normal about-body">
        Hi, I'm Kamalanethra Arulmozhi, a passionate Computer Science Master’s student at Northeastern University, Boston, with a perfect GPA of 4.0. With a strong foundation in Software Engineering and experience in Full-Stack Development, I specialize in creating user-centric solutions that combine innovation and functionality. My expertise spans Java, TypeScript, Angular, React.js, and Node.js, with hands-on experience in designing and optimizing scalable web applications.</p>
        <h3 class="about-heading">My Skill Set</h3>
        <div className="skills-container">
  <div className="tech-icons">
    <DiHtml5 />
    <span className="tech-icons-text">HTML5</span>
  </div>
  <div className="tech-icons">
    <DiCss3 />
    <span className="tech-icons-text">CSS3</span>
  </div>
  <div className="tech-icons">
    <DiAngularSimple />
    <span className="tech-icons-text">Angular</span>
  </div>
  <div className="tech-icons">
    <DiReact />
    <span className="tech-icons-text">React</span>
  </div>
  <div className="tech-icons">
    <DiJavascript1 />
    <span className="tech-icons-text">JavaScript</span>
  </div>
  <div className="tech-icons">
    <DiJava />
    <span className="tech-icons-text">Java</span>
  </div>
  <div className="tech-icons">
    <CgCPlusPlus />
    <span className="tech-icons-text">C++</span>
  </div>
  <div className="tech-icons">
    <DiPython />
    <span className="tech-icons-text">Python</span>
  </div>
  <div className="tech-icons">
    <DiNodejs />
    <span className="tech-icons-text">Node.js</span>
  </div>
  <div className="tech-icons">
    <DiDotnet />
    <span className="tech-icons-text">.NET</span>
  </div>
  <div className="tech-icons">
    <SiFlask />
    <span className="tech-icons-text">Flask</span>
  </div>
  <div className="tech-icons">
    <DiMysql />
    <span className="tech-icons-text">MySQL</span>
  </div>
  <div className="tech-icons">
    <DiMongodb />
    <span className="tech-icons-text">MongoDB</span>
  </div>
</div>
  <h3 class="about-heading">Tools I Use:</h3>
  <div className="skills-container">
  <div className="tech-icons">
    <DiGit />
    <span className="tech-icons-text">Git</span>
  </div>
  <div className="tech-icons">
    <SiAmazonwebservices />
    <span className="tech-icons-text">AWS</span>
  </div>
  <div className="tech-icons">
    <DiVisualstudio />
    <span className="tech-icons-text">VS Code</span>
  </div>
  <div className="tech-icons">
    <SiIntellijidea />
    <span className="tech-icons-text">IntelliJ</span>
  </div>
  <div className="tech-icons">
    <SiPostman />
    <span className="tech-icons-text">Postman</span>
  </div>
  <div className="tech-icons">
    <SiFigma/>
    <span className="tech-icons-text">Figma</span>
  </div>
 
  <div className="tech-icons">
    <SiJira />
    <span className="tech-icons-text">Jira</span>
  </div>
  
  </div>
</div>



  
   )
}
