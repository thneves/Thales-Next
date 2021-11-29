import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ILink {
    href: string;
}

const Header = styled(motion.header)`
    height: 10vh;
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

    li {
        transition: 0.5s;
        padding: 8px;
        
        &:hover {
            border-radius: 6px;
            background-color: #548CA8;
            opacity: 0.6;
        }
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
        <Nav>
            <li>
                <Link href="/" >Home </Link>
            </li>
            <li>
                <Link href="/projects" >Projects </Link>
            </li>
            <li>
                <Link href="/articles" >Articles</Link>
            </li>
            <li>
                <Link href="/about" >About</Link>
            </li>
        </Nav>
        </Header>
      </div>
  );
};

export default Navbar;
