import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BasicLayout from "../layout/Basic";

const Box = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vh;

  h3 {
    margin: 0 auto;
    font-size: 25px;
    color: white;
  }

  p {
    font-size: 22px;
    color: white;
  }
`;


const Home = () => {
  return (
    <BasicLayout>
      <Navbar />
        <Box>
          <h3>Hey, I'm Thales! I'm glad you're here</h3>
          <p>I am a full stack developer with a look into front end development. 
            I love building interfaces and user experience. Here you can find
            some of my projects and more. If you see something you like don't
            hesitate in getting in contact.
          </p>
        </Box>
      <Footer />
    </BasicLayout>
  )
};

export default Home;