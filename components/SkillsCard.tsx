import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../constants/styledVariables";

interface Props {
  title: string,
  icon: ReactNode,
  list: Array<string>
}

const StyledH3 = styled.h3`
  color: ${colors.secondaryColor};
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`

const StyledItem = styled.li`
  color: #fff;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 10% ;
  padding: 30px;
  box-shadow: 0px 0px 5px rgb(0, 255, 221);
  background-color: ${colors.primaryColor};
`

const SkillsCard: React.FC<Props> = ({ title, icon, list }) => {

  return (
    <StyledDiv>
      {icon}
      <StyledH3>{title}</StyledH3>
        <StyledList>
          {list.map((item, index) => {
            return (
              <StyledItem key={index}>{item}</StyledItem>
            )
          })}
        </StyledList>
      </StyledDiv>

  )
}

export default SkillsCard;