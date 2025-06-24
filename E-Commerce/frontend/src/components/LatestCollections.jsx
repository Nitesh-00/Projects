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
    },[])

  return (
    <div>
      <div>
        <Title></Title>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {
                latest.map((item,index)=> (<Products key={index} id={item.id} image={item.image} name={item.name} price={item.price} />))
            }
        </div>
        
      </div>
    </div>
  )
}

export default LatestCollections
