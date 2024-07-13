import React from "react";
import { Link } from "react-router-dom";
import PaystackLogo from "../assets/paystack.png"; 

const FinalCheckout = ({ order }) => {
  const { orderNumber, date, total, paymentMethod } = order;

  const handlePayNow = () => {
    // Handle Pay Now functionality
  };

  const handleCancelOrder = () => {
    // Handle Cancel Order functionality
  };

  return (
    <div className="flex items-center justify-center flex-col p-4 md:p-10">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Check-out Details</h3>
      <div className="bg-white rounded shadow-md p-6 mb-6">
        <p>Order Number: {orderNumber}</p>
        <p>Date: {date}</p>
        <p>Total: {total}</p>
        <div className="flex items-center justify-between mt-4">
          <p>Payment Method:</p>
          <img src={paymentMethod} alt="Payment Method" className="h-8" />
        </div>
      </div>
      <div className="bg-white rounded shadow-md border border-[#6A5ACD] p-6">
        <p className="mb-4">Thank you for your order, please click the button below to pay with Paystack.</p>
        <div className="flex justify-between">
          <button
            onClick={handlePayNow}
            className="bg-[#6A5ACD] text-[#d8d9da] px-4 py-2 rounded-full"
          >
            PAY NOW
          </button>
          <button
            onClick={handleCancelOrder}
            className="bg-[#6A5ACD] text-white px-4 py-2 rounded-full"
          >
            CANCEL ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCheckout;
