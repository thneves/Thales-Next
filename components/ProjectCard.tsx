import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import { ReactNode } from "react";

const ProjectContainer = styled.div<SideProps>`
  margin: 40px auto 80px auto;
  width: fit-content;
  display: flex;
  flex-direction: ${(props) => (props.side ? "row-reverse" : "row")};
  position: relative;
`;

const ScreenShot = styled.a`
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${colors.primaryColor};
    opacity: 0.85;
    transition: ease-in-out 0.5s;

    &:hover {
      opacity: 0;
      cursor: pointer;
    }
  }
`;

const InfoDiv = styled.div<SideProps>`
  color: ${colors.lightText};
  width: 400px;
  height: 122px;
  right: ${(props) => (!props.side ? "6%" : "0")};
  left: ${(props) => (props.side ? "6%" : "0")};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div<SideProps>`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  align-items: ${(props) => (props.side ? "flex-start" : "flex-end")};
  gap: 2px;

  h6 {
    color: ${colors.primaryColor};
    font-size: 21px;
    text-decoration: underline;
    padding-bottom: 3px;
    margin: 20px 0 10px 0;
  }

  h5 {
    color: ${colors.lightText};
    font-size: 28px;
    /* align-self: flex-end; */
    align-self: ${(props) => (!props.side ? "flex-end" : "flex-start")};
    margin: 0;

    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;

const Description = styled(motion.p)<SideProps>`
  color: ${colors.lightText};
  font-size: 17px;
  text-shadow: 0px 0px 4px ${colors.darkerColor};
  text-align: justify;
  width: 480px;
  position: absolute;
  /* right: 0; */
  right: ${(props) => (!props.side ? "0" : "none")};
  left: ${(props) => (props.side ? "0" : "none")};
  bottom: 30%;
  z-index: 2;
  padding: 16px;
  background-color: ${colors.darkColor};
  opacity: 0.9;
  border-radius: 5px;
`;

const ProjectTags = styled.div<SideProps>`
  width: fit-content;
  position: absolute;
  right: ${(props) => (!props.side ? "0" : "none")};
  left: ${(props) => (props.side ? "0" : "none")};
  bottom: 22%;

  span {
    font-size: 14px;
    font-variant: small-caps;
    font-weight: bold;
    margin-right: ${(props) => (props.side ? "18px" : "0")};
    margin-left: ${(props) => (!props.side ? "18px" : "0")};
    color: ${colors.primaryColor};
  }
`;

const ExternalLinks = styled(motion.div)<SideProps>`
  text-align: end;
  position: absolute;
  bottom: 5%;
  right: ${(props) => (!props.side ? "0" : "none")};
  left: ${(props) => (props.side ? "0" : "none")};

  a {
    margin-right: ${(props) => (props.side ? "20px" : 0)};
    margin-left: ${(props) => (!props.side ? "20px" : 0)};
    transition: ease-in 0.4s;
    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;

interface Props {
  title: string;
  description: string | undefined;
  tags: ReactNode;
  live: string;
  source: string;
  image: string;
  sideProp: boolean;
  key: Number;
}

interface SideProps {
  side: boolean;
}

const ProjectsCard: React.FC<Props> = ({
  title,
  description,
  tags,
  live,
  source,
  image,
  sideProp,
}) => {
  return (
    <ProjectContainer side={sideProp}>
      <ScreenShot>
        <Image src={image} width="540" height="360" alt="project screenshot"/>
        <div />
      </ScreenShot>
      <InfoDiv side={sideProp}>
        <TitleDiv side={sideProp}>
          <h6>Project</h6>
          <h5>{title}</h5>
        </TitleDiv>
        <Description
          side={sideProp}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {description}
        </Description>
        <ProjectTags side={sideProp}>
          <span>{tags}</span>
        </ProjectTags>
        <ExternalLinks
          side={sideProp}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <a href={source} target="_blank" rel="noreferrer">
            <i className="ri-github-line ri-2x"></i>
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <i className="ri-external-link-line ri-2x"></i>
          </a>
        </ExternalLinks>
      </InfoDiv>
    </ProjectContainer>
  );
};

export default ProjectsCard;
