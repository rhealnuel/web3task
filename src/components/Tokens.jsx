import React from 'react'
import polygon from "../assets/polygon.svg"

const Tokens = () => {
  return (
    <div className='w-[100%] flex flex-col items-center'>
        <div className='text-center w-[100%] flex flex-col items-center gap-4'>
            <p className='text-[32px] w-[90%] lg:[100%] lg:text-[48px] font-[700]'>Tokenomics At A Glance</p>
            <p className='w-[90%] lg:w-[55%] text-[12px] lg:text-[20px] text-[#696969]'>Explore the core of Vityah’s tokenomics and see how its unique features and Solana foundation are shaping the future of crypto.</p>
        </div>

        <div className='flex flex-col w-[90%] lg:w-[100%] items-center my-14 relative' >
        <div className=' h-[500px] w-[500px] blur-[70px] rounded-full bg-[#CA1D52] opacity-20 absolute top-[-100px] lg:left-[-300px] left-[-450px]'></div>
        <div className=' h-[500px] w-[500px] blur-[70px] rounded-full bg-[#CA1D52] opacity-20 absolute bottom-[-100px] lg:right-[-300px] right-[-450px]'></div>



            <div className='flex gap-3 lg:gap-10'>
                <div className='relative flex items-center'>
                    <img src={polygon} alt="polygon" className='w-[29.36vw] lg:w-[263px]'/>
                        <div className='absolute flex flex-col items-center justify-center w-[100%] font-[600] text-[#FE6126] text-[9px] lg:text-[20px]'>
                        <p>35%</p>
                        <p>Presale</p>
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <img src={polygon} alt="polygon" className='w-[29.36vw] lg:w-[263px]'/>
                        <div className='absolute flex flex-col items-center justify-center w-[100%] font-[600] text-[#DF1CFF] text-[9px] lg:text-[20px]'>
                        <p>25%</p>
                        <p>Liquidity Pool</p>
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <img src={polygon} alt="polygon" className='w-[29.36vw] lg:w-[263px]'/>
                        <div className='absolute flex flex-col items-center justify-center w-[100%] font-[600] text-[#033DBB] text-[9px] lg:text-[20px]'>
                        <p>10%</p>
                        <p>Presale</p>
                    </div>
                </div>

                

            </div>

            <div className='flex gap-3 lg:gap-10'>
                <div className='relative flex items-center'>
                    <img src={polygon} alt="polygon" className='w-[29.36vw] lg:w-[263px]'/>
                        <div className='absolute flex flex-col items-center justify-center w-[100%] font-[600] text-[#9BD961] text-[9px] lg:text-[20px]'>
                        <p>10%</p>
                        <p>Marketing</p>
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <img src={polygon} alt="polygon" className='w-[29.36vw] lg:w-[263px]'/>
                        <div className='absolute flex flex-col items-center justify-center w-[100%] font-[600] text-[#DF8D1B] text-[9px] lg:text-[20px]'>
                        <p>10%</p>
                        <p>Team</p>
                    </div>
                </div>
            </div>

            <div className='flex '>
                
                <div className='relative flex items-center'>
                    <img src={polygon} alt="polygon" className='w-[29.36vw] lg:w-[263px]' />
                        <div className='absolute flex flex-col items-center justify-center w-[100%] font-[600] text-[#CA1D52] text-[9px] lg:text-[20px]'>
                        <p>10%</p>
                        <p>Future Reserve</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tokens