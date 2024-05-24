import { GrStatusGoodSmall } from "react-icons/gr";
import restaurant1 from "/images/restaurant1.jpg";

const Restaurantbar = () => {
  return (
    <div className="shadow-lg hover:shadow-xl ">
      <div className="flex lg:w-[1150px] bg-white mt-[24px] p-3 items-center justify-center gap-[100px] rounded-lg hover:bg-slate-200">
        <div>
          <img
            src={restaurant1}
            alt="restaurant"
            className="h-[100px] w-[100px] rounded-full border-2"
          />
        </div>
        <div>
          <h2 className="font-medium text-[24px]">Npp</h2>
          <p className="w-[700px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            alias natus in ullam quis rerum velit soluta molestias adipisci{" "}
          </p>
        </div>
        <div>
          <GrStatusGoodSmall className="color-green" />
        </div>
      </div>
    </div>
  );
};

export default Restaurantbar;
