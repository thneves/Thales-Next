import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BasicLayout from "../layout/Basic";

const Home = () => {
  return (
    <BasicLayout>
      <Navbar />
      <Footer />
    </BasicLayout>
  )
};

export default Home;