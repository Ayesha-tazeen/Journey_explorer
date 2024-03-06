import React from 'react'
import NavBar from "../NavBar"
import Places from './Places'
import Footer from '../Footer';


function Destination() {



  return (
    <div className='text-white flex flex-col justify-center items-center h-full'>
      <NavBar />
      <div className='h-16 w-full bg-wall'></div>
      <div>
        <Places />
      </div>

      <Footer/>
    </div>
  )
}

export default Destination;