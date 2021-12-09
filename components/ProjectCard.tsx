import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import ProjectImg from '../public/static/images/js-city-weather.png';
import 'remixicon/fonts/remixicon.css'
import Image from "next/image";

const ProjectContainer = styled.div`
  margin: 50px auto;
  width: fit-content;
  display: flex;
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
    opacity: 0.7;
    transition: ease-in-out 0.9s;

    &:hover {
      opacity: 0;
      cursor: pointer;
    }
  }
`;

const InfoDiv = styled.div`
  color: ${colors.lightText};
  width: 300px;
  height: 122px;
  right: 6%;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  margin-right: 4%;
    
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
    align-self: flex-end;
    margin: 0;

    &:hover {
      color: ${colors.primaryColor};
    }
  }
`;

const Description = styled.p`
  color: ${colors.lightText};
  font-size: 18px;
  text-shadow: 0px 0px 4px ${colors.darkerColor};
  text-align: justify;
  width: 420px;
  position: absolute;
  right: 0;
  bottom: 30%;
  z-index: 2;
  padding: 16px;
  background-color: ${colors.darkColor};
  opacity: 0.9;
  border-radius: 5px;
`;

const ProjectTags = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  bottom: 22%;

  span {
    font-size: 14px;
    font-variant: small-caps;
    margin-left: 12px;

    ${colors.lightText}
  }
`;

const ExternalLinks = styled.div`
  text-align: end;
  position: absolute;
  bottom: 5%;
  right: 0;

  span {
    margin-left: 20px;
    &:hover {
      color: ${colors.primaryColor};
    }
  }
`

// Description = 496x122
//

interface Props {
  title: string,
  description: string | undefined,
  tags: Array<string>,
  live: string,
  source: string
}

const ProjectsCard: React.FC<Props> = ({title, description, tags, live, source}) => {
  return (
    <ProjectContainer>
      <ScreenShot >
        <Image src={ProjectImg} width="540" height="360" />
        <div></div>
      </ScreenShot>
      <InfoDiv>
          <TitleDiv>
            <h6>Project</h6>
            <h5>{title}</h5>
          </TitleDiv>
          <Description>
            {description}
          </Description>
          <ProjectTags>
            {tags}
          </ProjectTags>
          <ExternalLinks>
            <a href={source} target="_blank">
              <i className="ri-github-line ri-2x"></i>
            </a>
            <a href={live} target="_blank">
              <i className="ri-external-link-line ri-2x"></i>
            </a>
          </ExternalLinks>
      </InfoDiv>
    </ProjectContainer>
  )
};

export default ProjectsCard;
