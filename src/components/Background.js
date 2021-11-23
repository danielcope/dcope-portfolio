import Particles from "react-tsparticles";

const Background = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#020507",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 80,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 150,
              duration: 0.5,
              speed: 0.35,
            },
          },
        },
        particles: {
          color: {
            value: "#212325",
          },
          links: {
            color: "#212325",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 45,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: false,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;
