import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const Context = ({ children }) => {

  const navigate = useNavigate();

  const currency = '$';
  const delivery = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  

  const getProductData = async () => {
    try {

      const response = await axios.get(backendUrl + "/api/product/list")

      if (response.data.success) {
        setProducts(response.data.products)
      }

    } catch (error) {
      console.log(error);

    }
  }

  const getCartItem = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token } });
      if (response.data.success) {
         setCartItem(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }

  }

  useEffect(()=>{
    getCartItem();
  },[])

  useEffect(() => {
    getProductData();
  }, [])

  const addToCart = async (id, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }
    let cartCopy = structuredClone(cartItem);
    if (cartCopy[id]) {
      if (cartCopy[id][size]) {
        cartCopy[id][size]++;
      } else {
        cartCopy[id][size] = 1;
      }
    } else {
      cartCopy[id] = {};
      cartCopy[id][size] = 1;
    }
    setCartItem(cartCopy);

    if (token) {
      try {
        await axios.post(backendUrl + "/api/cart/add", { id, size }, { headers: { token } })

      } catch (error) {
        console.log(error);
        toast.error(error.message);

      }
    }
  }

  const cartCount = () => {
    let total = 0;

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            total += cartItem[items][item];
          }
        } catch (error) {
          console.log(error);

        }
      }
    }
    return total;
  }

  const updateQ = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);
    try {
      await axios.post(backendUrl + "/api/cart/update", { itemId, size, quantity }, { headers: { token } })
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  const Total = () => {
    let total = 0;
    
    for (const items in cartItem) {
      const productData = products.find((item) => item._id === items)
       if (!productData) {
      console.warn(`Product not found for ID: ${items}`);
      continue;
    }
      for (const item in cartItem[items]) {
        total += productData.price * cartItem[items][item]
      }
    }
    return Number(total);
  }

  useEffect(() => {


  }, [cartItem])

  const value = {
    products,
    currency,
    delivery, search, setSearch, showSearch, setShowSearch, cartItem,setCartItem, addToCart, cartCount, updateQ, Total, backendUrl, navigate, token, setToken
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
