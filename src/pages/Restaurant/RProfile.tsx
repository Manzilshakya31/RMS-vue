import { Button } from "antd";
// import designbg from "/images/design-bg.png";
import b2 from "/images/b2.png";
import restaurant1 from "/images/restaurant1.jpg";
import Menu from "../Menu/Menu";
import Rtable from "../../components/Restaurant/Rtable";
import { tabledata } from "../../components/constant";
import { useLocation } from "react-router-dom";

const RProfile = () => {
  const location = useLocation();
  console.log(location, "location");
  return (
    <div>
      <div>
        <img src={b2} alt="cover" className="w-full h-[260px]" />
      </div>
      <div className="ml-[90px]">
        <div>
          <img
            src={restaurant1}
            alt="profile"
            className=" h-[180px] w-[180px] mt-[-60px] border-2 bg-white rounded-full"
          />
        </div>
        <div className="mx-[50px] my-[24px]">
          <h2 className="text-[32px] font-medium">{location?.state?.name}</h2>
          <p>
            {location?.state?.desc
              ? location?.state?.desc
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor obcaecati hic facere. Quis, distinctio? Hic sunt dolorum cumque delectus vitae numquam voluptate"}
          </p>
        </div>
        <hr />
        <div className="mt-[24px] mx-[50px] gap-4 flex">
          <Button>Seat</Button>
          <Button>Menu</Button>
        </div>
      </div>
      <div className="">
        {/* {[...Array(8)].map((_x, i) => (
          <Rtable key={i} datatable={tabledata} />
        ))} */}
        <Rtable datatable={tabledata} />
      </div>
      {/* <Rtable /> */}
      <Menu />
    </div>
  );
};

export default RProfile;
