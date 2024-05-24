import { Link, useNavigate } from "react-router-dom";
import logo from "/vite.svg";
import { PicLeftOutlined } from "@ant-design/icons";
import { showSuccessMessage } from "../../utils/notification";

// import { useState } from "react";
// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Button, Menu } from "antd";

// type MenuItem = Required<MenuProps>["items"][number];

// const items: MenuItem[] = [
//   { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
//   { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
//   { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
//   {
//     key: "sub1",
//     label: "Navigation One",
//     icon: <MailOutlined />,
//     children: [
//       { key: "5", label: "Option 5" },
//       { key: "6", label: "Option 6" },
//       { key: "7", label: "Option 7" },
//       { key: "8", label: "Option 8" },
//     ],
//   },
//   {
//     key: "sub2",
//     label: "Navigation Two",
//     icon: <AppstoreOutlined />,
//     children: [
//       { key: "9", label: "Option 9" },
//       { key: "10", label: "Option 10" },
//       {
//         key: "sub3",
//         label: "Submenu",
//         children: [
//           { key: "11", label: "Option 11" },
//           { key: "12", label: "Option 12" },
//         ],
//       },
//     ],
//   },
// ];

const Header = () => {
  // const [collapsed, setCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  const navigate = useNavigate();
  const logout = () => {
    showSuccessMessage("Logout successful");
    localStorage.removeItem("isLogin");
    navigate("/landing");
  };
  return (
    // <div className="flex header h-[96px]">
    <div className="flex header h-[86px]">
      <div>
        {/* <img src={logo} alt="" width={60} className="my-[20px] mx-[40px]" /> */}
        <img src={logo} alt="" width={60} className="my-[15px] mx-[40px]" />
      </div>
      <div>
        {/* <ul className="text-black flex lg:gap-[80px] gap-[50px] text-[24px] mt-[35px] xl:ml-[540px] lg:ml-[150px] header-nav "> */}
        <ul className="text-black flex lg:gap-[80px] gap-[50px] text-[24px] mt-[25px] xl:ml-[540px] lg:ml-[150px] header-nav ">
          <li>
            <Link to={"/landingpage"}>Home</Link>
          </li>
          <li>
            <Link to={"/restaurant"}>Booking</Link>
          </li>
          <li>
            <Link to={"/"}>Offers</Link>
          </li>
          <li>
            <Link to={"/"}>Profile</Link>
          </li>
          {/* <li>
            <Link to={"/"}>Contact</Link>
          </li> */}
        </ul>
      </div>
      {/* <div className="mt-[40px] right-10 absolute"> */}
      <div className="mt-[30px] right-10 absolute">
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        /> */}
        {/* <Link to={"Login"} className="btn btn-danger"> */}
        <button type="button" onClick={logout}>
          <PicLeftOutlined />
        </button>
        {/* Logout */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Header;
