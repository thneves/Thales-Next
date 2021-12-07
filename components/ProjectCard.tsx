import styled from "styled-components";
import { colors } from "../constants/styledVariables";
import Image from "next/image";

const ProjectContainer = styled.div`
  background-color: ${colors.primaryColor};
`;

const ScreenShot = styled(Image)`

`

const ProjectsCard = () => {
  return (
    <ProjectContainer>

    </ProjectContainer>
  )
};


export default ProjectsCard;
