import Burger from "/images/burger.jpeg";

const Menuitems = () => {
  return (
    <div className="w-[276px] bg-white shadow-lg">
      <div>
        <img src={Burger} alt="" height={""} width={"276px"} />
      </div>
      <div className="px-[20px]">
        <div className="flex gap-[120px]">
          <h2 className="text-[24px]">Burger</h2>
          {/* <p>5.0</p> */}
        </div>
        <p className="text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          veniam! Eaque voluptatem minus officiis
        </p>
        <p>Rs 750</p>
      </div>
    </div>
  );
};

export default Menuitems;
