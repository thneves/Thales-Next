import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

import { colors } from "../constants/styledVariables";

export interface ILink {
  href: string;
}

const Header = styled(motion.header)`
  height: 7vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.darkColor};
`;

const Logo = styled.div`
  font-size: 50px;
  color: ${colors.primaryColor};
  position: absolute;
  left: 4%;
  top: 1%;
  font-family: CostaRica;
  transition: 0.6s;

  &:hover {
    text-shadow: 0px 0px 20px ${colors.primaryColor};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 13px;
`;

const StyledList = styled(motion.li)`
  padding: 8px 20px;
  transition: 0.3s;
  border-radius: 10px;
  margin: 0 5px;

  font-size: 20px;
  color: ${colors.primaryColor};
  transition: 0.6s;

  &:hover {
    background: ${colors.darkerColor};
    opacity: 0.8;
    box-shadow: 0px 0px 8px ${colors.primaryColor};
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <div>
      <Header
        initial={{ y: -30, opacity: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Logo>
          <Link href="/">T</Link>
        </Logo>
        <Nav>
          <StyledList>
            <Link href="/">Home </Link>
          </StyledList>
          <StyledList>
            <Link href="/projects">Portfolio </Link>
          </StyledList>
          <StyledList>
            <Link href="/skills">Skills</Link>
          </StyledList>
        </Nav>
      </Header>
    </div>
  );
};

export default Navbar;
