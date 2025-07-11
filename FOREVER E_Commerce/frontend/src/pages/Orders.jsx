import React, { useContext } from 'react';
import Title from '../components/Title';
import { UserContext } from '../context/Context';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

function Orders() {
  const { backendUrl,token, currency } = useContext(UserContext);
  const [orders,setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      if(!token){
        return null;
      }

      const response = await axios.post(backendUrl+"/api/order/userorders",{},{headers:{token}});
      console.log(response.data);
      
      if(response.data.success){
        const orderfetch = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            orderfetch.push(item);
          })
        })

        setOrders(orderfetch.reverse());
        
      }
      

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    loadOrders()
  },[token])

  return (
    <div className="min-h-screen px-4 md:px-10 py-6 bg-gray-50">
      <div>
        <div className="mb-6">
          <Title title1="YOUR" title2="ORDERS" />
        </div>

        <div className="space-y-6">
          {orders.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between gap-6"
            >
              <div className="flex items-start gap-6 w-full">
                {/* Image */}
                <div>
                  <img
                    src={item.image[0]}
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.name}</p>

                  {/* Row: Price, Quantity, Size */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-1">
                    <p>{currency}{item.price}</p>
                    <p>{item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">{new Date(item.date).toDateString()}</p>
                  <p className="text-sm text-gray-500 mt-2">Payment : {item.paymentMethod}</p>
                </div>

                {/* Centered Status */}
                <div className="hidden md:flex flex-col justify-center items-center min-w-[140px]">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>

              {/* Mobile View Status (below content) */}
              <div className="md:hidden text-sm text-green-600 mt-2 text-center flex justify-center items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p>Ready to ship</p>
              </div>

              {/* Track Order Button */}
              <div>
                <button onClick={loadOrders} className="bg-black text-white px-5 py-2 rounded-xl text-sm hover:opacity-90 transition">
                  Track order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
