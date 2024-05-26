// import pizza from "/images/pizza.png";
import star from "/images/star.png";
import burger from "/images/burger.jpeg";

const Menubox = ({ data }: any) => {
  return (
    <div>
      {}
      <div className=" w-[250px] h-[350px] shadow-lg hover:shadow-2xl  mt-[32px]">
        <div className=" items-center gap-4 mb-2">
          <img
            src={burger}
            alt="image"
            width={400}
            className="drop-shadow-lg"
          />
          <img
            src={star}
            alt="image"
            width={150}
            className="mx-[45px] mt-[20px]"
          />
        </div>
        <h2 className="text-center font-medium text-[24px]">
          Abc{data?.title}
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur{data?.description}
        </p>
        <div className="flex gap-[110px] my-[16px] px-6">
          <h1>Rs 160{data?.price}</h1>
          <button>Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Menubox;
