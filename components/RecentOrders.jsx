import React from 'react'
import { data } from '../data/data.js'
import { RiShoppingBagFill } from "react-icons/ri";
import { FiShoppingCart } from 'react-icons/fi';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Orders</h1>
      
      <ul>
        
      {data.map((order,id) => {
        return <li className='bg-grey-50 hover:bg-grey-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
                  key={id}>
          <div className='text-purple-800'>
            <RiShoppingBagFill className='text-purple-800' />
          </div>
          <div className='pl-4'>
            <p className=' text-grey-800  font-bold'> ${order.total}</p>
            <p className='text-grey-400 text-sm'>{order.name.first}</p>
            
          </div>
          <p className='lg:flex md:hidden  absolute right-6 text-sm'>{ order.date }</p>
        </li>
      })}
      </ul>
    </div>
  )
}

export default RecentOrders