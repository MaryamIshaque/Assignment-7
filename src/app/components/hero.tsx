import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover ">
          <div className='w-[50%] flex flex-col h-auto py-[90px]'>
                 
          <h1 className='text-5xl text-white '>CryptoClub</h1>
          </div>
    
       
    </div>
  )
}

export default Hero