import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const IntroDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${colors.darkerColor};
  margin: 0;
  padding: 0;
`;

const StartButton = styled(motion.button)`
  border: 2px solid ${colors.primaryColor};
  border-radius: 15px;
  padding: 20px 40px;
  color: ${colors.primaryColor};
  font: 150px CostaRica, sans-serif;
  background-color: ${colors.darkColor};
  box-shadow: -2px -2px 8px ${colors.primaryColor};
  text-shadow: 0 0 8px ${colors.primaryColor};
`;

const Intro = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/home'), 3300)
  }, [])


  return (
    <IntroDiv>
        <StartButton
          initial={{ opacity: 1, y: 200}}
          animate={{ opacity: 0, y: -100}}
          transition={{duration: 3.3 }}
        >
          T
        </StartButton> 
    </IntroDiv>
  );
};

export default Intro;
