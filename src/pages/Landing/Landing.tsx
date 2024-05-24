import Already from "../../components/Landing/Already";
import BestItem from "../../components/Landing/BestItem";
import HeroSection from "../../components/Landing/HeroSection";
import Info from "../../components/Landing/Info";
import Menu from "../../components/Landing/Menu";
import Footer from "../theme/Footer";
import LHeader from "../theme/LHeader";

const Landing = () => {
  return (
    <div>
      <LHeader />
      <HeroSection />
      <BestItem />
      <Menu />
      <Info />
      <Already />
      <Footer />
    </div>
  );
};

export default Landing;
