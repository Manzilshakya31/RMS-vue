// import { Button } from "antd";
// import React from "react";
// import { Link } from "react-router-dom";
// import asd from "../../../public/images/asd.jpg";
// import restro from "../../../public/images/restro.jpeg";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ViTextInput from "../../components/ViTextinput";
import { showSuccessMessage } from "../../utils/notification";
import ViMessage from "../../components/ViMessage";
import ViPasswordInput from "../../components/ViPasswordInput";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleInputChange = (event: any) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  // const doLogin = (e) => {
  const doLogin = () => {
    let isLogin = false;
    if (email === "admin" && password === "admin") {
      isLogin = true;
    }

    if (isLogin) {
      showSuccessMessage("Login successful");

      localStorage.setItem("isLogin", "1");
      navigate("/landing");
    } else {
      // alert("Login failed");
      setErrorMessage("Invalid email or password!!");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "1") {
      navigate("/landing");
    }
  });
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center ml-[260px]">
        <h1 className="text-[56px] text-[#C79C60] italic font-bold">Login</h1>
        <p className="text-[18px] mt-[12px] font-medium">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-[24px]">
          {/* <p>Email</p> */}
          <div className="">
            {/* <input
              className="border-1 border-black rounded-lg w-[400px] h-[44px] text-center mt-[6px]"
              type="text"
              placeholder="Enter your email"
            /> */}
            {errorMessage && <ViMessage message={errorMessage} />}
            <ViTextInput
              title="Email"
              name="email"
              handleInputChange={handleInputChange}
              value={email}
              className="border-1 border-black rounded-lg w-[400px] h-[44px] text-center mt-[6px]"
            />
          </div>
        </div>
        <div className="mt-[24px]">
          <ViPasswordInput
            title="Password"
            name="password"
            handleInputChange={handleInputChange}
            value={password}
            className="border-1 border-black rounded-lg w-[400px] h-[44px] text-center mt-[6px]"
          />
          {/* <p>Password</p>
          <div className="">
            <input
              className="border-1 border-black rounded-lg w-[400px] h-[44px] text-center mt-[6px]"
              type="password"
              placeholder="Enter your password"
            />
          </div> */}
        </div>

        <Link to={"/"} className="flex justify-end mt-[16px]">
          Forgot Password?
        </Link>

        <button
          className="btn-1 mt-[24px] border-2 border-black rounded-lg w-[400px] h-[44px]"
          onClick={doLogin}
        >
          Login
        </button>
        <div className="mt-[16px] text-center">
          <span>Don't have an account?</span>
          <Link to={"/"}> Sign up</Link>
        </div>
      </div>
      <div className="">
        <img
          src="/images/L1.png"
          alt=""
          className="restaurant absolute right-0"
        />
        {/* <img src={restro} alt=""  height={832} width={555}/> */}
      </div>
    </div>
  );
};

export default Login;
