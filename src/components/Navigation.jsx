import React from 'react'

const Navigation = () => {
  return (

     <div className=" md:flex space-x-4 p-10 ">
     <a href="#" className="text-black">Home</a>
     <a href="#" className='text-black'>Features</a>
     <a href="#" className="text-black">Reviews</a>
     <a href="#" className="text-black">Pricing</a>
     <div className='py-1'><button type="GetStarted" className='bg-blue-500 text-white  px-10 py-1'>GetStarted</button></div>
     </div> 
  )
}

export default Navigation