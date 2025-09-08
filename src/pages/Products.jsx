import React from "react";
import { products } from "../components/Navbar/data";
import ProductCards from "./ProductCards";

const Products = () => {
  return (
    <div className=" transform transition-transform h-[500px] max-lg:h-auto ">
      <h1 className="text-center pb-4 text-2xl font-bold ">Top Products</h1>
      <div className="flex flex-row justify-evenly mb-4 max-lg:flex-col max-lg:flex-wrap max-lg:justify-center max-lg:items-center">
        {products.slice(0, 4).map((product) => (
          <div key={product.id}>
            <ProductCards product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
