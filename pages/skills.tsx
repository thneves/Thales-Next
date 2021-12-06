import styled from "styled-components";
import Navbar from "../components/Navbar";
import SkillsCard from "../components/SkillsCard";
import BasicLayout from "../layout/Basic";

const SkillsDiv = styled.div`
  display: flex;


`


const Skills = () => {
  return (
    <BasicLayout>
    <SkillsDiv>
      <h1>More information about what I know</h1>
      
      <SkillsCard />
      <SkillsCard />
      <SkillsCard />
    </SkillsDiv>
    </BasicLayout>
  )
}

export default Skills;