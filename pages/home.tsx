import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import BasicLayout from "../layout/Basic";
import AnimatedText from "../components/AnimatedText";
import HandImg from "../assets/hands.png";
import Image from "next/image";

const Box = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vh;
`;

const StyledH2 = styled.div`
  text-align: center;
  font-size: 28px;
  color: #334257;
`

const Home = () => {

  return (
    <BasicLayout>
      <Navbar />
        <Box>
          {/* <Image src={HandImg} /> */}
          <AnimatedText />
        </Box>
        <Search />  
      <Footer />
    </BasicLayout>
  )
};

export default Home;