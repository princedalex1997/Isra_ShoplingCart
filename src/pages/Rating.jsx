import React from "react";
import { products } from "../components/Navbar/data";
import ProductCards from "./ProductCards";

const Rating = () => {
  const rating = products.filter((item) => item.rating >= 4.6);

  return (
    <div className="pb-8 shadow-lg pt-12  flex flex-col justify-center max-lg:justify-center items-center max-lg:pt-0">
      <h1 className="text-2xl font-bold pt-5 mb-9">Top Rated Products</h1>
      <div className="container max-lg:px-8  h-[420px]  max-lg:h-fit grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4 ">
        {rating.map((item) => (
          <ProductCards product={item} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
