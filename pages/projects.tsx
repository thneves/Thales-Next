import { useEffect } from "react";
import styled from "styled-components";
import ProjectsCard from "../components/ProjectCard";
import BasicLayout from "../layout/Basic";
import { colors } from "../constants/styledVariables";
import { projects } from "../constants/projects";

const Title = styled.h1`
  color: ${colors.lightText};
  font-size: 30px;
  text-align: center;
  margin: 30px auto;
  padding-bottom: 10px;
  letter-spacing: 2px;
  border-bottom: 1px solid ${colors.primaryColor};
  width: 30%;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const renderProjects = (
    projects.map((project, index) => {
        return (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags.map(item => <span>{item}</span>)}
            live={project.live}
            source={project.source}
            image={project.image}    
          />
        )
      })
  );

  return (
    <BasicLayout>
      <WrapperDiv>
        <Title>Things I've created</Title>
        { renderProjects }
      </WrapperDiv>
    </BasicLayout>
  );
};

export default Projects;
