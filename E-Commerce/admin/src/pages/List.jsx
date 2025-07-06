import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [list, setList] = useState([]);

  const listItem = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      setList(response.data.products);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch product list");
    }
  };

  const remove = async (id) =>{
    try {
      const response = await axios.post(backendUrl+"/api/product/remove",{id},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message)
        await listItem()
      console.log(response.data.message);
      }else{
        toast.error(response.data.message)
      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(() => {
    listItem();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">All Products List</h2>

      <div className="grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-t-md shadow-sm border">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      <div className="divide-y">
        {list.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 hover:bg-gray-50 transition-all border border-t-0"
          >
            <img src={item.image[0]} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <p className="truncate text-gray-800">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-gray-900 font-medium">₹{item.price}</p>
            <div className="flex justify-center">
              <button onClick={()=>remove(item._id)} className="text-black px-3 py-1 rounded shadow text-lg">
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
