import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";
import { projects } from "../constants/projects";
import { tags } from "../constants/tags";
import {Tags, StyledDivTags} from "./Search";

const ModalBox = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 400px;
  margin: 0 30px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkColor};
`;

const ToggleBtn = styled(motion.button)`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primaryColor};
  padding: 0.5rem 0.8rem;
  margin-top: 3rem;
  background: ${colors.darkerColor};
  text-decoration: none;
  border: none;
  font-family: TypeWritter, sans-serif;
  border-radius: 50px;
`;

const Modal = ({ showModal, closeModal }: any) => {

  const router = useRouter();

  const handleSearchTag = (event: any) => {
    event.preventDefault();
    let currentTag = event.target.innerText.toLowerCase();
    projects.map((project) => {
      project.searchTags.includes(currentTag) ? project.featured = true : project.featured = false;
    })
    // console.log(currentTag);
    router.push('/projects');
  }

  return (
    <AnimatePresence>
        {showModal && (
          <ModalBox
            initial={{opacity:0, y: 200, scale: 0.2}}
            animate={{ opacity:1, y: 0, scale: 1}}
            transition={{ type:"sprng", stiffness: 300}}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.7 }}}
          >

                      <StyledDivTags>
                    {tags.map((item, index) => {
                      return (
                        <Tags
                          key={index}
                          onClick={handleSearchTag}
                          initial={{ y: 100 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {item}
                        </Tags>
                      );
                    })}
                  </StyledDivTags>
            <ToggleBtn onClick={closeModal}>X</ToggleBtn>
          </ModalBox>
        )}
      </AnimatePresence>
  )
}

export default Modal;