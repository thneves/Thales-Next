import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import { motion } from "framer-motion";

interface Props {
  title: string,
  icon: ReactNode,
  list: Array<string>
}

const StyledH3 = styled.h3`
  color: ${colors.primaryColor};
  font-weight: lighter;
  text-align: center;
  font-size: 22px;
  width: 100%;
  height: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.primaryColor};
`

const IconDiv = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 5%;
  color: ${colors.primaryColor};
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  `;
  
  const StyledItem = styled.li`
  color: ${colors.lightText};
  font-size: 18px;
  margin-bottom: 5px;
`;

const StyledDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 40px auto 50px auto;
  border: 1px solid ${colors.primaryColor};
  border-radius: 22px ;
  padding: 20px;
  background-color: ${colors.darkColor};
`;

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
