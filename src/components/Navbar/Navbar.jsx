import React, { useEffect, useState } from "react";
import { HeaderComList } from "./data";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showList, setshowList] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { cartList } = useSelector((state) => state.cart);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div
      className={`bg-blue-100 h-[4.9rem] pr-6 mx-3 max-lg:mx-0 rounded-md max-w-full flex flex-row  items-center  dark:bg-slate-800 dark:text-white max-lg:flex-col sticky  top-0  z-50 ${
        showList
          ? "h-auto transform transition-transform duration-300 hover:scale-105"
          : " h-20 "
      }`}
    >
      {/* logo & Hide Bar */}
      <div className="flex-1  flex flex-row  items-center max-lg:justify-between  max-lg:flex-row max-lg:items-center max-lg:sticky max-lg:mt-5 max-lg:mb-0 ">
        <h1 style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>
          <Link to="/">ISRA Shopping</Link>
        </h1>
        <button
          onClick={() => setshowList(!showList)}
          className="hidden max-lg:flex ml-[90px]  pt-0 transform transition-transform duration-300 hover:scale-105"
        >
          {showList ? (
            <IoCloseSharp
              fontSize={24}
              className={`${darkMode ? "text-white" : "text-black"}`}
            />
          ) : (
            <FaBars
              fontSize={24}
              className={`${darkMode ? "text-white" : "text-black"}`}
            />
          )}
        </button>

        <Link to="cartList" className="relative ml-4 hidden max-lg:block ">
          <GrCart
            fontSize={34}
            className={` ${cartList.length > 0 && "text-blue-700"} `}
          />

          {cartList.length > 0 && (
            <h2 className=" absolute top-[-8px] right-0 left-8 bg-red-500 w-6 text-center rounded-full">
              {cartList.length}
            </h2>
          )}
        </Link>
      </div>
      {/* logo & Hide Bar */}

      {/* links */}
      <div className="flex flex-row gap-4 max-md:hidden">
        {HeaderComList.map((item) => (
          <HeaderList key={item.id} item={item} />
        ))}
      </div>
      {/* links */}

      {/* Dark Mode */}
      <div className="mr-5 ml-5 max-lg:hidden ">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <GoSun fontSize={24} color="white" />
          ) : (
            <FaMoon fontSize={24} color="black" />
          )}
        </button>
        {/* Dark Mode */}
        <button></button>
      </div>
      <div>
        <Link to="cartList" className="relative max-lg:hidden">
          <GrCart
            fontSize={34}
            className={` ${cartList.length > 0 && "text-blue-700"} `}
          />

          {cartList.length > 0 && (
            <h2 className=" absolute top-[-8px] right-0 left-8 bg-red-500 w-6 text-center rounded-full">
              {cartList.length}
            </h2>
          )}
        </Link>
      </div>

      {/* show Hide Bar */}
      {showList ? (
        <div className="flex-col gap-4 mt-[12px] pb-5  ">
          {HeaderComList.map((item) => (
            <div onClick={() => setshowList(!showList)} key={item.id}>
              <ShowHideBar key={item.id} item={item} />
              <div className="mr-5 ml-5 max-lg:hidden ">
                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? (
                    <GoSun fontSize={24} color="white" />
                  ) : (
                    <FaMoon fontSize={24} color="black" />
                  )}
                </button>
                {/* Dark Mode */}
                <button></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ display: "none" }}>NOt</p>
      )}

      {/* show Hide Bar */}
    </div>
  );
};

export default Navbar;

function HeaderList({ item }) {
  return (
    <>
      <div className={`flex flex-col gap-4 group  `}>
        <Link
          to={item.path}
          className="group-hover:text-blue-900 transition-colors active:underline"
        >
          {item.label}
        </Link>
      </div>
    </>
  );
}

function ShowHideBar({ item }) {
  return (
    <>
      <div className={`flex flex-col gap-4 `}>
        <Link to={item.path}>{item.label} </Link>
      </div>
    </>
  );
}
