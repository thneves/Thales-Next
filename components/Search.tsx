import { useState } from "react";
import styled from "styled-components";
import Image from "next/image"
import { motion } from "framer-motion";
import { tags } from "../constants/tags";
import SearchImg from "../public/search.png";


const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Tags = styled(motion.button)`
  padding: 8px;
  border: 1px solid white;
  border-radius: 12px;
`

const StyledDivTags = styled.div`
  display: flex;
  margin: 0 auto;
`

const Search = () => {

  const [tag, setTag] = useState("");

  return (
    <SearchBox>
    <Image src={SearchImg} alt="binocru" width={64} height={64} layout="fixed" />
        <StyledDivTags>
        {tags.map(item => {
        return <Tags>{item}</Tags>
      })}
    </StyledDivTags>
    </SearchBox>
  )
}

export default Search;