import React from 'react'
import logo from "../assets/logog.png"
import tiktok from "../assets/tiktok.png"
import telegram from "../assets/telegram.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"


const Footer = () => {
const icons = [
    {
        id:1,
        icon: tiktok
    },
    {
        id:2,
        icon: telegram
    },
    {
        id:3,
        icon: twitter
    },
    {
        id:4,
        icon: instagram
    }
]


  return (
    <div className=' w-[90%] lg:w-[86.1%] lg:h-[435px] bg-[#C3C3C31A] bg-opacity-[10px] rounded-[24px] backdrop-blur-[8px] my-10 p-6 lg:p-14'>
        <div>
            <img src={logo} alt="" className='lg:h-[62px] h-[43px]'/>
        </div>
        <div className='w-[100%] flex flex-col gap-10 lg:gap-20'>

        <div className='flex flex-col lg:flex-row items-center justify-between text-[12px] lg:text-[20px] font-[400] gap-4 lg:gap-0 pt-4 lg:pt-0'>
            <p className=''>Copyright © 2024 Vityah. All Rights Reserved</p>

            <ul className='flex items-start gap-4 lg:gap-8'>
                <li className='cursor-pointer hover:text-[#CA1D52]'>Home</li>
                <li className='cursor-pointer hover:text-[#CA1D52]'>How it works</li>
                <li className='cursor-pointer hover:text-[#CA1D52]'>Roadmap</li>
                <li className='cursor-pointer hover:text-[#CA1D52]'>Our Socials</li>

            </ul>
        </div>
        <div className='h-[1px] w-[100%] bg-black'></div>

        <div className='flex items-center justify-between'>
            {
                icons.map((icon) => (
                <div key={icon.id} className='bg-black w-[17vw]  lg:w-[221px] h-[35px] lg:h-[66px] rounded-[8px] lg:rounded-[16px] flex items-center justify-center'>
                    <img src={icon.icon} alt="" className='w-[17px] lg:w-[32px]' />
                </div>

                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Footer