import React from 'react'
import rocket from '../assets/rocket.png'
import up from "../assets/up.png"
import give from "../assets/give.png"

const Works = () => {
const items = [
    {
        id:1,
        image: rocket,
        title: "Get started now",
        text: "Embrace the power of Vityah and join the revolution redefining the way we connect, trade, and grow in the crypto space"
    },
    {
        id:2,
        image: up,
        title: "Level Up Together",
        text: "Join the hype, earn VIT tokens through challenges, and unlock perks like exclusive merch, private events, and VIP experiences"
    },
    {
        id:3,
        image: give,
        title: "Take The Helm",
        text: "Use your tokens to vote on Vito and Niyah's next creations or support community-backed charitable causes while you HODL."
    },
]



  return (
    <div className='w-[100%] flex flex-col items-center pb-20'>
        <div 
        
        className='h-[196px] w-[100%]   bg-[#CA1D52]  relative '>
            {/* <div
            style={{
                backgroundImage: `repeating-linear-gradient(
                  to right,
                  #d11546, 
                  #d11546 30px, 
                  #e02e5c 40px, 
                  #e02e5c 150px
                )`,
              }}
            className='h-[80%] w-[100%] blur-[2px]'>

            </div> */}
            {/* <div className='h-[30%] w-[100%] blur-[3px] bg-[#d11546] absolute bottom-1'>

            </div> */}

        </div>


            <div className='bg-white text-black w-[100%] flex flex-col items-center py-20 relative'>
                <div className=' flex flex-col items-center w-[100%] gap-4'>
                    <p className='text-center text-[32px] lg:text-[48px] font-[700]'>How it Works</p>
                    <p className='w-[90%] lg:w-[55.5%] text-center font-[400] text-[12px]  lg:text-[20px] text-[#696969]'>Learn how to turn your passion for Vito and Niyah into crypto rewards with easy and engaging steps</p>
                </div>

            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5 justify-between -[100%] lg:w-[80%] pt-[40px]'>
                {
                    items.map((item) => (
                <div key={item.id} className='flex flex-col items-center justify-center rounded-[32px] w-[90%] lg:w-fit px-6 gap-[24px] bg-[#EAEBEE] h-[354px]'>
                    <img src={item.image} alt="" />
                    <p className='text-[24px] font-[700] text-[#CA1D52]'>{item.title}</p>
                    <p className='w-[324px] text-[#696969] text-[12px] font-[400] text-center'>{item.text}</p>

                    <button className='text-white bg-[#CA1D52] w-[241px] h-[49px] rounded-[8px] font-[700] text-[14px]'>Join the presale</button>

                </div>

                    ))
                }
            </div>

                <div className=' h-[500px] w-[500px] blur-[20px] rounded-full bg-[#CA1D52] opacity-20 absolute top-0 lg:left-[-350px] left-[-450px]'>

                </div>
        </div>


    </div>
  )
}

export default Works