import styled from "styled-components";
import { motion } from "framer-motion";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

const HomeContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: pink;
`

const Intro = () => {
  return (
    <HomeContainer 
       initial={{ opacity: 0}}
       animate={{ opacity: 1}}
       transition={{ duration: 2}}
    >
      <motion.h2 
      initial={{ fontSize: 80}}
      animate={{
        fontSize: 100, color: '#806565', x: 20, y: -20
      }}
      transition={{ duration: 2}}
      >
        Welcome to my Website
      </motion.h2> 
    </HomeContainer>
  )
}

export default Intro;
