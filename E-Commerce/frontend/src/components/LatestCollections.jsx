import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/Context'
import { useContext } from 'react'
import Title from './Title'
import Products from './Products'

const LatestCollections = () => {
    const {products} = useContext(UserContext);
    const [latest,setLatest] = useState([]);

    useEffect(()=>{
        setLatest(products.slice(0,10));
    },[products])

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center text-center px-4 py-6 gap-2">
  <Title title1="LATEST" title2="COLLECTIONS" />
  <p className="text-sm text-gray-600">
    Timeless, confident, and instantly memorable — captures luxury and wear-anywhere appeal.
  </p>
</div>

        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {
                latest.map((item,index)=> (<Products key={index} id={item._id} image={item.image} name={item.name} price={item.price} />))
            }
        </div>
        
        
      </div>
    </div>
  )
}

export default LatestCollections
