import styled from "styled-components";
import { motion } from "framer-motion";
import { RiGithubLine, RiBracesFill, RiLinkedinLine} from "react-icons/ri";

const StyledFooter = styled(motion.footer)`
  display: flex;
  justify-content: center;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  gap: 25px;
  padding: 20px 0;
  background-color: #334257;

  a {
    transition: 0.6s;
    font-size: 28px;
    margin: 10px 0;
    color: #eeeeee;

    &:hover {
    color: #548CA8;
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
    <StyledFooter
      initial={{ y: 50, opacity: 0.2}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
     {links.map((link, index) => {
       return <a key={index} href={link.url} target="_blank">
         <link.icon />
       </a>
     })}
    </StyledFooter>
  )
}

export default Footer;