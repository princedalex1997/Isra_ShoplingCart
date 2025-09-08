import React from "react";
import { useSelector } from "react-redux";

const PaymentDetails = () => {
  const { cartList } = useSelector((state) => state.cart);

  let discount = 256;
  let coupons = 199;

  const totalAmount = cartList.reduce(
    (total, count) => total + count.totalPrice - discount - coupons,
    0
  );

  return (
    <div className="mx-3 h-fit flex flex-col max-lg:mt-5 max-lg:pt-5 justify-center items-center">
      <div className=" p-4 text-center border rounded-md border-black ">
        <h1 className="w-full h-10 bg-red-600 text-center rounded-lg
         text-white flex justify-center pt-2 mb-5 font-bold " >Order Summery</h1>
        <div>
          <h6 className="text-right mb-4 font-bold" >No.Items : {cartList?.length} </h6>
          <div className="  max-lg:w-[300px] w-[400px] border-b-2 ">
            {cartList?.map((items) => (
              <div key={items} className="flex flex-row mb-3 justify-between 	border shadow-sm rounded-lg items-center ">
                <img
                  src={items?.image}
                  alt={items?.name}
                  className="h-[100px] w-[100px] rounded-md"
                />
                <div>
                  <p>{items?.name} </p>
                  <p>
                  
                    {items?.price} x {items?.count}{" "}
                  </p>
                </div>
               
                  <p className="pr-5" > {items?.price * items?.count} </p>
              
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between font-bold text-lg mt-4" >
            <h1>Total Price : </h1>
            <p>{totalAmount.toFixed(2) || "NO Amount"} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
