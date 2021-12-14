import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../constants/styledVariables";

const StyledFooter = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 4%;
`;

const Rule = styled.hr`
  height: 200px;
  width: 2px;
  background-color: ${colors.lightText};
`;

const Email = styled.a`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${colors.lightText};
  writing-mode: vertical-lr;
  text-orientation: sideways;
  transition: 0.5s;

  &:hover {
    color: ${colors.primaryColor};
    cursor: pointer;
    margin-right: 8px;
  }

  span {
    color: ${colors.primaryColor};
    font-size: 22px;
  }
`;

const RightFooter = () => {
  return (
    <>
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
    </>
  );
};

export default RightFooter;
