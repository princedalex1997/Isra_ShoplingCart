import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../components/Navbar/data';
import ProductCards from './ProductCards';

const CategoryPage = () => {

    const{category} = useParams()

    const filteredProducts = products.filter(
        (product) => product.category === category
      );

  return (
    <div className=' pb-10  h-[490px] ' >
    <h1 className='text-2xl font-bold pt-5 pb-5 pl-4 max-lg:text-center' >Products of {category}:</h1>
    <ul className='flex flex-row h-full w-screen justify-evenly max-lg:flex-col max-lg:justify-center max-lg:items-center ' >
      {filteredProducts.map((product) => (
       <ProductCards  product={product} />
      ))}
    </ul>
  </div>
  )
}

export default CategoryPage