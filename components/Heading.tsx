import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../constants/styledVariables";

const Title = styled.h1`
  color: ${colors.lightText};
  font-size: 30px;
  text-align: center;
  margin: 30px auto;
  padding-bottom: 10px;
  letter-spacing: 2px;
  border-bottom: 1px solid ${colors.primaryColor};
  width: 30%;
`;

interface Props  {
  word: ReactNode;
}

const Heading: React.FC<Props> = ( props ) => {

    return <Title>Things I've {props.word}</Title>
}

export default Heading;