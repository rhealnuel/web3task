import React from 'react'
import phone from '../assets/phone.png'
import assets from '../assets/assets.png'

const Hero = () => {
  return (
    <div className='mt-20  w-[100vw] flex flex-col items-center overflow-hidden over gap-8  h-[740px] '>
        <div className='flex flex-col items-center gap-8 '>
            <p className='text-center text-[36px] w-[85%] lg:w-[100%] lg:text-[51.97px] font-[900]'>Step Into the Vityah Movement & <br/> <span className='text-[#CA1D52]'>Unlock $VIT Potential</span> </p>
            <p className='w-[90%] lg:w-[46.18%] text-center font-[400] text-[12px] lg:text-[14px] text-[#696969] '>Welcome to vityah token, the hottest solana- based memecoin crafted exclusively  for fans of vito and niyah!</p>
            <button className='text-black bg-[#CA1D52] w-[241px] h-[47px] rounded-[8px] font-[700] text-[14px]'>Join the presale</button>
            
        </div>
        <div className='flex items-center flex-col relative w-[100%] '>
                <img src={phone} alt="" className='w-[280px] lg:w-[363px]' />
                <img src={assets} alt=""  className='absolute z-[200px] top-[10%] w-[364px] lg:w-[464px]'/>
            </div>
    </div>
  )
}

export default Hero