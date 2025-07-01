import React, { useContext } from 'react';
import { UserContext } from '../context/Context';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery, Total } = useContext(UserContext);

  const subtotal = Total();
  const grandTotal = subtotal === 0 ? 0 : subtotal + Number(delivery);

  return (
    <div className="w-full max-w-2xl mx-auto px-6">
      {/* Title */}
      <div className="text-3xl mb-6">
        <Title title1="CART" title2="TOTALS" />
        <hr className="border-gray-300 mt-1 w-28" />
      </div>

      {/* Totals */}
      <div className="space-y-4 text-base">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-900 font-medium">
            {currency}{subtotal}.00
          </p>
        </div>
        <hr className="border-gray-200" />

        {/* Shipping Fee */}
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Shipping Fee</p>
          <p className="text-gray-900 font-medium">
            {currency}{subtotal ? delivery : 0}.00
          </p>
        </div>
        <hr className="border-gray-200" />

        {/* Total */}
        <div className="flex justify-between items-center text-lg font-bold mt-2">
          <p>Total</p>
          <p>
            {currency}{grandTotal}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
