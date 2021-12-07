import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa"
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
  border-top-left-radius: 3%;
  background: ${colors.darkColor};
  color: ${colors.primaryColor};
  font-size: 15px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border-top-left-radius: 50%;
  }
`

const StyledIcon = styled(FaSearch)`
  font-size: 52px;
  color: ${colors.primaryColor};
  transition: 0.6s;
`

const StyledDivTags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
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
    <StyledIcon />
      <SearchText
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 2}}
      >Look for projects that interests you :)</SearchText>
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