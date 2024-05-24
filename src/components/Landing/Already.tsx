import { FaArrowRight } from "react-icons/fa";
import { Wrapper } from "../Style";

const Already = () => {
  return (
    <div className="mx-[150px] my-[48px]">
      <Wrapper>
        <div className="max-w-[980px] xl:m-auto mx-5">
          <h2 className="font-bold text-[#FFF] text-[48px] text-center md:leading-[72px]">
            Aready Have an Reservation Account?
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal text-gray-300 text-center mt-6 md:leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            quasi ipsum ab velit magnam animi vel quos! Dolore corporis eius
            porro, eveniet iure, omnis sit at error natus nulla sed!
          </p>

          <div className=" mt-[32px] md:mt-[48px] mx-auto block md:w-fit w-full">
            <button
              //   type="primary"
              //   onClick={() => show()}
              className=" hover:bg-white bg-[#6140ef] text-white hover:text-[black] md:py-4 py-3 px-8  w-full rounded-lg flex items-center gap-2 text-lg max-md:w-full max-md:justify-center"
            >
              Get started
              {/* <Icon name="arrow-right" className="h-5 w-5" /> */}
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Already;
