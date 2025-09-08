import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { totalListPrice } from "../../redux/cart";
import { useNavigate } from "react-router-dom";

const CartModal = ({ cartTotalPrice }) => {
  const [adress, setAdress] = useState("123,main, India");
  const { cartList, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigate()

  let discount = 256;
  let coupons = 199;

  const totalPrice = cartTotalPrice - discount - coupons;

  useEffect(()=>{
    if(totalAmount.adress){
      setAdress(totalAmount?.adress)
    }

  },[totalAmount])

  const handleSubmitItem = () => {
    dispatch(
      totalListPrice({
        amount: totalPrice,
        adress: adress,
      })
    );
    navigation("/payment")
  };

  console.log("New Cart List : ", totalAmount);

  const changeAdress = () => {
    withReactContent(Swal).fire({
      title: <i>Change Adress </i>,
      input: "text",
      adress,
      preConfirm: () => {
        setAdress(Swal.getInput()?.value || "");
      },
    });
  };

  return (
    <div>
      <div className="h-[430px] w-[350px] bg-[#d7dbe0] rounded-lg  ">
        <h1
          className="w-full h-10 bg-red-600 text-center rounded-lg
         text-white flex justify-center pt-2 font-bold "
        >
          Order Summery
        </h1>
        <div className=" p-4 pt-6">
          <div className="bg-white rounded-md p-4 flex flex-row justify-around">
            <div className="">
              <p className="font-bold mt-2 dark:text-black ">Selected Item </p>
              <p className="font-bold mt-2 text-rose-600">Discount</p>
              <p className="font-bold mt-2 text-rose-600">Coupons for you </p>
              <p className="font-bold mt-2 text-rose-600">Item Price </p>
              <p className="font-bold mt-2 dark:text-black">Shipping Charge </p>
              <p className="font-bold mt-2 dark:text-black "></p>
            </div>
            <div className=" text-right">
              <p className="font-bold mt-2 dark:text-black">
                {cartList?.length}
              </p>
              <p className="font-bold mt-2 text-rose-600"> -$ {discount}</p>
              <p className="font-bold mt-2 text-rose-600"> -$ {coupons}</p>
              <p className="font-bold mt-2 dark:text-black ">
                ${cartTotalPrice.toFixed(2)}
              </p>
              <p className="font-bold mt-2 dark:text-black"> Free</p>
            </div>
          </div>
          <div className="flex flex-row bg-white mt-3 rounded-lg p-1 h-auto">
            <div>
              <p className="font-bold mt-1 dark:text-black">
                Shipping adress :
              </p>
              <button
                className="font-light text-sm dark:text-black text-red-900"
                onClick={changeAdress}
              >
                Change Adress
              </button>
            </div>
            <p className="font-bold mt-1 dark:text-black h-auto w-44 break-words bg-white rounded-lg">
              {adress}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row text-blue-600 px-3 justify-around font-bold">
          <h1> Total Price :</h1>
          <h1> $ {totalPrice.toFixed(2)}</h1>
        </div>
        <div
          className="bg-blue-300 mx-7 hover:bg-blue-500  transition ease-in-out delay-150 
        hover:translate-y-1 hover:scale-110 duration-150
        mt-3 text-center rounded-md h-9 mb-7  "
        >
          <button
            className="pt-1.5 font-bold dark:text-red-900"
            onClick={() => handleSubmitItem(totalPrice)}
          >
            {" "}
            Subimt
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CartModal;
