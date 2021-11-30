import { useState } from "react";
import styled from "styled-components";
import Image from "next/image"
import { motion } from "framer-motion";
import { tags } from "../constants/tags";
import SearchImg from "../public/search.png";
import { animate } from "tsparticles";


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
  border-radius: 12px;
`

const StyledDivTags = styled.div`
  display: flex;
  margin: 0 auto;
`

const SearchText = styled(motion.p)`
  font-size: 20px;
  font-weight: lighter;
  font-style: italic;
  color: white;
  text-shadow: 0px 0px 2px rgb(255, 255, 255);

`

const Search = () => {

  const [tag, setTag] = useState("");

  return (
    <SearchBox>
      <Image src={SearchImg} alt="binocru" width={64} height={64} layout="fixed" />
      <SearchText
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 2}}
      >Check something that interests you :)</SearchText>
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
}

export default Search;