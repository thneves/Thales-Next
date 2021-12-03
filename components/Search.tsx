import { useState } from "react";
import styled from "styled-components";
import Image from "next/image"
import { motion } from "framer-motion";
import { tags } from "../constants/tags";
import SearchImg from "../public/static/images/search.png";
import { colors } from "../constants/styledVariables";
import Cards from "./Cards";
import { projects } from "../constants/projects";


const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Tags = styled(motion.button)`
  padding: 8px;
  margin: 3px;
  border: 1px solid white;
  border-radius: 10%;
  background: ${colors.primaryColor};
  color: #eee;
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
  font-size: 20px;
  font-weight: lighter;
  font-style: italic;
  color: #eee;
  text-shadow: 0px 0px 2px rgb(255, 255, 255);

`
const Search = () => {



  return (
    <SearchBox>
      <Image src={SearchImg} alt="binocru" width={64} height={64} layout="fixed" />
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
      <Cards name={projects[1].name} tags={projects[1].tags} />
    </SearchBox>
  )
};


export default Search;