import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      )
      setOrders(response.data.allItems)
      console.log(orders);
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
  const statusLoad = async (e,orderId) =>{

    const response = await axios.post(backendUrl+"/api/order/status",{orderId,status:e.target.value},{headers:{token}})

    if(response.data.success){
      loadOrders();
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  
  }


  useEffect(() => {
    loadOrders()
  }, [token])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid gap-6">
          {orders.map((order, index) => (
            <div
              
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-4 md:items-center"
            >
              {/* Parcel Icon */}
              <img src={assets.parcel_icon} alt="Parcel" className="w-16 h-16 object-contain" />

              {/* Order Details */}
              <div className="flex-1">
                <div className="mb-2">
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-gray-600">
                      {item.name} x {item.quantity} ({item.size})
                    </p>
                  ))}
                </div>

                <div className="mb-2">
                  <p className="text-gray-600">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p className="text-gray-600">{order.address.street}</p>
                  <p className="text-gray-600">
                    {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}
                  </p>
                  <p className="text-gray-600">Phone: {order.address.phone}</p>
                </div>
              </div>

              {/* Order Meta Info */}
              <div className="flex flex-col gap-1 text-sm mr-10 text-gray-700">
                <p><span className="font-semibold">Items:</span> {order.items.length}</p>
                <p><span className="font-semibold">Method:</span> {order.paymentMethod}</p>
                <p><span className="font-semibold">Payment:</span> {order.payment ? 'Done' : 'Pending'}</p>
                <p><span className="font-semibold">Date:</span> {new Date(order.date).toLocaleDateString()}</p>

              </div>
              <div className='mr-10'><p><span className="font-semibold ">Amount:</span> ₹{order.amount}</p></div>
              {/* Status Dropdown */}
                <select
                  onChange={(e)=>statusLoad(e,order._id)}
                  className="mt-2 p-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={order.status}
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
