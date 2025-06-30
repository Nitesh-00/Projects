import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { UserContext } from '../context/Context'
import Products from './Products'

const BestSeller = () => {
    const {products} = useContext(UserContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const best = products.filter((item)=>(item.bestseller));
        setBestSeller(best.slice(0,5));
    },[]);
  return (
    <div className='my-10'>
        <div>
            <div className="flex flex-col items-center justify-center text-center px-4 py-6 gap-2">
  <Title title1="BEST" title2="SELLERS" />
  <p className="text-sm text-gray-600">
    Timeless, confident, and instantly memorable — captures luxury and wear-anywhere appeal.
  </p>
</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    bestSeller.map((item,index) => (<Products key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>))
                }
            </div>
        </div>
    </div>
  )
}

export default BestSeller
