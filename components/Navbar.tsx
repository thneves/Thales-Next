import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ILink {
    href: string;
}

const Header = styled(motion.header)`
    height: 7vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #334257;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    color: #eeeeee;
`;

const StyledList = styled(motion.li)`
    padding: 8px;
    transition: 0.3s;
    border-radius: 10px;

    &:hover {
        background: #476072;
       text-shadow: 0px 0px 2px rgb(255, 255, 255);
        box-shadow: 0px 0px 8px rgb(255, 255, 255);
        cursor: pointer;
    }
`

const Navbar = () => {


  return (
      <div>
        <Header
            initial={{ y: -30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
        <Nav>
            <StyledList>
                <Link href="/" >Home </Link>
            </StyledList>
            <StyledList>
                <Link href="/projects" >Projects </Link>
            </StyledList>
            <StyledList>
                <Link href="/articles" >Articles</Link>
            </StyledList>
            <StyledList>
                <Link href="/about" >About</Link>
            </StyledList>
        </Nav>
        </Header>
      </div>
  );
};

export default Navbar;
