import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { UserContext } from '../context/Context';
import {toast} from 'react-toastify'
import axios from 'axios'


function PlaceOrder() {
  const { backendUrl, cartItem, products, navigate, token, setCartItem, Total, delivery } = useContext(UserContext);
  const [green, setGreen] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = [];

      for (const items in cartItem) {
        for (const item in cartItem[items]) {

          if (cartItem[items][item] > 0) {
            const productInfo = structuredClone(products.find((product) => product._id === items));
            productInfo.size = item;
            productInfo.quantity = cartItem[items][item];
            orderItems.push(productInfo);
          }

        }
      }
      console.log(orderItems);

      const orderPlace = {
        items: orderItems,
        amount: Total() + delivery,
        address: formData
      }

      console.log(orderPlace);
      

      switch (green) {

        case 'cod':
          const response = await axios.post(backendUrl + "/api/order/place",orderPlace, { headers: { token } });

          if (response.data.success) {
            setCartItem({});
            navigate('/orders');
            toast.success(response.data.message)
          }else{
             toast.success(response.data.message)
          }
          break;
        
        case 'stripe':
          const responseStripe = await axios.post(backendUrl+"/api/order/stripe",orderPlace,{headers:{token}});
          if(responseStripe.data.success){
            const {session_url}  = responseStripe.data;
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message)
          }
          break;
        default : 
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }

  }

  const inputStyle =
    'border p-2 rounded-xl w-full outline-none focus:ring-2 focus:ring-black bg-white';

  return (
    <form onSubmit={submitHandler} className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="flex justify-around gap-15 max-w-5xl mx-2">
        {/* Left - Delivery Info */}
        <div>
          <div className="mb-6">
            <Title title1="DELIVERY" title2="INFORMATION" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required onChange={onchangeHandler} name='firstName' value={formData.firstName} type="text" placeholder="First Name" className={inputStyle} />
            <input required onChange={onchangeHandler} name='lastName' value={formData.lastName} type="text" placeholder="Last Name" className={inputStyle} />
          </div>

          <div className="mt-4 space-y-4">
            <input required onChange={onchangeHandler} name='email' value={formData.email} type="text" placeholder="Email address" className={inputStyle} />
            <input required onChange={onchangeHandler} name='street' value={formData.street} type="text" placeholder="Street" className={inputStyle} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required onChange={onchangeHandler} name='city' value={formData.city} type="text" placeholder="City" className={inputStyle} />
              <input required onChange={onchangeHandler} name='state' value={formData.state} type="text" placeholder="State" className={inputStyle} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required onChange={onchangeHandler} name='zipcode' value={formData.zipcode} type="text" placeholder="Zipcode" className={inputStyle} />
              <input required onChange={onchangeHandler} name='country' value={formData.country} type="text" placeholder="Country" className={inputStyle} />
            </div>

            <input required onChange={onchangeHandler} name='phone' value={formData.phone} type="text" placeholder="Phone" className={inputStyle} />
          </div>
        </div>

        {/* Right - Cart + Payment */}
        <div >
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
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-100 ${green === 'stripe' ? 'border-green-500 bg-green-100' : ''
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
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-100 ${green === 'razorpay' ? 'border-green-500 bg-green-100' : ''
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
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-100 ${green === 'cod' ? 'border-green-500 bg-green-100' : ''
                }`}
            >
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                {green === 'cod' && <div className="w-2 h-2 bg-green-500 rounded-full" />}
              </div>
              <p className="text-sm font-medium">Cash On Delivery</p>
            </div>
          </div>

          <button type='submit' className="w-full bg-black text-white py-3 rounded-xl text-lg hover:opacity-90 transition duration-200">
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
