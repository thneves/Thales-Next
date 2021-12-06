import styled from "styled-components";
import SkillsCard from "../components/SkillsCard";
import { RiCodeBoxFill, RiGitMergeLine, RiToolsFill } from "react-icons/ri";
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
          <SkillsCard title="Languages and Frameworks" icon={<RiCodeBoxFill size="4x" />} list={skills.langs_frams} />
          <SkillsCard title="Libraries" icon={<RiGitMergeLine size="4x" />} list={skills.libs_tools} />
          <SkillsCard title="Tools and Methods" icon={<RiToolsFill size="4x" />} list={skills.soft} />
        </SkillsDiv>
      </MainDiv>
    </BasicLayout>
  )
}

export default Skills;