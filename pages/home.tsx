import styled from "styled-components";
import Footer from "../components/LeftFooter";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import BasicLayout from "../layout/Basic";
import AnimatedText from "../components/AnimatedText";

const Box = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vh;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Box>
        {/* <Image src={HandImg} /> */}
        <AnimatedText />
      </Box>
      <Search />
    </BasicLayout>
  );
};

export default Home;
