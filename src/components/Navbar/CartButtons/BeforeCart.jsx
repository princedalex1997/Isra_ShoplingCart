import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/cart";
import Swal from "sweetalert2";
import { RiShoppingCart2Line } from "react-icons/ri";


const BeforeCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addCart(item));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your item has been adeed into the Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <button
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-white dark:hover:text-white dark:hover:bg-red-500  "
        onClick={() => handleAddCart(product)}
      >
        {" "}
        Add to Cart
      </button>
    </div>
  );
};

export default BeforeCart;
