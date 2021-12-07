import styled from "styled-components";
import { motion } from "framer-motion";
import { tags } from "../constants/tags";
import { colors } from "../constants/styledVariables";


const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Tags = styled(motion.button)`
  width: 100px;
  padding: 8px;
  margin: 3px;
  border: 1px solid ${colors.primaryColor};
  border-radius: 10%;
  background: ${colors.darkColor};
  color: ${colors.primaryColor};
  font-size: 15px;

  &:hover {
    border: none;
    cursor: pointer;
  }
`

const StyledDivTags = styled.div`
  display: flex;
  margin: 0 auto;
`

const SearchText = styled(motion.p)`
  font-size: 24px;
  font-weight: lighter;
  color: ${colors.lightText};
`

const Search = () => {

  return (
    <SearchBox>
      <SearchText
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 2}}
      >Check for something that interests you :)</SearchText>
      <StyledDivTags>
        {tags.map(item => {
        return <Tags
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, repeat: 1 }}
          >{item}</Tags>
        })}
      </StyledDivTags>
    </SearchBox>
  )
};


export default Search;