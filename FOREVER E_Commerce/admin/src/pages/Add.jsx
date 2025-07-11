import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {

    const [image1,setImage1] = useState(false)
    const [image2,setImage2] = useState(false)
    const [image3,setImage3] = useState(false)
    const [image4,setImage4] = useState(false)

    const [name,setName] = useState("")
    const [desc,setDesc] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("Men");
    const [subCategory,setSubCategory] = useState("Topwear")
    const [bestseller,setBestseller] = useState(false);
    const [sizes,setSizes] = useState([])
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("name",name)
            formData.append("description",desc)
            formData.append("price",price)
            formData.append("category",category)
            formData.append("subCategory",subCategory)
            formData.append("bestseller",bestseller)
            formData.append("sizes",JSON.stringify(sizes))

            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)

            const response = await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}})
            if(response.data.success){
                console.log(response);
                
                toast.success(response.data.message);
                setName("")
                setDesc("")
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
            }else{
                toast.error(response.data.error)
            }
            
            
        } catch (error) {
           console.log(error);
           toast.error(response.data.error)
           
        }

    };

    return (
        <div className="p-6">
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    {/* Upload Images */}
                    <div>
                        <p className="text-lg font-semibold mb-2">Upload Images</p>
                        <div className="flex gap-2">
                            <label htmlFor="image1" className="cursor-pointer">
                                <img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" className="h-24 w-24 border rounded object-cover" />
                                <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
                            </label>
                            <label htmlFor="image2" className="cursor-pointer">
                                <img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" className="h-24 w-24 border rounded object-cover" />
                                <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
                            </label>
                            <label htmlFor="image3" className="cursor-pointer">
                                <img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" className="h-24 w-24 border rounded object-cover" />
                                <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
                            </label>
                            <label htmlFor="image4" className="cursor-pointer">
                                <img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" className="h-24 w-24 border rounded object-cover" />
                                <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
                            </label>
                        </div>
                    </div>

                    <div className="w-1/2">
                        {/* Product Name */}
                        <div className="mb-4">
                            <p className="mb-1 font-medium text-gray-700">Product name</p>
                            <input
                                type="text" onChange={(e)=>setName(e.target.value)} value={name}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Product Description */}
                        <div>
                            <p className="mb-1 font-medium text-gray-700">Product Description</p>
                            <textarea
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                rows="4" onChange={(e)=>setDesc(e.target.value)} value={desc}
                            />
                        </div>
                    </div>

                    {/* Category, Sub-category, Price */}
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                            <p className="mb-1 font-medium">Product Category</p>
                            <select onChange={(e)=>setCategory(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-2">
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>

                        <div>
                            <p className="mb-1 font-medium">Sub-Category</p>
                            <select onChange={(e)=>setSubCategory(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-2">
                                <option value="Topwear">Topwear</option>
                                <option value="Bottomwear">Bottomwear</option>
                                <option value="Winterwear">Winterwear</option>
                            </select>
                        </div>

                        <div>
                            <p className="mb-1 font-medium">Product Price</p>
                            <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" placeholder="25" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                    </div>

                    {/* Product Sizes */}
                    <div>
                        <p className="mb-2 font-medium">Product sizes</p>
                        <div className="flex flex-wrap gap-2">
                            <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter((item) => item != "S") : [...prev,"S"])} className={`border px-3 py-1 rounded cursor-pointer ${sizes.includes("S") ? "bg-pink-100" : ""} hover:bg-pink-100`}>S</div>
                            <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter((item) => item != "M") : [...prev,"M"])} className={`border px-3 py-1 rounded cursor-pointer ${sizes.includes("M") ? "bg-pink-100" : ""} hover:bg-pink-100`}>M</div>
                            <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter((item) => item != "L") : [...prev,"L"])} className={`border px-3 py-1 rounded cursor-pointer ${sizes.includes("L") ? "bg-pink-100" : ""} hover:bg-pink-100`}>L</div>
                            <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter((item) => item != "XL") : [...prev,"XL"])} className={`border px-3 py-1 rounded cursor-pointer ${sizes.includes("XL") ? "bg-pink-100" : ""} hover:bg-pink-100`}>XL</div>
                            <div onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter((item) => item != "XXL") : [...prev,"XXL"])} className={`border px-3 py-1 rounded cursor-pointer ${sizes.includes("XXL") ? "bg-pink-100" : ""} hover:bg-pink-100`}>XXL</div>
                        </div>
                    </div>

                    {/* Bestseller Checkbox */}
                    <div className="flex items-center gap-2">
                        <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" className="accent-black" />
                        <label htmlFor="bestseller" className="text-sm">Add to BestSeller</label>
                    </div>

                    {/* Add Button */}
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:opacity-90 transition">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
