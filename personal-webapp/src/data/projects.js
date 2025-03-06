import imea from "../assets/imea.png";
import techit from "../assets/techit.png";
import chore from "../assets/chore.png";
import portfolio from "../assets/portfolio.png";

export const projects = [
    {
      image: imea,  
      title: "Image Manipulation and Enhancement Application",
      description: "Built a Java-based image processing application with advanced features like compression, dithering, and color correction. Leveraged MVC architecture for scalability and achieved 100% test coverage with JUnit.",
      techstack: "Java, MVC, JUnit",
    },
    {
        image: techit,
      title: "Technical Event Management Web Application",
      description: "Developed a full-stack MERN web app for seamless event creation and registration. Integrated Google Events API to fetch related events, enhancing user experience and event discovery.",
      techstack: "MongoDB, Express.js, React.js, Node.js, Google Events API",
    },
    {
        image: chore,
        title: "HouseMate – Chore Delegation App",
        description: "Designed an interactive Figma prototype for a chore management app, enabling task assignment, progress tracking, and analytics dashboards. Conducted A/B testing and usability studies to optimize user interaction.",
        techstack: "Figma, A/B Testing, Usability Testing",
        
    },
    {
        image: portfolio,
        title: "Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase my skills, experience, and projects in a structured and interactive way.",
        techstack: "React.js, JavaScript, HTML5, CSS3, Bootstrap",
    }
  ];
  
