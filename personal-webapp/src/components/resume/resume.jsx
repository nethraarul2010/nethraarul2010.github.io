import React from "react";
import resume from "../../assets/Resume.pdf";
import "./resume.css";

export default function Resume() {
    return(
        <div>
            <div className="resume-section">
      <h1 className="resume-heading">My Resume</h1>

      <a href={resume} download className="resume-button">
        Download Resume
      </a>

      <iframe src={resume} className="resume-preview" title="Resume"></iframe>
    </div>
        </div>
    )
}