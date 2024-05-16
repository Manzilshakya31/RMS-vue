import Already from "../../components/Landing/Already";
import BestItem from "./BestItem";
import HeroSection from "./HeroSection";
import Info from "./Info";
import Menu from "./Menu";

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
