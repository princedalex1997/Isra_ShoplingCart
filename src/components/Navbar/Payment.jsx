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
  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    paymentMethord: "cod",
  });
  const curentDiv = useRef();

  const handelDetails = (field, value) => {
    setDetails((prevent) => ({
      ...prevent,
      [field]: value,
    }));
  };

  const handelPlaceOrder = () => {
    console.log(details);
    if (!details.name && !details.mobile) {
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
      timer: 4000,
    });
    setDetails({
      name: "",
      email: "",
      mobile: "",
      paymentMethord: "cod",
    });
  };

  return (
    <div>
      <div className="flex flex-row max-lg:flex-col mt-4 ">
        <div>
          {/* part 1 */}
          <div className="flex flex-col cursor-pointe  shadow-lg w-[720px] max-lg:w-auto p-3 px-3   mr-2 ml-2 rounded-lg  border-black">
            <div
              className=" flex flex-row justify-between bg-slate-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h4 className="pl-9">Details</h4>
              <button className="pr-3">
                {isOpen ? (
                  <IoArrowDown fontSize={24} />
                ) : (
                  <IoMdArrowForward fontSize={24} />
                )}{" "}
              </button>
            </div>
            {isOpen && (
              <div
                ref={curentDiv}
                className="flex flex-col mt-3  gap-4 pb-5 w-72 pl-9 "
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
          {/* part 1 */}
          <div className="flex flex-col cursor-pointe mt-5  shadow-lg w-[720px] max-lg:w-auto p-3 px-3 h-fit  mr-2 ml-2 rounded-lg  border-black">
            <div
              className=" flex flex-row justify-between bg-slate-0"
              onClick={() => setPaymentMethord(!paymentMethord)}
            >
              <h4 className="pl-9">Choose Payment Methord</h4>
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
                        handelDetails("paymentMethord", "Cash on Delivery");
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
                        handelDetails(
                          "paymentMethord",
                          "Debit Card / Credit Card"
                        );
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
                        handelDetails("paymentMethord", "UPI Payment");
                      }}
                    />
                    <label htmlFor="">UPI Payment </label>
                  </div>

                  {payOption === "doc" && (
                    <div className="h-[200px] w-[290px] max-lg:w-fit  max-lg:ml-2 ml-9  pl-5 pt-3 ">
                      <div className="flex flex-col g-5">
                        <h1>Payment Details</h1>
                        <TextField
                          id="standard-basic"
                          label="CARD NUMBER"
                          variant="standard"
                          className="w-[230px] mt-4 mb-4"
                        />
                        <TextField
                          id="standard-basic"
                          label="CARD HOLDER NAME"
                          variant="standard"
                          className="w-[230px] mt-4 m-4"
                        />
                        <div className="flex flex-row gap-3">
                          <TextField
                            id="standard-basic"
                            label="12"
                            variant="standard"
                            className="w-6 mt-4 mb-4"
                          />
                          <TextField
                            id="standard-basic"
                            label="2028"
                            variant="standard"
                            className="w-10 mt-4 mb-4"
                          />
                          <TextField
                            id="standard-basic"
                            label="CVV"
                            variant="standard"
                            className="w-10 mt-4 mb-4"
                          />
                        </div>
                      </div>{" "}
                    </div>
                  )}
                  {payOption === "upi" && (
                    <div
                      className="h-fitt w-[350px] ml-9 pl-5 pt-3 
                    "
                    >
                      <div className="  flex flex-row justify-evenly">
                        <div className="flex flex-row gap-2">
                          <input
                            type="radio"
                            name="gpay"
                            checked={upiPayMent === "gpay"}
                            onChange={(e) => setUpiPayment("gpay")}
                          />
                          <img
                            src="https://bl-i.thgim.com/public/money-and-banking/nz7hvk/article24801784.ece/alternates/FREE_1200/google-paya"
                            alt="gpay"
                            className="w-10 h-10 rounded-full mt-2"
                          />
                        </div>
                        <div className="flex flex-row gap-2 ">
                          <input
                            type="radio"
                            name="phonePay"
                            checked={upiPayMent === "phnPay"}
                            onChange={(e) => setUpiPayment("phnPay")}
                          />
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7C7cl9ufztQRxoH-y_biXvwoAf5bynbtnA&s"
                            alt="Phone Pay"
                            className="w-10 h-10 rounded-full mt-2"
                          />
                        </div>
                      </div>
                      <div className="pt-5 ">
                        <TextField
                          id="standard-basic"
                          label="Enter your UPI ID"
                          variant="standard"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* dive 2 */}
        <div className="w-full">
          <PaymentDetails />
        </div>
      </div>
      <div className=" w-full text-white text-center mt-5 mb-5 ">
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
