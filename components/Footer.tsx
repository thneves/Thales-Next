import styled from "styled-components";
import { RiGithubLine, RiBracesFill, RiLinkedinBoxLine} from "react-icons/ri";

const StyledFooter = styled.footer`
  display: flex;
  text-align: center;
  gap: 30px;
`

const Footer = () => {

  const links = [
    {
      title: "Source",
      url: "https://github.com/thneves/Thales-Next",
      icon: RiBracesFill,
    },
    {
      title: "Github",
      url: "https://github.com/thneves",
      icon: RiGithubLine
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/thales-neves10/",
      icon: RiLinkedinBoxLine
    }
  ]

  return (
    <StyledFooter>
     {links.map((link, index) => {
       return <a key={index} href={link.url} target="_blank">
         <span>{link.title}</span>
         {link.icon}
       </a>
     })}
    </StyledFooter>
  )
}

export default Footer;