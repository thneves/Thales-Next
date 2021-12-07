import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../constants/styledVariables";

interface Props {
  title: string,
  icon: ReactNode,
  list: Array<string>
}

const StyledH3 = styled.h3`
  color: ${colors.primaryColor}
`

const IconDiv = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10%;
  color: ${colors.primaryColor};
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`

const StyledItem = styled.li`
  color: ${colors.lightText};
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  border-radius: 10% ;
  padding: 30px;
  background-color: ${colors.darkColor};
`

const SkillsCard: React.FC<Props> = ({ title, icon, list }) => {

  return (
    <StyledDiv>
      <IconDiv>{icon}</IconDiv>
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
