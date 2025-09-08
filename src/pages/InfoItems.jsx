import React from 'react'
import { infoItems } from '../components/Navbar/data'

const InfoItems = () => {
  return (
    <div className='pb-8 pt-12  flex justify-center max-lg:pt-0' >
        <div className='container  grid grid-cols-1 md:grid-cols-5 lg:grid-4 gap-4 ' >
            {infoItems.map((items)=>(
                <div className='flex flex-col items-center p-3 text-center cursor-pointer lg:w-[230px] border rounded-lg mx-5 
                 shadow-xl transform transition-transform duration-300 hover:scale-110 ' key={items.id} >
                    {items.icon}
                    <h3 className='mt-4 text-xl font-semibold' >{items.title} </h3>
                    <p className='pt-2 text-gray-600 dark:text-white' >{items.description} </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoItems