import React from "react";
import { products } from "../components/Navbar/data";
import { Link, useNavigate } from "react-router-dom";
import InfoItems from "./InfoItems";
import Products from "./Products";
import Rating from "./Rating";

const Home = () => {
  const navigation = useNavigate();
  const categoryList = [...new Set(products.map((prd) => prd.category))];

  const handleCatgeory = (catItem) => {
    navigation(`/products/${catItem}`);
  };

  return (
    <div>
      {/* main Div  */}
      <div className="h-fit px-4 flex flex-row max-lg:flex-wrap py-2 w-screen max-lg:px-0  max-lg:h-[540px]  ">
        {/* create a 2 div */}
        <div
          className="w-[400px] h-fitt mx-5  p-4 max-lg:mx-0
        mt-0  items-center  border-black text-center justify-center "
        >
          {/* Category */}
          <h1 className="text-center text-2xl text-white font-bold rounded-lg bg-red-600 px-2 py-2.5">
            Shop by Category
          </h1>
          <ul className="space-y-4 p-3 border rounded-lg mt-2 bg-gray-100 pl-10">
            {categoryList.map((cat) => (
              <li
                key={cat}
                onClick={() => handleCatgeory(cat)}
                className="group content-center cursor-pointer 5 my-5 text-center w-[120px] flex items-center transform transition-transform duration-300 hover:scale-125 dark:text-black hover:underline  "
              >
                <div className=" group-hover:bg-red-600 w-2 h-2 border border-red-500 rounded-full mr-2  "></div>
                {cat}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-96 w-full relative ">
          {/* image */}
          <img
            src="https://i0.wp.com/ep-blog.s3.ap-south-1.amazonaws.com/images/2024/04/05175105/Top-10-Online-Shopping-Sites-India.jpg"
            alt="Home"
           loading="lazy"
            className="h-full w-full max-lg:h-fit max-lg:w-fit max-lg:px-3 max-lg:pt-2 rounded-lg max-lg:rounded-lg "
          />
          <div className="absolute top-12 left-8">
            <h2 className="top-3 right-3">Price Name</h2>
            <h2 className="top-3 right-3">Welcome To the E-Commerce </h2>
            <Link 
            to="shop"
            className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <InfoItems />
      <Products />
      <Rating />
    </div>
  );
};

export default Home;
