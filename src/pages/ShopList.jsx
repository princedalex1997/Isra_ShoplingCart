import React from "react";
import { products } from "../components/Navbar/data";
import ProductCards from "./ProductCards";

export const ShopList = () => {
  const categories = ["Electronics", "Clothing", "Books", "Furniture", "Toys"];

  return (
    <div className="h-full w-screen mt-4">
      <div className="flex flex-col mx-4">
        <h1 className="text-center mt-10 mb-10 text-3xl font-bold">Shop List</h1>
        {categories.map((category) => {
          const filteredProducts = products.filter(
            (item) => item.category === category
          );
          return (
            <div
              key={category}
              className="shadow-lg max-lg:flex max-lg:flex-col max-lg:flex-wrap"
            >
              <h2 className="pl-[100px] text-xl pt-6 font-bold pb-5">
                {category}
              </h2>
              <div className="h-[470px] max-lg:h-fit flex flex-row justify-evenly mb-4 max-lg:flex-col max-lg:flex-wrap max-lg:justify-center max-lg:items-center">
                {filteredProducts.map((item) => (
                  <ProductCards key={item.id} product={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
