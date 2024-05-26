import { Link } from "react-router-dom";
import Restaurantbar from "../../components/Restaurant/Restaurantbar";
import ViTextInput from "../../components/ViTextinput";
import { Restaurantdata } from "../../components/constant";

const Restaurant = () => {
  // const rid = restaurantid?.map((item) => {
  //   id = item?.id;
  // });
  return (
    <div className="lg:px-[150px] px-[40px] my-[32px] ">
      <div>
        <h1 className="lg:text-[38px] text-[24px] font-medium">Restaurant</h1>
        <p className="lg:w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          esse laudantium ratione quia, minima accusantium natus delectus nihil
          quo et obcaecati iusto, nesciunt tempore nobis praesentium nisi
          recusandae odio architecto.
        </p>
      </div>
      <div>
        <ViTextInput
          className="rounded-lg pl-3 my-2 border-2 border-solid border-[#DFDFDF]"
          placeholder="Search"
        />
      </div>
      <div>
        {/* {[...Array(10)].map((_x, i) => (
          <Link to={"/profile"}>
            <Restaurantbar key={i} />
          </Link>
        ))} */}
        {/* <Link to={`../profile/${restaurantid}`}> */}
        <Link to={"/profile"}>.</Link>
        <Link to={"/profile"}>
          <Restaurantbar rdata={Restaurantdata} />
        </Link>
      </div>
      {/* section */}
    </div>
  );
};

export default Restaurant;
