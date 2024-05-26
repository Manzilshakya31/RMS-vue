import restaurant1 from "/images/restaurant1.jpg";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "6:00 a.m - 7:00 a.m",
  },
  {
    key: "2",
    label: "7:00 a.m - 8:00 a.m",
  },
  {
    key: "3",
    label: "8:00 a.m - 9:00 a.m",
  },
  {
    key: "4",
    label: "9:00 a.m - 10:00 a.m",
  },
  {
    key: "5",
    label: "10:00 a.m - 11:00 a.m",
  },
  {
    key: "6",
    label: "11:00 a.m - 12:00 p.m",
  },
];

const Rtable = ({ datatable }: any) => {
  return (
    <div className="lg:mx-[150px]  my-[32px]  w-[1100px] mx-[50px] ">
      {datatable?.map((item: any) => {
        return (
          <div className="flex lg:w-[1150px] bg-white mt-[24px] p-3 items-center justify-center gap-[100px] rounded-lg shadow-lg hover:shadow-xl  hover:bg-slate-200">
            <div>
              <img
                src={restaurant1}
                alt="restaurant"
                className="h-[100px] w-[100px] rounded-full border-2"
              />
            </div>
            <div>
              <h2 className="font-medium text-[24px]">{item?.title}</h2>
              <p className="w-[500px]">{item?.description}</p>
            </div>
            <div>
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space>
                    Choose time
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
            <div>
              <Link to={"/landingpage"}>
                <Button>Submit</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rtable;
