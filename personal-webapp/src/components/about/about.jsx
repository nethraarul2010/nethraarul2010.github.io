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
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlask,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
export default function About() {
    return(
    <div class="about-section">
    <h1 class="about-heading">About me</h1>
    <p class="about-body">
        Hi, I'm Kamalanethra Arulmozhi, a passionate Computer Science Master’s student at Northeastern University, Boston, with a perfect GPA of 4.0. With a strong foundation in Software Engineering and experience in Full-Stack Development, I specialize in creating user-centric solutions that combine innovation and functionality. My expertise spans Java, TypeScript, Angular, React.js, and Node.js, with hands-on experience in designing and optimizing scalable web applications.</p>
        <h1 class="about-heading">My Skill Set</h1>
        <div className="skills-container">
<div className="tech-icons"> <DiHtml5/> </div>
<div className="tech-icons"> <DiCss3 /> </div>
<div className="tech-icons"> <DiAngularSimple /> </div>
<div className="tech-icons"> <DiReact /> </div>
<div className="tech-icons"> <DiJavascript1 /> </div>
<div className="tech-icons"> <DiJava /> </div>
  <div className="tech-icons"> <CgCPlusPlus /> </div>
  <div className="tech-icons"> <DiPython /> </div>
  <div className="tech-icons"> <DiNodejs /> </div>
  <div className="tech-icons"> <DiDotnet /> </div>
  <div className="tech-icons"> <SiFlask /> </div>
  <div className="tech-icons"> <DiMysql /> </div>
  <div className="tech-icons"> <DiMongodb /> </div>


  
</div>

    </div>
   )
}
