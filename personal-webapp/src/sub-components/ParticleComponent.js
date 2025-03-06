import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const ParticleComponent = () => {
  const particlesInit = async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine); 
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#F8EDE3" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
          particles: {
            color: { value: "#5A3E36" },
            links: { enable: true, color: "#8C6A5D", opacity: 0.5 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.8 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
        }}
      />
    </Box>
  );
};

export default ParticleComponent;
