import styled from "styled-components";

const Styled1 = styled.h3`
  font-size: 50px;
  color: green;;
`

interface CardsProps {
  name: string,
  tags: Array<string>,
}

const Cards: React.FC<CardsProps> = ({name, tags}) => {
  return (
    <>
    <Styled1>{name}</Styled1>
    <h4>{tags}</h4>  
    </>
  ) 
}

export default Cards;