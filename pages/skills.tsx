import styled from "styled-components";
import SkillsCard from "../components/SkillsCard";
import BasicLayout from "../layout/Basic";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkillsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`


const Skills = () => {
  return (
    <BasicLayout>
      <MainDiv>
        <h1>More information about what I know</h1>
        <SkillsDiv>
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
        </SkillsDiv>
    </MainDiv>
    </BasicLayout>
  )
}

export default Skills;