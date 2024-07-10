import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Checkout = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-10">
      <h2 className="text-4xl md:text-6xl text-[#6A5ACD]">Checkout</h2>
      <div className="flex flex-col md:flex-row justify-between items-start w-full mt-8">
        {/* Billing Details Form */}
        <div className="md:w-2/3 md:pr-8">
          <div className="bg-white rounded shadow-md border border-[#6A5ACD] p-6 mb-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Billing Details</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
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
                  className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
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
                    className="w-full p-2 border rounded"
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
                  className="w-full p-2 border rounded"
                  rows="4"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Payment Options */}
        <div className="md:w-1/3 md:mt-6 md:ml-8">
          <div className="bg-white rounded shadow-md border border-[#6A5ACD] p-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Payment Options</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="radio" id="paystack" name="payment" className="mr-2" />
                <label htmlFor="paystack" className="font-medium">
                  Paystack
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="mastercard" name="payment" className="mr-2" />
                <label htmlFor="mastercard" className="font-medium">
                  Mastercard
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="visa" name="payment" className="mr-2" />
                <label htmlFor="visa" className="font-medium">
                  Visa
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="verve" name="payment" className="mr-2" />
                <label htmlFor="verve" className="font-medium">
                  Verve
                </label>
              </div>
            </div>
            <Link to="/final-checkout">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-6">
                Proceed to Final Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
