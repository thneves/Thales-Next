import styled from "styled-components";
import ProjectsCard from "../components/ProjectCard";
import BasicLayout from "../layout/Basic";
import { colors } from "../constants/styledVariables";

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
`

const Projects = () => {
    return (
        <BasicLayout>
            <WrapperDiv>
            <Title>
                Things I've created
            </Title>
            <ProjectsCard />
            </WrapperDiv>
        </BasicLayout>
    )
}

export default Projects;