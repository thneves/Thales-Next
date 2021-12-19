import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { colors } from "../constants/styledVariables";
import Modal from "./Modal";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StyledIcon = styled(motion.button)`
  color: ${colors.primaryColor};
  text-align: center;
  transition: 0.6s;
  background: transparent;
  border: none;
`;

const StyledIconFilter = styled(motion.button)`
  color: ${colors.primaryColor};
  text-align: center;
  transition: 0.6s;
  background: transparent;
  border: none;
`;


interface IFilters {
  handleReset: (event: React.MouseEvent) => void
}

const FilterButtons = ({ handleReset }: IFilters) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <StyledDiv>
      <StyledIconFilter
      
      onClick={() => ( modalOpen ? openModal() : closeModal() )}>
        <i className="ri-filter-fill ri-2x"></i>
      </StyledIconFilter>
      { modalOpen && <Modal handleClose={closeModal}/>}
      <StyledIcon
        onClick={handleReset}
      >
        <i className="ri-restart-fill ri-2x"></i>
      </StyledIcon>
    </StyledDiv>
  )
}

export default FilterButtons;
