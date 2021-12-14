import styled from "styled-components";
import { useRouter } from "next/router";
import BasicLayout from "../layout/Basic";
import { projects } from "../constants/projects";
import Heading from "../components/Heading";
import ProjectsCard from "../components/ProjectCard";
import FilterButton from "../components/FilterButton";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {

  const router = useRouter();

  const renderProjects = projects.map((project, index) => {
    if (project.featured) {
      return (
        <ProjectsCard
          sideProp={index % 2 === 0 ? true : false}
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          live={project.live}
          source={project.source}
          image={project.image}
        />
      );
    }
  });

  const handleReset = () => {
    projects.map(project => {
      if(project.searchTags.includes('featured')) {
        project.featured = true;
      }
    });
  }

  return (
      <BasicLayout>
        <WrapperDiv>
          <Heading word="Built"></Heading>
          <FilterButton handleReset={handleReset} />
          {renderProjects}
        </WrapperDiv>
      </BasicLayout>
  );
};

export default Projects;
