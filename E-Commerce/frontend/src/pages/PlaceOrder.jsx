import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom'

function PlaceOrder() {
  const [green, setGreen] = useState('cod');

  const inputStyle =
    'border p-2 rounded-xl w-full outline-none focus:ring-2 focus:ring-black bg-white';

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="flex justify-around gap-15 max-w-5xl mx-2">
        {/* Left - Delivery Info */}
        <div>
          <div className="mb-6">
            <Title title1="DELIVERY" title2="INFORMATION" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className={inputStyle} />
            <input type="text" placeholder="Last Name" className={inputStyle} />
          </div>

          <div className="mt-4 space-y-4">
            <input type="text" placeholder="Email address" className={inputStyle} />
            <input type="text" placeholder="Street" className={inputStyle} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="City" className={inputStyle} />
              <input type="text" placeholder="State" className={inputStyle} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Zipcode" className={inputStyle} />
              <input type="text" placeholder="Country" className={inputStyle} />
            </div>

            <input type="text" placeholder="Phone" className={inputStyle} />
          </div>
        </div>

        {/* Right - Cart + Payment */}
        <div className='ml-10'>
          <div className="mb-6">
            <CartTotal />
          </div>

          <div className="mb-4">
            <Title title1="PAYMENT" title2="METHOD" />
          </div>

          <div className="flex flex-row gap-4 mb-6 flex-wrap">
            {/* Stripe */}
            <div
              onClick={() => setGreen('stripe')}
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-100 ${
                green === 'stripe' ? 'border-green-500 bg-green-100' : ''
              }`}
            >
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                {green === 'stripe' && <div className="w-2 h-2 bg-green-500 rounded-full" />}
              </div>
              <img src={assets.stripe_logo} alt="Stripe" className="h-6" />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setGreen('razorpay')}
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-100 ${
                green === 'razorpay' ? 'border-green-500 bg-green-100' : ''
              }`}
            >
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                {green === 'razorpay' && <div className="w-2 h-2 bg-green-500 rounded-full" />}
              </div>
              <img src={assets.razorpay_logo} alt="Razorpay" className="h-6" />
            </div>

            {/* COD */}
            <div
              onClick={() => setGreen('cod')}
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-100 ${
                green === 'cod' ? 'border-green-500 bg-green-100' : ''
              }`}
            >
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                {green === 'cod' && <div className="w-2 h-2 bg-green-500 rounded-full" />}
              </div>
              <p className="text-sm font-medium">Cash On Delivery</p>
            </div>
          </div>

          <Link to={'/orders'}>
              <button className="w-full bg-black text-white py-3 rounded-xl text-lg hover:opacity-90 transition duration-200">
            PLACE ORDER
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
