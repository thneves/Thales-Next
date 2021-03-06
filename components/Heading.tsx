import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import { motion } from "framer-motion";

const Title = styled.h1`
  color: ${colors.lightText};
  font-size: 30px;
  text-align: center;
  margin: 40px auto 10px auto;
  padding-bottom: 10px;
  letter-spacing: 2px;
  width: 30%;
`;

const BottomLine = styled(motion.div)`
  height: 4px;
  width: 30%;
  margin: 0 auto 30px auto;
  background-color: ${colors.primaryColor};
`;

interface Props {
  word: ReactNode;
}

const Heading: React.FC<Props> = (props) => {
  return (
    <>
      <Title>Things I&apos;ve {props.word}</Title>
      <BottomLine
        initial={{ x: -100, opacity: 0, y: 50 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      />
    </>
  );
};

export default Heading;
