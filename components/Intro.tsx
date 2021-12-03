import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { colors } from "../constants/styledVariables";

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: ${colors.primaryColor};
`

const StyledH2 = styled(motion.h2)`
  margin-bottom: 50px;
`

const Button = styled(motion.button)`
  background-color: ${colors.secondaryColor};
  padding: 5%;
  color: #eee;
  border: 6px solid ${colors.primaryColor};
  border-radius: 100%;
  font-size: 30px;
  font-variant: small-caps;

  &:hover {
    cursor: pointer;
  }
`

const Intro = () => {
  return (
    <HomeContainer 
       initial={{ opacity: 0.2}}
       animate={{ opacity: 1}}
       transition={{ type:"spring", delay: 0.5, duration: 0.8}}
    >


      <StyledH2 
      initial={{ fontSize: 40, color:"#548Ca8", x: -30, y: -30}}
      animate={{ fontSize: 60, color: '#EEEEEE', x: 0, y: 0 }}
      transition={{ duration: 1}}
      >
        Welcome to my page!
      </StyledH2>

        <Link href="/about">
      <Button
        initial={{ x: 40, y: 40 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          START
      </Button>
        </Link>
    </HomeContainer>
  )
}

export default Intro;
