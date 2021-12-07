import styled from "styled-components";
import BasicLayout from "../layout/Basic";

const Title = styled.h1`
   color: green;
   font-size: 40px;
`;

const Projects = () => {
    return (
        <BasicLayout>
            <Title>Here I will show my projects</Title>
        </BasicLayout>
    )
}

export default Projects;