import styled from "styled-components";
import SkillsCard from "../components/SkillsCard";
import Heading from "../components/Heading";
import 'remixicon/fonts/remixicon.css'
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
        <Heading word="Used"></Heading>
        <SkillsDiv>
          <SkillsCard title="Languages and Frameworks" icon={<i className="ri-code-box-fill ri-3x"></i>} list={skills.langs_frams} />
          <SkillsCard title="Libraries" icon={<i className="ri-npmjs-fill ri-3x"></i>} list={skills.libs_tools} />
          <SkillsCard title="Tools and Methods" icon={<i className="ri-git-merge-line ri-3x"></i>} list={skills.soft} />
        </SkillsDiv>
      </MainDiv>
    </BasicLayout>
  )
}

export default Skills;