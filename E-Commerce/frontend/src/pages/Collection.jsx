import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { UserContext } from "../context/Context";
import Products from "../components/Products";

function Collection() {
  const { products } = useContext(UserContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }else{
      setCategory(prev => [...prev,e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy);
  }

  useEffect(() => {
    applyFilter();
  }, [category,subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t px-4">
      
      {/* Filter Section */}
      <div className="min-w-50">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold hover:text-gray-700 transition"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </p>

        {/* Categories Filter */}
        <div className={`border border-gray-300 rounded-md pl-5 pt-3 pb-3 mt-4 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input type="checkbox" value="Men" className="w-4 h-4" onChange={toggleCategory} /> Men
            </label>
            <label className="flex gap-2 items-center">
              <input type="checkbox" value="Women" className="w-4 h-4" onChange={toggleCategory} /> Women
            </label>
            <label className="flex gap-2 items-center">
              <input type="checkbox" value="Kids" className="w-4 h-4" onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 rounded-md pl-5 pt-3 pb-3 mt-4 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium text-gray-800">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input type="checkbox" value="Topwear" className="w-4 h-4"  onChange={toggleSubCategory}/> Topwear
            </label>
            <label className="flex gap-2 items-center">
              <input type="checkbox" value="Bottomwear" className="w-4 h-4" onChange={toggleSubCategory}/> Bottomwear
            </label>
            <label className="flex gap-2 items-center">
              <input type="checkbox" value="Winterwear" className="w-4 h-4" onChange={toggleSubCategory}/> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title title1="ALL" title2="COLLECTIONS" />
          <select className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-black">
            <option value="relevant">Sort: Relevant</option>
            <option value="low-high">Sort: Low to High</option>
            <option value="high-low">Sort: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterProduct.map((item, index) => (
            <Products
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
