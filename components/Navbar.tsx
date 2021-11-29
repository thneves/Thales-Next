import styled from "styled-components";
import Link from "next/link";

export interface ILink {
    href: string;
}

const Header = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #334257;
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    color: #eeeeee;
`;

const Navbar = () => {
  return (
      <div>
        <Header>
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
