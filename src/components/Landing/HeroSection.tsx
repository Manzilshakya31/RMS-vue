import landhomepage from "/images/1st page.png";

const HeroSection = () => {
  return (
    <div>
      <div className="">
        <img
          src={landhomepage}
          height={1080}
          alt="photo"
          className="landingpic"
        />
      </div>
    </div>
  );
};

export default HeroSection;
