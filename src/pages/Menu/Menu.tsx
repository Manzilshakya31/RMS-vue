import { Button } from "antd";
import Menuitems from "../../components/Menu/Menuitems";
// import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="lg:px-[150px] px-[40px] my-[32px]">
      <div>
        <h1 className="lg:text-[38px] text-[24px]">Menu</h1>
        <p className="lg:w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          esse laudantium ratione quia, minima accusantium natus delectus nihil
          quo et obcaecati iusto, nesciunt tempore nobis praesentium nisi
          recusandae odio architecto.
        </p>
      </div>
      <div className="mt-[24px] gap-[10px] lg:flex">
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
        <Button>Fast Food</Button>
      </div>
      <div className="grid lg:grid-cols-4">
        {[...Array(20)].map((_x, i) => (
          <Menuitems key={i} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
