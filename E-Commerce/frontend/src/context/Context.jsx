import React, { createContext } from 'react';
import { products } from '../assets/assets';

export const UserContext = createContext();

const Context = ({ children }) => {
  const currency = '$';
  const delivery = '10';

  const value = {
    products,
    currency,
    delivery
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
