import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContent";
import { FaAngleRight } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal whenever cartItems change
    const newSubtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  // Define delivery and calculate total
  const delivery = 2000;
  const total = subtotal + delivery;

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col p-4 md:p-10">
      <h2 className="flex justify-center items-center text-[24px] md:text-[40px] text-[#6A5ACD]">
        Shopping Cart
        <FaAngleRight className="w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[#6A5ACD]/50">Checkout</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-7 w-full">
        <div className="w-full md:w-2/3">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-b border-[#99AAB5]">
                <tr>
                  <th className="py-2 px-4 text-left text-xs md:text-base">Product</th>
                  <th className="py-2 px-4 text-left text-xs md:text-base">Price</th>
                  <th className="py-2 px-4 text-left text-xs md:text-base">Quantity</th>
                  <th className="py-2 px-4 text-left text-xs md:text-base">Sub-total</th>
                  <th className="py-2 px-4 text-left text-xs md:text-base">Remove</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#99AAB5]">
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 flex items-center text-xs md:text-base">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-24 md:w-20 md:h-28 object-cover mr-2"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-2 px-4 text-xs md:text-base">{item.price.toLocaleString()}</td>
                    <td className="py-2 px-4 flex items-center text-xs md:text-base">
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
                        className="w-10 md:w-12 text-center border rounded mx-2"
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
                    <td className="py-2 px-4 text-xs md:text-base">
                      {(item.price * item.quantity).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 text-xs md:text-base">
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
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 gap-4 md:gap-0">
            <Link to="/shop" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-white border border-[#99AAB5] rounded-full text-[#6A5ACD] px-4 py-2">
                Continue Shopping
              </button>
            </Link>
            <button className="w-full md:w-auto bg-[#6A5ACD] text-[#d8d9da] px-4 py-2 rounded-full">
              Share Cart
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2 text-xs md:text-base">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2 text-xs md:text-base">
              <span>Delivery</span>
              <span>₦{delivery.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4 text-xs md:text-base">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                Proceed to Check-out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;