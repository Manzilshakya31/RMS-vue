import { GrStatusGoodSmall } from "react-icons/gr";
import restaurant1 from "/images/restaurant1.jpg";
import { Link } from "react-router-dom";

const Restaurantbar = ({ rdata }: any) => {
  // const data1 = rdata?.map((items: any) => ({
  //   rname: items?.title,
  //   rdesc: items?.description,
  // }));

  return (
    <div className="w-full">
      {rdata?.map((item: any, id: string) => {
        return (
          <Link to={item?.id}>
            <div className="shadow-lg hover:shadow-xl " key={id}>
              <div className="flex lg:w-[1150px] bg-white mt-[24px] p-3 items-center justify-center gap-[100px] rounded-lg hover:bg-slate-200">
                <div>
                  <img
                    src={restaurant1}
                    alt="restaurant"
                    className="h-[100px] w-[100px] rounded-full border-2"
                  />
                </div>
                <div>
                  <h2 className="font-medium text-[24px]">
                    {item?.title ? item?.title : "Npp"}
                  </h2>
                  <p className="w-[700px]">
                    {item?.description
                      ? item?.description
                      : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto alias natus in ullam quis rerum velit soluta molestias adipisci"}
                  </p>
                </div>
                <div>
                  <GrStatusGoodSmall className="color-green" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Restaurantbar;
