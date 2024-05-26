import { IoBookmarks } from "react-icons/io5";
import girlnlaptop from "/images/girlnlaptop.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const Info = () => {
  return (
    <div className="px-[150px] flex gap-2 bg-[#5962F6] ">
      {/* #acf49c, 83b44b */}
      <div>
        <img src={girlnlaptop} alt="" width={3000} />
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-[48px] font-medium mt-5">
          Make Booking With Your Device
        </h1>
        <div className="mt-[16px] flex gap-4">
          <div className="mt-[8px]">
            {/* <img src="" alt="1" width={50} /> */}
            <IoBookmarks size={25} />
          </div>
          <div>
            <h2 className="text-[24px] font-medium">Book now</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              libero doloribus soluta eius laudantium distinctio officia
              mollitia consequuntur delectus, unde aperiam accusamus! Omnis quas
              reiciendis iste blanditiis earum accusantium ipsum.
            </p>
          </div>
        </div>
        <div className="flex gap-5 my-[32px]">
          <div className="flex gap-4 bg-black py-2 rounded-lg text-white w-[200px] justify-center">
            <div>
              {/* <img src="" alt="asd" className="" /> */}
              {/* <SocialIcon url="www.playstore.com" /> */}
              <BiLogoPlayStore size={40} />
            </div>
            <div>
              <h2>Get in on</h2>
              <p>Google Play</p>
            </div>
          </div>
          <div className="flex gap-4 bg-black py-2 rounded-lg text-white w-[200px] justify-center">
            <div>
              {/* <img src="" alt="asd" className="" /> */}
              {/* <SocialIcon url="www.appstore.com" /> */}
              <FaApple width={"50px"} size={40} />
            </div>
            <div>
              <h2>Get in on</h2>
              <p>Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
