import React from "react";
import { HeaderComList, products } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdMail, MdOutlinePhoneAndroid } from "react-icons/md";

const Footer = () => {
  const navigation = useNavigate();

  const categoryList = [...new Set(products.map((prd) => prd.category))];

  const handleCatageory = (item) => {
    navigation(`/products/${item}`);
  };

  return (
    <div
      className="h-[350px] mb-0 pb-0 w-screen bg-slate-500 flex flex-row justify-around pt-10
    max-lg:justify-center max-lg:items-center  max-lg:h-fit max-lg:flex-col max-lg:px-9 gap-2 max-lg:shadow-md max-lg:pb-10 max-lg:text-white "
    >
      <div className="w-[260px] max-lg:text-center ">
        <h1 className="mt-10 mb-5 text-xl cursor-pointer font-bold text-left  max-lg:text-center  ">
          <Link to="/">ISRA E-COMMERCE</Link>
        </h1>
        <section>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </section>
      </div>
      <div className="w-[260px]  p-1 flex flex-col justify-left max-lg:justify-center max-lg:items-center ">
        <h3 className="mt-10 mb-5 font-bold max-lg:text-2xl">Qucik Link</h3>
        {HeaderComList.map((item) => (
          <div
            key={item}
            className=" flex flex-col justify-left items-left p-2 max-lg:justify-center max-lg:items-center"
          >
            <Link
              className="cursor-pointer hover:underline w-fit"
              to={item.path}
            >
              {" "}
              {item.label}{" "}
            </Link>
          </div>
        ))}
      </div>
      <div className="w-[260px]  p-1 flex flex-col justify-left items-left max-lg:justify-center max-lg:items-center">
        <h3 className="mt-10 mb-3 font-bold max-lg:text-2xl">Shop Category </h3>
        {categoryList.map((items) => (
          <div
            key={items}
            className="flex flex-col justify-left items-left p-1"
          >
            <p onClick={() => handleCatageory(items)}
              className=" w-fit  cursor-pointer hover:underline"
              > {items} </p>
          </div>
        ))}
      </div>

      <div className="w-[260px] p-2 flex flex-col justify-left items-left gap-3">
        <h3 className="mt-10 mb-5 font-bold text-center max-lg:text-2xl ">
          Address
        </h3>
        <div className="flex flex-row gap-4">
          <GrLocation fontSize={38} color="white" />
          <p>Apt. 478 333 Ahmed Avenue, Rowemouth, AR 21430</p>
        </div>
        <div className="flex flex-row gap-4">
          <MdOutlinePhoneAndroid fontSize={24} color="white" />
          <p className="cursor-progress">14-899-4298 x936</p>
        </div>
        <div className="flex flex-row gap-4 w-fit">
          <MdMail fontSize={24} color="white" />
          <p className="text-sm cursor-progress ">
            israshoppingcenter@gmial.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
