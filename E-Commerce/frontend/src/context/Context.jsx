import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const UserContext = createContext();

const Context = ({ children }) => {
  const currency = '$';
  const delivery = '10';
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    delivery,search,setSearch,showSearch,setShowSearch
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
