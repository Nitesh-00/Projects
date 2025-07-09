import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

const Products = ({ id, image, name, price }) => {
  const { currency } = useContext(UserContext);
  

  return (
    <div className="w-full">
      <Link to={`/product/${id}`}>
        <div className="group bg-white p-3 rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer">
          <div className="overflow-hidden rounded-xl">
            <img
              src={image[0]}
              alt={name}
              className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="mt-3 text-sm">
            <p className="font-medium text-gray-800 truncate">{name}</p>
            <p className="text-gray-500 mt-1 font-semibold">
              {currency}{price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
