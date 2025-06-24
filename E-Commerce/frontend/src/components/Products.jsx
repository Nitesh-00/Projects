import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";
import { products } from "../assets/assets";

const Products = ({ id, image, name, price }) => {
  const { currency } = useContext(UserContext);
  return (
    <div>
      <Link to={`/product/${id}`}>
        <div className="group">
          <div className="overflow-hidden transform transition duration-300 group-hover:scale-105">
            <img src={image[0]} alt="" />
          </div>
          <div>
              <p>{name}</p>
          <p>{price}{currency}</p>
          </div>
          
        </div>
      </Link>
    </div>
  );
};

export default Products;
