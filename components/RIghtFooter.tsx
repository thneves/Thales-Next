import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";
import Rule from "./Rule";


const StyledFooter = styled(motion.div)`
position: fixed;
  bottom: 0;
  right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Email = styled.a`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  color: ${colors.lightText};
  transition: 0.5s;
  position: relative;
  
  span {
    color: ${colors.primaryColor};
    font-size: 22px;
    position: relative;
  }
  
  &:hover {
    color: ${colors.primaryColor};
    cursor: pointer;
    margin-bottom: 12px;
  }

`;

const RightFooter = () => {
  return (

      <StyledFooter
        initial={{ y: -100, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Email href="mailto:tsneves11@gmail.com">
          tsneves11<span>@</span>gmail.com
        </Email>
        <Rule />
      </StyledFooter>
  );
};

export default RightFooter;
