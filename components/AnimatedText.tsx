import styled from "styled-components";
import { motion } from "framer-motion";
import {line1, line2, sentence, letter} from "../constants/motionText";

const StyledIntro = styled(motion.span)`
  font-size: 25px;
  color: #eee;
  letter-spacing: 0.2px;
  text-align: center;
  overflow: auto;
`

const AnimatedText = () => {

  return (
    <motion.h3
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
          { line1.split("").map((char, index) => {
            return (
              <StyledIntro key={char + "-" + index} variants={letter}>
                {char}
              </StyledIntro>
              )
          })} 
          <br />

          {/* { line2.split("").map((char, index) => {
            return (
              <StyledIntro key={char + "-" + index} variants={letter}>
                {char}
              </StyledIntro>
            )
          })} */}
          </motion.h3>
  )
}

export default AnimatedText;