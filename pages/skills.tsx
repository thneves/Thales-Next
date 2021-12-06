import styled from "styled-components";
import SkillsCard from "../components/SkillsCard";
import { FaBeer } from "react-icons/fa";
import BasicLayout from "../layout/Basic";
import { skills } from "../constants/skills";

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
          <SkillsCard title="Languages and Frameworks" icon={<FaBeer />} list={skills.langs_frams} />
        </SkillsDiv>
      </MainDiv>
    </BasicLayout>
  )
}

export default Skills;