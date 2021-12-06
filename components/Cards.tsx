import styled from "styled-components";

const Styled1 = styled.h3`
  font-size: 50px;
  color: #fff;
`

interface CardsProps {
  name: string,
  tags: Array<string>,
}

const Cards: React.FC<CardsProps> = ({name, tags}) => {
  return (
    <div>
      <Styled1>{name}</Styled1>
      <h4>{tags}</h4>  
    </div>
  ) 
}

export default Cards;
