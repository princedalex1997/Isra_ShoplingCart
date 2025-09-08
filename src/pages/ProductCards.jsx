import React from "react";
import { useSelector } from "react-redux";
import MainButton from "../components/Navbar/CartButtons/MainButton";

const ProductCards = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  console.log(cartList);

  return (
    <div
      className="group  max-h-fit w-[270px] shadow rounded-lg  relative border transform transition-transform duration-300 hover:scale-105
    hover:mb-5 max-lg:mb-7 "
    >
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-[270px] object-cover rounded-b-lg"
        loading="lazy"
      />
      <div className="pl-3 pt-3 flex flex-row justify-between mb-3 rounded-t">
        <div className="gap-4">
          <p className="group-hover:font-bold  p-1 ">{product?.name} </p>
          <p className=" bg-yellow-800  p-1 w-12 text-center rounded-r-lg rounded-l-lg group-hover:text-white max-lg:text-white  text-sm	 ">
            {product?.rating.toFixed(1)}
          </p>
          <p className=" p-1"> ${product?.price} </p>
        </div>
        <div className="pb-5 b-0 flex items-end  mr-4 invisible group-hover:visible  max-lg:visible ">
          <MainButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
