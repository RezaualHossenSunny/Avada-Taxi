import React from 'react'
import logo from '../assets/avada-taxi-logo.png'
const Heder = () => {
  return (
<>
<div className='bg-heder bg-no-repeat bg-center bg-cover h-screen'>
        <div className='mx-auto max-w-container flex py-6'>
            <div className='w-1/5'>
                <img src={logo}/>
            </div>
            <div className='w-3/5 py-6'>
                <div className=' flex justify-end  gap-10'>
                    <p className='text-[#EFB317] font-popins font-bold text-xl'>HOME</p>
                    <p className='text-white font-bold text-xl font-popins'>PRICING</p>
                    <p className='text-white font-bold text-xl font-popins'>NEWS</p>
                    <p className='text-white font-bold text-xl font-popins'>APP</p>
                    <p className='text-white font-bold text-xl font-popins'>CONTACT US</p>
                </div>
            </div>
            <div className='w-[200px] h-[50px] py-4 mt-4 ml-16 rounded-md border-[#EFB317] bg-[#EFB317]'>
        <p className=' font-popins font-bold text-sm  text-center h-[30px] text-black'>BOOK ONLINE</p>
            </div>
        </div>

        <div className='mx-auto max-w-container py-40 '>
        <h1 className='font-popins text-center text-[#EFB317] font-semibold text-[65px]'>Premium <span className="text-white">Transport</span></h1>

        <p className='text-center text-white font-popins text-3xl font-semibold mt-10'>for your Business & Personal Needs</p>
        </div>
    </div>
</>
  )
}

export default Heder