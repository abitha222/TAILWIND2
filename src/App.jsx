import React from 'react'
import Navigation from './components/Navigation'
import Contents from './components/Contents'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gray-300'>
    <div >
    <div className='flex justify-between items-center'>
     <div className='ml-7'><h5>Shades</h5></div>
    <div className=''><Navigation/></div>
    
    </div> 
    </div> 
    <div><Contents/></div>   
    <div><Footer/></div>                                                                                                             
   </div>
  )
}

export default App