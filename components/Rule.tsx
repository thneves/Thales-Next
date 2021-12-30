import styled from "styled-components";
import { colors } from "../constants/styledVariables";

const StyledRule = styled.div`
  width: 1.1px;
  height: 220px;
  background-color: ${colors.lightText};
`

const Rule = () => {
  return (
    <StyledRule />
  )
}

export default Rule;