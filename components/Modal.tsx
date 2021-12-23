import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";

const ModalBox = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkColor};
`;

const ModalContent = styled(motion.div)`
  padding: 5px;
`;

const ToggleBtn = styled(motion.button)`
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  padding: 0.5rem 0.8rem;
  margin-top: 3rem;
  background: #3bb75e;
  text-decoration: none;
  border: none;
  border-radius: 50px;
`;

const Modal = ({ showModal, closeModal }: any) => {
  return (
    <AnimatePresence>
        {showModal && (
          <ModalBox
            initial={{opacity:0, y: 60, scale: 0.5}}
            animate={{ opacity:1, y: 0, scale: 1}}
            transition={{ type:"sprng", stiffness: 300}}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 }}}
          >
            <ModalContent
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.5 }}}
            >
              <p>Olá amigus</p>
            </ModalContent>
            <ToggleBtn onClick={closeModal}>Close Modal</ToggleBtn>
          </ModalBox>
        )}
      </AnimatePresence>
  )
}

export default Modal;