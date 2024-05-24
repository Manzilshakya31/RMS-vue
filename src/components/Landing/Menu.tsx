import Menubox from "../Menu/Menubox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Menudata } from "../Menu/constant";
// import { ContentWrapper } from "../../components/Style";

const Menu = () => {
  const menuitem = Menudata?.map((items: any) => ({
    heading: items?.title,
    desc: items?.description,
    price: items?.price,
  }));
  console.log(menuitem, "qwertyui");
  return (
    // <ContentWrapper className="mt-[24px]">
    <div className=" mx-[170px] py-[32px]">
      <h1 className="text-[32px]">Most Popular Dishes</h1>
      <p className="text-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="xl:flex lg:gap-5 gap-3 mb-[32px] items-center justify-center">
        {[...Array(4)].map((_x, i) => (
          <Menubox key={i} />
        ))}
      </div>
      <Stack spacing={2} className="flex items-center">
        <Pagination count={10} />
      </Stack>
      {/* <div className="grid grid-cols-2">
        <h1 className="text-[32px]">Menu List</h1>
        <div>
          <input
            className="border-2 border-black rounded-lg w-[360px] h-[30px] text-center mt-[10px]"
            type="text"
            placeholder="Search"
          />
          <button className="btn">Categories</button>
        </div>
      </div> */}
    </div>
    // </ContentWrapper>
  );
};

export default Menu;
