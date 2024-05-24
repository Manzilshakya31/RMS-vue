import Already from "../../components/Landing/Already";
import BestItem from "../../components/Landing/BestItem";
import HeroSection from "../../components/Landing/HeroSection";
import Info from "../../components/Landing/Info";
import Menu from "../../components/Landing/Menu";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <BestItem />
      <Menu />
      <Info />
      <Already />
    </div>
  );
};

export default LandingPage;
