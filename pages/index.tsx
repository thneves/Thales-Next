import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import BasicLayout from "../layout/Basic";

const Home = () => {
  return (
    <BasicLayout>
      <Navbar />
      <Intro />
      <Footer />
    </BasicLayout>
  )
};

export default Home;