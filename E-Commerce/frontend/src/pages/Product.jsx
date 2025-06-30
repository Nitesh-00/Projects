import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Context";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct"; 


function Product() {
  const { productId } = useParams();
  const { products,cartItem,addToCart } = useContext(UserContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size,setSize] = useState('')

  useEffect(() => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Vertical Thumbnails */}
        <div className="flex lg:flex-col gap-3 overflow-auto max-h-[500px]">
          {productData.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              onClick={() => setImage(img)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                img === image ? "border-blue-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            src={image}
            alt="Main"
            className="w-full h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-900">
            {productData.name}
          </h1>

          {/* ⭐ Ratings */}
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <div className="flex gap-0.5">
              <img src={assets.star_icon} className="w-3" alt="star" />
              <img src={assets.star_icon} className="w-3" alt="star" />
              <img src={assets.star_icon} className="w-3" alt="star" />
              <img src={assets.star_icon} className="w-3" alt="star" />
              <img
                src={assets.star_dull_icon}
                className="w-3"
                alt="star dull"
              />
            </div>
            <p className="text-xs text-gray-500">(122 reviews)</p>
          </div>

          {/* 💰 Price */}
          <p className="text-3xl font-bold text-black">₹{productData.price}</p>

          {/* Description */}
          <p className="text-gray-600 text-sm">{productData.description}</p>

          {/* Sizes */}
          <div>
            <h2 className="font-semibold mb-2">Select Size</h2>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={()=>setSize(item)}
                  key={index}
                  className={`px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200 transition ${size === item
        ? "border-yellow bg-orange-100 font-medium"
        : "border-gray-400 hover:bg-gray-200"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={()=>(addToCart(productData._id,size))} className="mt-4 px-6 py-3 bg-gray-900 text-white text-lg rounded-lg hover:bg-gray-700 transition duration-200">
            Add to Cart
          </button>

          <hr className="mt-4" />

          {/* Features */}
          <div className="space-y-1 text-gray-700 text-sm">
            <p> 100% Original</p>
            <p> Cash on Delivery</p>
            <p> Easy Returns Available</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {/* Tab Buttons */}
        <div className="flex border-b border-gray-300 w-full">
          <div className="px-4 py-2 cursor-pointer font-medium text-gray-600 hover:text-black hover:border-black border-b-2 border-transparent">
            Description
          </div>
          <div className="px-4 py-2 cursor-pointer font-medium text-gray-600 hover:text-black hover:border-black border-b-2 border-transparent">
            Reviews (122)
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-4 px-3 text-gray-700 text-sm leading-relaxed">
          Elevate your everyday wardrobe with this premium cotton T-shirt,
          crafted for comfort and built to last. Designed with a classic crew
          neckline and a tailored fit, it’s perfect for casual outings, gym
          sessions, or just lounging at home. Made from 100% breathable,
          skin-friendly cotton, it ensures you stay cool and confident
          throughout the day.
          <br />
          <br />
          - Material: 100% Pure Cotton
          <br />
          - Fit: Regular | Neck: Crew Neck
          <br />
          - Wash Care: Machine washable, dry in shade
          <br />
          - Available Sizes: S, M, L, XL, XXL
          <br />- Made in India
        </div>
      </div>
      <hr className="mt-4" />
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}></RelatedProduct>
    </div>
  ) : (
    <div className="text-center text-gray-500 py-20">Loading...</div>
  );
}

export default Product;
