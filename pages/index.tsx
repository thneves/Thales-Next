import BasicLayout from "../layout/Basic";
import Particles from "react-tsparticles";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";

const WrapperDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vh;
  margin: 10% auto;
  z-index: 1;
`;

const Intro = styled(motion.h1)`
  margin: 20px auto;
  color: ${colors.lightText};
  text-align: center;
  font-family: CostaRica;
  letter-spacing: 2px;

  span {
    color: ${colors.primaryColor};
    font-family: CostaRica;
    font-size: 40px;
  }
`;

const Button = styled(motion.button)`
  padding: 10px;
  background: transparent;
  margin: 0 auto;
  width: fit-content;
  border: 2px solid ${colors.primaryColor};
  font-size: 3rem;
  font-family: CostaRica;
  letter-spacing: 3px;
  color: ${colors.primaryColor};
`;

const Home = () => {
  return (
    <>
      <Particles
        className="particles"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 40,
          interactivity: {
            events: {
              onClick: {
                enable: true,
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
                distance: 500,
                duration: 4,
                opacity: 0.3,
                size: 70,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.6,
              },
            },
          },
          particles: {
            color: {
              value: "#E49F38",
            },
            links: {
              color: "#E49F38",
              distance: 16,
              enable: true,
              opacity: 0.3,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 9,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 6,
            },
          },
          detectRetina: false,
        }}
      />

      <WrapperDiv
        initial={{ x: 200 }}
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
      >
        <Intro>
          Hello, I&apos;m <span>Thales!</span> Welcome to my page.
        </Intro>
        <Button>
          <Link href="/home">GET STARTED</Link>
        </Button>
      </WrapperDiv>
    </>
  );
};

export default Home;
