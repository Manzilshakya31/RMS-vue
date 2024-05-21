import Burger from "/images/burger.jpeg";

const Menuitems = () => {
  return (
    <div className="w-[276px] bg-white shadow-lg mt-[24px]">
      <div>
        <img src={Burger} alt="" height={""} width={"276px"} />
      </div>
      <div className="px-[20px] my-[12px]">
        <div className="flex gap-[120px]">
          <h2 className="text-[20px]">Burger</h2>
          {/* <p>5.0</p> */}
        </div>
        <p className="text-[12px] text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          veniam! Eaque voluptatem minus officiis
        </p>
        <p className="text-[green] font-medium pb-[12px]">Rs 750</p>
      </div>
    </div>
  );
};

export default Menuitems;
