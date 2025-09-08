import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import PaymentDetails from "./PaymentDetails";
import Swal from "sweetalert2";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethord, setPaymentMethord] = useState(false);
  const [payOption, setPayOption] = useState("cod");
  const [upiPayMent, setUpiPayment] = useState("gpay");
  const [details, setDetails] = useState({ name: "", email: "", mobile: "", paymentMethod: "cod" });
  const curentDiv = useRef();

  const handelDetails = (field, value) => {
    setDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handelPlaceOrder = () => {
    console.log(details);
    if (!details.name || !details.mobile) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter the details",
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
      });
      return;
    }
    Swal.fire({
      title: "Order Confirmed",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div>
      <div className="flex flex-row max-lg:flex-col mt-4 ">
        <div>
          {/* Details Section */}
          <div className="flex flex-col cursor-pointer shadow-lg w-[720px] max-lg:w-auto p-3 px-3 mr-2 ml-2 rounded-lg border-black">
            <div
              className="flex flex-row justify-between bg-slate-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h4 className="pl-9">Details</h4>
              <button className="pr-3">
                {isOpen ? (
                  <IoArrowDown fontSize={24} />
                ) : (
                  <IoMdArrowForward fontSize={24} />
                )}
              </button>
            </div>
            {isOpen && (
              <div
                ref={curentDiv}
                className="flex flex-col mt-3 gap-4 pb-5 w-72 pl-9"
              >
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  value={details.name}
                  onChange={(e) => handelDetails("name", e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Mob.No"
                  variant="standard"
                  value={details.mobile}
                  onChange={(e) => handelDetails("mobile", e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  value={details.email}
                  onChange={(e) => handelDetails("email", e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Payment Method Section */}
          <div className="flex flex-col cursor-pointer mt-5 shadow-lg w-[720px] max-lg:w-auto p-3 px-3 h-fit mr-2 ml-2 rounded-lg border-black">
            <div
              className="flex flex-row justify-between bg-slate-0"
              onClick={() => setPaymentMethord(!paymentMethord)}
            >
              <h4 className="pl-9">Choose Payment Method</h4>
              <button className="pr-3">
                {paymentMethord ? (
                  <IoArrowDown fontSize={24} />
                ) : (
                  <IoMdArrowForward fontSize={24} />
                )}
              </button>
            </div>
            <div>
              {paymentMethord && (
                <div className="pl-9">
                  <div className="flex flex-row gap-5 pl-9 pb-4 pt-4">
                    <input
                      type="radio"
                      name="payment"
                      checked={payOption === "cod"}
                      onChange={(e) => {
                        setPayOption("cod");
                        handelDetails("paymentMethod", "Cash on Delivery");
                      }}
                    />
                    <label htmlFor=""> Cash on Delivery </label>
                  </div>
                  <div className="flex flex-row gap-5 pl-9">
                    <input
                      type="radio"
                      name="payment"
                      checked={payOption === "doc"}
                      onChange={(e) => {
                        setPayOption("doc");
                        handelDetails("paymentMethod", "Debit/Credit Card");
                      }}
                    />
                    <label htmlFor="">Debit Card / Credit Card </label>
                  </div>
                  <div className="flex flex-row gap-5 pl-9 pt-4">
                    <input
                      type="radio"
                      name="payment"
                      checked={payOption === "upi"}
                      onChange={(e) => {
                        setPayOption("upi");
                        handelDetails("paymentMethod", "UPI Payment");
                      }}
                    />
                    <label htmlFor="">UPI Payment </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full">
          <PaymentDetails />
        </div>
      </div>
      <div className="w-full text-white text-center mt-5 mb-5">
        <button
          className="bg-red-600 w-[470px] h-12 max-lg:w-[262px] rounded-md"
          onClick={handelPlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
