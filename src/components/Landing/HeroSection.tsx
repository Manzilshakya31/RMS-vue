// import landhomepage from "/images/1st page.png";
// import gifhome from "/images/gifhome.gif";

// import healthy from "/images/healthy-sandwich-with-red-onion-parsley.png";
import hp from "/images/hp.png";

const HeroSection = () => {
  return (
    // <div className="">
    <div className="h-[582px]">
      <div className="grid grid-cols-2">
        {/* <div className="grid grid-cols-2"> */}
        {/* <img
          src={landhomepage}
          height={1080}
          alt="photo"
          className="landingpic"
        /> */}
        <div className=" flex flex-col justify-center ml-[160px]">
          <h1 className="text-[64px] font-semibold ">
            Modern
            <br />
            <span className="text-[#6140ef]">Restaurant </span>
            Booking <br />
            System
          </h1>
          <button className="hover:bg-slate-300 hover:shadow-lg bg-[#6140ef] text-white hover:text-[black] md:py-3 py-3 px-8 mt-[20px] w-[160px] rounded-lg flex items-center gap-2 text-lg max-md:w-full max-md:justify-center">
            Get Started
          </button>
        </div>
        <div>
          <img src={hp} alt="" width={800} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
