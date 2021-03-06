import React  from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { tags } from "../constants/tags";
import { colors } from "../constants/styledVariables";
import { projects } from "../constants/projects";

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 540px;
`;

export const Tags = styled(motion.button)`
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
    border-top-left-radius: 45%;
    text-shadow: 0 0 10px ${colors.primaryColor};
    box-shadow: -2px -2px 3px 1px ${colors.primaryColor}
  }
`;

const StyledIcon2 = styled(FaSearch)`
  font-size: 42px;
  color: ${colors.primaryColor};
  transition: 1s;

  &:hover {
    background-color: ${colors.primaryColor};
    font-size: 42px;
    border-radius: 50%;
    color: ${colors.darkerColor};
    padding: 20px;
  }
`;

export const StyledDivTags = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
`;

const SearchText = styled(motion.p)`
  font-size: 24px;
  font-weight: 300;
  font-style: oblique;
  opacity: 0.8;
  color: ${colors.lightText};
`;

const Rule = styled(motion.hr)`
  height: 100px;
  width: 4px;
  background-color: ${colors.primaryColor};
  position: fixed;
  bottom: 0;
  left: 50%;
`;


const Search = () => {

  const router = useRouter();

  const handleSearchTag = (event: any) => {
    event.preventDefault();
    let currentTag = event.target.innerText.toLowerCase();
    projects.map((project) => {
      project.searchTags.includes(currentTag) ? project.featured = true : project.featured = false;
    })
    // console.log(currentTag);
    router.push('/projects');
  }

  return (
    <>
      <SearchBox>
        <StyledIcon2 />
        <SearchText
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          Look for projects that interests you :)
        </SearchText>
        <StyledDivTags>
          {tags.map((item, index) => {
            return (
              <Tags
                key={index}
                onClick={handleSearchTag}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {item}
              </Tags>
            );
          })}
        </StyledDivTags>
      </SearchBox>
      <Rule
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      />
    </>
  );
};

export default Search;
