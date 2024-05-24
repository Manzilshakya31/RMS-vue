import pizza from "/images/pizza.png";
import star from "/images/star.png";

const Menubox = ({ data }: any) => {
  return (
    <div>
      {}
      <div className=" rounded-lg border-[3px] border-[#BBBABA] p-5 w-[250px] h-[350px] hover:shadow-2xl  mt-[32px]">
        <div className="flex flex-col items-center gap-4 my-2">
          <img src={pizza} alt="image" width={130} className="drop-shadow-lg" />
          <img src={star} alt="image" width={150} />
        </div>
        <h2 className="text-center font-medium text-[24px]">
          Abc{data?.title}
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur{data?.description}
        </p>
        <div className="flex gap-[120px] my-[16px]">
          <h1>$ 20{data?.price}</h1>
          <button>Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Menubox;
