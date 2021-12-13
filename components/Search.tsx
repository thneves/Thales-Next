import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { tags } from "../constants/tags";
import { colors } from "../constants/styledVariables";

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 540px;
`;

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

const StyledIcon = styled(Image)`
  transition: 1s;

  &:hover {
    background-color: ${colors.primaryColor};
    border-radius: 50%;
    color: ${colors.darkerColor};
  }
`;

const StyledDivTags = styled.div`
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
          {tags.map((item) => {
            return (
              <Tags
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
