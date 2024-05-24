import { Link } from "react-router-dom";
import logo from "/vite.svg";
// import { PicLeftOutlined } from "@ant-design/icons";
// import { showSuccessMessage } from "../../utils/notification";

const LHeader = () => {
  //   const navigate = useNavigate();
  //   const logout = () => {
  //     showSuccessMessage("Logout successful");
  //     localStorage.removeItem("isLogin");
  //     navigate("/login");
  //   };
  return (
    <div className="flex header h-[86px]">
      <div>
        <img src={logo} alt="" width={60} className="my-[15px] mx-[40px]" />
      </div>
      <div>
        <ul className="text-black flex lg:gap-[80px] gap-[50px] text-[20px] mt-[30px] xl:ml-[1050px] lg:ml-[150px] header-nav ">
          {/* <li>
            <Link to={"/landing"}>Home</Link>
          </li> */}
          {/* <li>
            <Link to={"/"}>About Us</Link>
          </li>
          <li>
            <Link to={"/"}>Media</Link>
          </li> */}
          <li>
            <Link
              to={"/login"}
              className="hover:text-[#6140ef] hover:font-medium"
            >
              Log In
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-[25px] right-10 absolute">
        <button
          type="button"
          className="bg-[#6140ef] text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-solid hover:shadow-2xl"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LHeader;
