import { IconType } from "react-icons/lib";
import styled from "styled-components";


interface Props {
  title: string,
  icon: IconType,
  list: Array<string>
}

const StyledH3 = styled.h3`
  color: blue;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 10% ;
  padding: 30px;
  box-shadow: 0px 0px 5px rgb(0, 255, 221);
`

const SkillsCard: React.FC<Props> = ({ title, icon, list } ) => {

  return (
    <StyledDiv>
      <i>{icon}</i>
      <StyledH3>{title}</StyledH3>
        <ul>
          {list}
        </ul>
      </StyledDiv>

  )
}

export default SkillsCard;