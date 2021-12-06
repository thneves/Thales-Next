import styled from "styled-components";
import { FaBeer } from "react-icons/fa"

const StyledH3 = styled.h3`
  color: blue;
`

const SkillsCard = ( ) => {

  return (
    <div>
      <FaBeer />
      <StyledH3>Languages and Frameworks</StyledH3>
      <div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>

    </div>
  )
}

export default SkillsCard;