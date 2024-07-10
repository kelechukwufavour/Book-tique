import React from "react";
import { Link } from "react-router-dom";

const FinalCheckout = ({ orderDetails }) => {
  if (!orderDetails) {
    // Handle case where orderDetails is not provided or empty
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-10">
      <h2 className="text-4xl md:text-6xl text-[#6A5ACD]">Final Checkout</h2>
      <div className="w-full md:w-2/3 mt-8">
        <div className="bg-white rounded shadow-md border border-[#6A5ACD] p-6 mb-6">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {/* Display order details */}
            <div>
              <p className="font-medium">Name: {orderDetails.firstName} {orderDetails.lastName}</p>
              <p className="font-medium">Address: {orderDetails.address}, {orderDetails.city}, {orderDetails.state}</p>
              <p className="font-medium">Email: {orderDetails.email}</p>
              <p className="font-medium">Phone: {orderDetails.phone}</p>
              <p className="font-medium">Order Notes: {orderDetails.orderNotes}</p>
            </div>
            {/* Display payment details */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Payment Method</h4>
              <p className="font-medium">{orderDetails.paymentMethod}</p>
            </div>
            {/* Display order items */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Order Items</h4>
              <ul className="space-y-2">
                {orderDetails.items.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.title}</span>
                    <span>₦{item.price.toLocaleString()} x {item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Display totals */}
            <div className="flex justify-between font-bold text-lg md:text-xl">
              <span>Subtotal</span>
              <span>₦{orderDetails.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg md:text-xl">
              <span>Delivery</span>
              <span>₦{orderDetails.delivery.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg md:text-xl">
              <span>Total</span>
              <span>₦{orderDetails.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
        {/* Proceed to payment button */}
        <Link to="/payment">
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FinalCheckout;
