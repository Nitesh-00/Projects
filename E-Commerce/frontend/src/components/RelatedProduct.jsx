import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/Context'
import Title from './Title';
import Products from './Products';

const RelatedProduct = ({category,subCategory}) => {
    const {products} = useContext(UserContext);
    const [related,setRelated] = useState([])
    useEffect(()=>{
        if(products.length > 0){
            let productCopy = products.slice();
            productCopy = productCopy.filter((item)=> category === item.category);
            productCopy = productCopy.filter((item)=> subCategory===item.subCategory)
            setRelated(productCopy.slice(0,5));
        }
        console.log(related);
        
        
    },[products])

  return (
    <div>
      <div>
          <Title title1='RELATED' title2='PRODUCTS'></Title>
        </div>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {
                related.map((item,index)=> (<Products key={index} id={item._id} image={item.image} name={item.name} price={item.price} />))
            }
        </div>
    </div>
  )
}

export default RelatedProduct
