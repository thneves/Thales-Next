import styled from "styled-components";
import { motion} from "framer-motion";
import Backdrop from "./Backdrop";
import { colors } from "../constants/styledVariables";
import { ReactNode } from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },

  exit: {
    y: "100vh",
    opacity: 0,
  },
}

const StyledDiv = styled(motion.div)`
  background: ${colors.primaryColor};
`

interface IModal {
  handleClose: React.MouseEventHandler;
}

const Modal: React.FC<IModal> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledDiv
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          oi oi oi oi 
        </div>

      </StyledDiv>

    </Backdrop>
  )
}

export default Modal;