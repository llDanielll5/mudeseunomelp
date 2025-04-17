import Hero from "../globals/components/hero";
import Footer from "../globals/components/footer";
import About from "../globals/components/about";
import Guarantee from "../globals/components/guarantee";
import FAQ from "../globals/components/faq";
import { Box } from "@mui/material";
import CountdownHeader from "../globals/components/countDownHeader";

const Home = () => {
  return (
    <Box width={"100%"}>
      <Hero />
      <CountdownHeader />
      <About />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default Home;
