// import { Link } from "react-router-dom";
// import { ContentWrapper } from "../../components/Style";
import coffee from "/images/coffee.png";

const BestItem = () => {
  return (
    // <ContentWrapper>
    <div className="flex mx-[170px] gap-5 mt-[150px]">
      {/* <div className="w-[65%]"> */}
      <div className="lg:w-[900px]">
        <h1 className="text-[48px]  font-medium">Best Coffee</h1>
        <h2 className="text-[32px]">Item name</h2>
        <p className="text-[#808080]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius ea
          sequi earum iste architecto excepturi in quisquam. Dicta recusandae
          repudiandae quo maiores placeat obcaecati sed cum consequatur eaque
          hic.
        </p>
        <button className="btn hover:bg-slate-300 hover:shadow-lg bg-[#5962F6] text-white hover:text-[black] md:py-3 py-3 px-8 mt-[20px] w-[170px] rounded-lg flex items-center gap-2 text-lg max-md:w-full max-md:justify-center">
          {/* <Link to={"/"} > */}
          READ MORE
          {/* </Link> */}
        </button>
      </div>
      {/* <div>
          <img src="" height={120} />
        </div>
      </div> */}
      <div className="pt-[50px] ">
        <img src={coffee} alt="1" width={180} />
      </div>
    </div>
    // </ContentWrapper>
  );
};

export default BestItem;
