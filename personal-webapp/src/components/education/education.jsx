import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./education.css";


export default function Education() {
    return(
        <div>
        <h1 className="experience-heading">Education</h1>
        <div className='education-container'>
        <DotLottieReact
        src="https://lottie.host/b2fc8e5c-9d8c-43ca-ab6b-fc817847ad34/voH6BAeQ83.lottie"
        loop
        autoplay
        className='lottie-animation'
      />
            <div className='education-items'>
                <div>
                <h4>Northeastern University</h4>
                <p>Master of Science in Computer Science</p>
                <p>September 2023 - May 2025</p>
            </div>
            <div>
                <h4>PSG College of Technology</h4>
                <p>B.Tech in Information Technology</p>
                <p>August 2017 - April 2021</p>
            </div>
            </div>
        </div>
       
      </div>
      
    );
 
}