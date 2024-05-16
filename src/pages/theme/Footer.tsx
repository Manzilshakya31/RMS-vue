import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    // <div className="footer grid grid-cols-3 py-[80px] px-[200px]">
    <div className="footer flex gap-10 pb-[80px] px-[200px]">
      <div className="w-[250px]">
        <h1 className=" text-[24px] font-medium">Main</h1>
        <ul className=" text-[16px]">
          <li>
            <Link to={"/landing"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
          <li>
            <Link to={"/"}>Sign In</Link>
          </li>
        </ul>
      </div>
      <div className="w-[550px]">
        <h1 className=" text-[24px] font-medium">About Us</h1>
        <p className=" text-[16px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit itaque voluptatibus eligendi a excepturi porro vel
          molestias assumenda ab ad quia laboriosam, voluptates quas,
          necessitatibus unde nesciunt at natus non. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          eligendi voluptatibus nesciunt aliquam ad unde ea earum sed, quod
          provident, illum possimus nisi at velit assumenda minima suscipit
          quisquam odio!
        </p>
      </div>
      <div className="w-[450px] ml-[150px]">
        <h1 className=" text-[24px] font-medium">Contact Us</h1>
        <p className=" text-[16px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit itaque voluptatibus eligendi a excepturi porro vel
          molestias assumenda ab ad quia laboriosam, voluptates quas,
          necessitatibus unde nesciunt at natus non.
        </p>
        <div className="grid grid-cols-4 mt-5">
          <div>
            <SocialIcon url="www.facebook.com" />
          </div>
          <div>
            <SocialIcon url="www.twitter.com" />
          </div>
          <div>
            <SocialIcon url="www.instagram.com" />
          </div>
          <div>
            <SocialIcon url="www.discord.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
