import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Context";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

function Cart() {
  const { products, currency, cartItem, updateQ } = useContext(UserContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="border-t pt-5 px-4 md:px-10 pb-10 min-h-screen bg-gray-50">
      <div className="flex mb-6">
        <Title title1="Your" title2="Cart" />
      </div>

      {cartData.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartData.map((item, index) => {
            const ProductData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-md"
              >
                {/* Product Image */}
                <img
                  src={ProductData.image[0]}
                  alt={ProductData.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">
                    {ProductData.name}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600 mt-1">
                    <span>
                      Price:{" "}
                      <span className="font-medium text-black">
                        {currency}
                        {ProductData.price}
                      </span>
                    </span>
                    <span>
                      Size:{" "}
                      <span className="font-medium text-black">
                        {item.size}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="flex-shrink-0 mr-30">
                  <input
                    onChange={(e) =>
                      e.target.value == "" || e.target.value == "0"
                        ? null
                        : updateQ(item._id, item.size, Number(e.target.value))
                    }
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    className="w-16 border rounded-lg px-2 py-1 text-center text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                {/* Bin Icon */}
                <img
                  onClick={() => updateQ(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Remove"
                  className="w-6 h-6 cursor-pointer transition hover:scale-110"
                  title="Remove item"
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-center w-full px-4">
      <div className="max-w-2xl w-full">
        {/* Cart Totals */}
        <CartTotal />

        {/* Proceed to Checkout Button (Centered with w-1/3) */}
        <div className="flex justify-center">
          <Link to="/place-order" className="w-1/3">
            <button className="mt-6 w-full bg-gradient-to-r from-black to-gray-900 text-white text-lg py-3 rounded-xl shadow hover:opacity-90 transition duration-200">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cart;
