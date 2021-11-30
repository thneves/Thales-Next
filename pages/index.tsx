import BasicLayout from "../layout/Basic";
import Particles from "react-tsparticles";
import Link from "next/link"
import styled from "styled-components";
import { motion } from "framer-motion";

const WrapperDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  z-index: 1;
`

const Intro = styled(motion.h1)`
  color: #E8FFFF;
  text-align: center;

  span {
    color: #A6F6F1;
  }
`

const Button = styled(motion.button)`
  padding: 10px;
  background: transparent;
  border: 2px solid #A6F6F1;
  font-size: 2rem;
  color: #E8FFFF;
  
`



const Home = () => {

  return (
    <BasicLayout>
      <Particles
      className="particles"
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#213E3B",
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
              distance: 100,
              duration: 1,
              opacity: 0.4,
              size: 50,
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
            value: "#41AEA9",
          },
          links: {
            color: "#41AEA9",
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "top",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 6,
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
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: false,
      }}
    /> 

    <WrapperDiv
      initial={{x: 200}}
      animate={{x: 100}}
      transition={{ duration: 2}}
    >
      <Intro>Hello, I'm <span>Thales!</span> I'm a full stack developer.</Intro>
      <Button><Link href="/home">GET STARTED</Link></Button>
      </WrapperDiv>
    </BasicLayout>
    
  );
};

export default Home;