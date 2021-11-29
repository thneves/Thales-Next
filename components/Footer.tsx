import styled from "styled-components";
import { RiGithubLine, RiBracesFill, RiLinkedinLine} from "react-icons/ri";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 25px;
  padding: 20px 0;
  bottom: 0;
  background-color: pink;


  a {
    transition: 0.6s;
    font-size: 20px;
    margin: 10px 0;

    &:hover {
    font-size: 28px;
    color: #fff;
    }
  }
`

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
    }
  ]

  return (
    <StyledFooter>
     {links.map((link, index) => {
       return <a key={index} href={link.url} target="_blank">
         <link.icon />
       </a>
     })}
    </StyledFooter>
  )
}

export default Footer;