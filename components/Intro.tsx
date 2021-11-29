import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #334257;
`

const Intro = () => {
  return (
    <HomeContainer 
       initial={{ opacity: 0.2}}
       animate={{ opacity: 1}}
       transition={{ duration: 0.8}}
    >
      <motion.h2 
      initial={{ fontSize: 80}}
      animate={{
        fontSize: 100, color: '#EEEEEE', x: 20, y: -20
      }}
      transition={{ duration: 2}}
      >
        Welcome to my Website
      </motion.h2> 
    </HomeContainer>
  )
}

export default Intro;
