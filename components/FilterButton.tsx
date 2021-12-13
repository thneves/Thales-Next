import styled from "styled-components";
import "remixicon/fonts/remixicon.css";
import { colors } from "../constants/styledVariables";
import { projects } from "../constants/projects";
import React, { useState } from "react";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StyledIcon = styled.a`
  color: ${colors.primaryColor};
  text-align: center;
  transition: 0.6s;

  &:hover {
    cursor: pointer;
    color: ${colors.lightText}
  }
`;

interface FilterProps {
  handleReset: (event: React.MouseEvent) => void
}

const FilterButton: React.FC<FilterProps> = ({ handleReset }) => {


  return (
    <StyledDiv>
      <StyledIcon>
        <i className="ri-filter-fill ri-2x"></i>
      </StyledIcon>
      <StyledIcon
        onClick={handleReset}
      >
        <i className="ri-restart-fill ri-2x"></i>
      </StyledIcon>
    </StyledDiv>
  )
};

export default FilterButton;
