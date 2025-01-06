import React , {useState} from 'react'
import { useCart } from '../context/CartProvider'

function Task3() {

   
    const {cartItems  , addToCarts , DeleteFromCarts , products}= useCart();
  return (
    <div className='p-4 bg-gray-100 h-screen'>
            <h1 className="text-black text-[25px] font-[600]">Task Name</h1>
    <p className="text-gray-600 text-[15px] font-[400] mt-2">
    Create a component that uses React context for global state management</p>
    
    <div className=' px-[15px]'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((elm , id) => (
          <div
            key={elm.id}
            className="border p-4 rounded shadow-lg flex flex-col items-center"
          >
            <img
              src={elm.image}
              alt={elm.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{elm.name}</h2>
            <p className="text-gray-500">₹{elm.price}</p>
            <button
              onClick={() =>addToCarts(elm.id)}
              className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className='px-[15px]'>
    <div className="w-full p-4">
      { cartItems.length!==0  ?  cartItems?.map((product) => (
        <div
          key={product.id+product.name}
          className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4 shadow-sm"
        >
 
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-md object-cover"
            />
            <span className="ml-4 text-gray-800 font-medium">{product.name}</span>
          </div>

          <button
            onClick={() => DeleteFromCarts(product.id)}
            className="text-red-500 hover:text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))   :     <div className=''> 
         <p className='text-[16px] font-[550] text-gray-600'>Cart is empty</p>
      </div>}
    </div>
    </div>

    </div>
  )
}

export default Task3
