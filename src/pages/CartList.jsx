import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainButton from "../components/Navbar/CartButtons/MainButton";
import { BsTrash3 } from "react-icons/bs";
import { removeItem } from "../redux/cart";
import CartModal from "../components/Navbar/CartModal";
import Swal from "sweetalert2";

const CartList = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartTotalPrice = cartList.reduce(
    (total, price) => total + price.totalPrice,
    0
  );

  const removeCart = (item) => {
    dispatch(removeItem(item));
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: `${item.name} has been remove from the Cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div>
        {cartList.length > 0 ? (
          <div className="flex flex-row max-lg:flex-col  ">
            <div className="w-full p-3  max-lg:w-full max-h-full  ">
              {cartList.map((cartItem) => (
                <div
                  className="p-2  shadow-lg mt-5 rounded-lg drop-shadow-xl flex flex-row items-center max-lg:w-ful max-lg:mx-2 max-lg:p-2 "
                  key={cartItem}
                >
                  <img
                    src={cartItem.image}
                    alt=""
                    className="w-48 max-lg:w-36 rounded-xl "
                  />
                  <div className=" flex flex-row max-lg:flex-col max-lg:justify-center items-center  max-lg:w-full ">
                    <div className="w-[270px] max-lg:w-full pl-8 ">
                      <p className="max-lg:text-center mt-4 font-bold ">
                        {" "}
                        {cartItem.name}{" "}
                      </p>
                      <p className="max-lg:text-center mb-4">
                        {" "}
                        ${cartItem.price}{" "}
                      </p>
                    </div>
                    <div className="flex justify-center flex-col text-center mb-4 max-lg:pl-5">
                      <p className="mb-4">{cartItem.totalPrice} </p>
                      <MainButton product={cartItem} />
                    </div>
                    <div className="pl-5  ">
                      <button
                        className="text-black hover:text-red-800 dark:text-white dark:hover:font-bold dark:hover:text-red-900"
                        onClick={() => removeCart(cartItem)}
                      >
                        <BsTrash3 fontSize={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center   w-full mt-20   ">
              <CartModal cartTotalPrice={cartTotalPrice} />
            </div>
          </div>
        ) : (
          <div className=" flex flex-col items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5029/5029213.png"
              alt="NoCartLogo"
              className=" "
            />
            <Link to="/shop" className="mt-10">
              No Items are founded . Visit Shop
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartList;
