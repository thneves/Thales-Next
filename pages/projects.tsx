import styled from "styled-components";
import ProjectsCard from "../components/ProjectCard";
import BasicLayout from "../layout/Basic";

const Title = styled.h1`
   color: green;
   font-size: 40px;
`;

const Projects = () => {
    return (
        <BasicLayout>
            <ProjectsCard />
        </BasicLayout>
    )
}

export default Projects;