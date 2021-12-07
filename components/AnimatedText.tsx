import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import { motion } from "framer-motion";
import {line1, sentence, letter} from "../constants/motionText";

const StyledMotion = styled(motion.h3)`
  width: 540px;
  max-width: 542px;
  text-align: center;
`

const StyledIntro = styled(motion.span)`
  font-size: 25px;
  color: ${colors.lightText};
`

const AnimatedText = () => {

  return (
    <StyledMotion
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
          </StyledMotion>
  )
}

export default AnimatedText;