import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";

const RightSide = styled(motion.div)`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 40px;
  z-index: 10;

`

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Email = styled.a`
  margin: 20px auto;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
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
    <RightSide
      initial={{ y: -100, opacity: 0.2 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <StyledFooter>
        <Email href="mailto:tsneves11@gmail.com">
          tsneves11<span>@</span>gmail.com
        </Email>
      </StyledFooter>
    </RightSide>
  );
};

export default RightFooter;
