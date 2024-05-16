// import { Link } from "react-router-dom";
// import { ContentWrapper } from "../../components/Style";
import coffee from "/images/coffee.png";

const BestItem = () => {
  return (
    // <ContentWrapper>
    <div className="flex my-[32px] mx-[170px] gap-5">
      {/* <div className="w-[65%]"> */}
      <div className="lg:w-[900px]">
        <h1 className="text-[48px] text-[#C79C60]">Best Coffee</h1>
        <h2 className="text-[32px]">Item name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius ea
          sequi earum iste architecto excepturi in quisquam. Dicta recusandae
          repudiandae quo maiores placeat obcaecati sed cum consequatur eaque
          hic.
        </p>
        <button className="btn btn-classic mt-3">
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
