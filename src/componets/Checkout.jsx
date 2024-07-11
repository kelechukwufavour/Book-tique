import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import MastercardLogo from "../assets/mastercard.png"; // Replace with actual image paths
import VisaLogo from "../assets/visa.png"; // Replace with actual image paths
import PaystackLogo from "../assets/paystack.png"; // Replace with actual image paths
import VerveLogo from "../assets/verve.png"; // Replace with actual image paths

const Checkout = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-4 md:p-10">
      <h2 className="flex justify-center items-center text-[24px] md:text-[40px] text-[#626263]">
        Shopping Cart
        <FaAngleRight className="w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[#6A5ACD]/50">Checkout</span>
      </h2>
      <p className="text-black relative">
        Returning customer?{" "}
        <Link to="/login" className="text-[#6A5ACD]/75">
          Click here to login
        </Link>
        <hr className="absolute left-0 bottom-0 w-full border-t-2 border-gray-500 mt-1" />
      </p>
      <div className="flex flex-col md:flex-row w-full mt-4">
        {/* Billing Details Form */}
        <div className="md:w-2/3 md:pr-8">
          <div className="bg-white rounded shadow-md p-6 mb-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">BILLING DETAILS</h3>
            <form className="space-y-4" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border border-[#6A5ACD] rounded-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block font-medium">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-[#6A5ACD] rounded-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="orderNotes" className="block font-medium">
                  Order Notes
                </label>
                <textarea
                  id="orderNotes"
                  className="w-full p-2 border border-[#6A5ACD] rounded-full"
                  rows="4"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        {/* Order Summary & Payment Options */}
        <div className="md:w-1/3 md:mt-6 md:ml-8 space-y-6">
          <div className="bg-white rounded shadow-md border border-[#6A5ACD] p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-1">YOUR ORDER</h3>
            <div className="flex justify-between mb-2 text-xs md:text-sm">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="flex justify-between mb-2 text-xs md:text-sm">
              <span>Item Name</span>
              <span>₦Subtotal</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="flex justify-between font-bold text-lg mb-4 md:text-sm">
              <span>Total</span>
              <span>₦Total</span>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <p className="text-xs text-center text-[black]">
                Secured by Paystack
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              {/* Logos in a single box */}
              <div className="bg-white border border-[#6A5ACD] rounded-lg p-2 md:p-4 w-full text-center">
                <div className="flex items-center justify-center space-x-2 md:space-x-4 mt-2">
                  <img src={MastercardLogo} alt="Mastercard" className="h-6 md:h-8 mx-auto" />
                  <img src={VisaLogo} alt="Visa" className="h-6 md:h-8 mx-auto" />
                  <img src={PaystackLogo} alt="Paystack" className="h-6 md:h-8 mx-auto" />
                  <img src={VerveLogo} alt="Verve" className="h-6 md:h-8 mx-auto" />
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-[black] mt-2">
              Make your payment using debit and credit cards
            </p>
            <Link to="/final-checkout">
              <button className="w-full md:w-auto bg-[#6A5ACD] text-[#d8d9da] px-4 py-2 rounded-full mt-6">
                PROCEED TO CHECKOUT
              </button>
            </Link>
            <p className="text-[black] mt-1">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
              <span className="text-[#6A5ACD]/75">Privacy policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
