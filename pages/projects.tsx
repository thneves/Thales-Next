import styled from "styled-components";
import ProjectsCard from "../components/ProjectCard";
import BasicLayout from "../layout/Basic";
import { projects } from "../constants/projects";
import Heading from "../components/Heading";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const renderProjects = projects.map((project, index) => {
    if (project.featured) {
      return (
        <ProjectsCard
          sideProp={index % 2 === 0 ? true : false}
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags.map((item) => (
            <span>{item}</span>
          ))}
          live={project.live}
          source={project.source}
          image={project.image}
        />
      );
    }
  });

  return (
    <BasicLayout>
      <WrapperDiv>
        <Heading word="Built"></Heading>
        {renderProjects}
      </WrapperDiv>
    </BasicLayout>
  );
};

export default Projects;
