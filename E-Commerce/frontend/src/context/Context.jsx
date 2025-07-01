import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const Context = ({ children }) => {
  const currency = '$';
  const delivery = '10';
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(true);
  const[cartItem,setCartItem] = useState({});

  const addToCart = async (id,size) =>{
    if(!size){
      toast.error('Select Product Size');
      return;
    }
    let cartCopy = structuredClone(cartItem);
    if(cartCopy[id]){
      if(cartCopy[id][size]){
        cartCopy[id][size]++;
      }else{
        cartCopy[id][size]=1;
      }
    }else{
      cartCopy[id]={};
      cartCopy[id][size]=1;
    }
    setCartItem(cartCopy);
  }

  const cartCount = () =>{
    let total = 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try {
          if(cartItem[items][item]>0){
            total += cartItem[items][item]; 
          }
        } catch (error) {
          
        }
      }
    }
    return total;
  }

  const updateQ = async (itemId,size,quantity)=>{
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData)
  }

  const Total = ()=>{
    let total = 0;
    for(const items in cartItem){
      const productData = products.find((item)=>item._id === items)
      for(const item in cartItem[items]){
        total += productData.price*cartItem[items][item]
      }
    }
    return total;
  }

  useEffect(()=>{
    console.log(cartItem);
    
  },[cartItem])

  const value = {
    products,
    currency,
    delivery,search,setSearch,showSearch,setShowSearch,cartItem,addToCart,cartCount,updateQ,Total
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
