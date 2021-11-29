import styled from "styled-components";
import Navbar from "../components/Navbar";
import BasicLayout from "../layout/Basic";


const Title = styled.h1`
  color: aqua;
  font-size: 60px;
`

const Home = () => {
  return (
    <BasicLayout>
      <Navbar></Navbar>
      <Title>Hello</Title>
    </BasicLayout>
  )
};

export default Home;