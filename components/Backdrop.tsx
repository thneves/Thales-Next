import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";
import React from "react";

const StyledBackdrop = styled(motion.div)`
  background: ${colors.darkerColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface IBackdrop {
  onClick: React.MouseEventHandler;
}

const Backdrop: React.FC<IBackdrop> = ({ children, onClick }) => {
    return (
      <StyledBackdrop
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
      >
        { children }
      </StyledBackdrop>
    )
}

export default Backdrop;