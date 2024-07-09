import React, { useContext } from "react";
import { CartContext } from "../CartContent"; // corrected the import path
import { FaAngleRight } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0),
    0
  );

  // Define delivery and calculate total
  const delivery = 2000;
  const total = subtotal + delivery;

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-10">
      <h2 className="flex justify-center items-center text-[40px] text-[#6A5ACD]">
        Shopping Cart
        <FaAngleRight className="w-8 h-8" />
        <span className="text-[#6A5ACD]/50">Checkout</span>
      </h2>
      <div className="flex justify-center items-start gap-7">
        <div className="w-full md:w-2/3">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-b border-[#99AAB5]">
                <tr>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Sub-total</th>
                  <th className="py-2 px-4 text-left">Remove</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#99AAB5]">
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-28 object-cover mr-2"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-2 px-4">
                      ₦{parseFloat(item.price).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.title, item.quantity - 1)
                        }
                        className="px-2 py-1 border"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.title, parseInt(e.target.value))
                        }
                        className="w-12 text-center border rounded mx-2"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.title, item.quantity + 1)
                        }
                        className="px-2 py-1 border"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2 px-4">
                      ₦
                      {(
                        parseFloat(item.price) * parseInt(item.quantity)
                      ).toLocaleString()}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="text-red-500"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center w-full ">
            <button className="mt-4 bg-white border border-[#99AAB5] rounded-full text-[#6A5ACD] px-4 py-2 ">
              Continue Shopping
            </button>
            <button className="mt-4 bg-[#6A5ACD] text-[#d8d9da] px-4 py-2 rounded-full">
              Share Cart
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>₦{delivery.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
              Proceed to Check-out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
