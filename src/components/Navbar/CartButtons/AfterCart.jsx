import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../redux/cart";

const AfterCart = ( {cartCount ,productId}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center">
      <button
        onClick={() => dispatch(decrement(productId))}
        className="text-black bg-gradient-to-r  via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-slate-500 font-medium rounded-lg text-sm px-2.5 py-2 text-center me-0 mb-2 dark:bg-slate-300"
      >
        {" "}
        -{" "}
      </button>
      <p className="text-black dark:text-white w-6 ml-2">{cartCount}</p>
      <button
        className="text-black bg-gradient-to-r  via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-slate-500 font-medium rounded-lg text-sm px-2.5 py-2 text-center me-0 mb-2 dark:bg-slate-300"
        onClick={() => dispatch(increment(productId))}
      >
        
        +
      </button>
    </div>
  );
};

export default AfterCart;
