import styled from "styled-components";
import { motion } from "framer-motion";
import { RiGithubLine, RiBracesFill, RiLinkedinLine } from "react-icons/ri";
import { colors } from "../constants/styledVariables";

const StyledFooter = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 4%;
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  transition: 0.6s;
  font-size: 32px;
  padding: 12px 0;
  color: ${colors.lightText};

  &:hover {
    color: ${colors.primaryColor};
    margin-left: 8px;
  }
`;

const Rule = styled.hr`
  height: 300px;
  width: 2px;
  background-color: ${colors.lightText};
`;

const Footer = () => {
  const links = [
    {
      url: "https://github.com/thneves/Thales-Next",
      icon: RiBracesFill,
    },
    {
      url: "https://github.com/thneves",
      icon: RiGithubLine,
    },
    {
      url: "https://www.linkedin.com/in/thales-neves10/",
      icon: RiLinkedinLine,
    },
  ];

  return (
    <>
      <StyledFooter
        initial={{ y: 100, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {links.map((link, index) => {
          return (
            <StyledLink key={index} href={link.url} target="_blank">
              <link.icon />
            </StyledLink>
          );
        })}
        <Rule />
      </StyledFooter>
    </>
  );
};

export default Footer;
