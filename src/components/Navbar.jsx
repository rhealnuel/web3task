import React from 'react'
import logo from '../assets/logog.png'
import openlogo from '../assets/open.svg'
import close from '../assets/close.svg'
import { motion, AnimatePresence } from "framer-motion";


const Navbar = ({open, setOpen}) => {



    if(open) {
        return(
            <AnimatePresence>
                {open && (
                     <motion.div
                    //  className="w-[100vw] h-[100vh] p-6 fixed top-0 left-0 z-50 flex items-center justify-center"
                     initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right
                     animate={{ opacity: 1, x: 0 }} // Animate to the center
                     exit={{ opacity: 0, x: "100%" }} // Animate back to the right
                     transition={{
                       type: "spring",
                       stiffness: 100,
                       damping: 15,
                     }}
                   >
            <div className='w-[100vw] h-[100vh] p-6'>
                <div className={` bg-[#c3c3c3] bg-opacity-[10%] backdrop-blur-[8px]  h-[80%] w-[100%] gap-10 flex  flex-col items-center pt-10  rounded-[24px]`}>
                
                    <div className='flex flex-col items-center  gap-10  w-[100%]'>
                        <div>
                            <img src={close} alt="close" onClick={() => setOpen(false)} />
                        </div>
                        <ul className='font-[400] text-[16px] flex flex-col items-center justify-center gap-14'>
                            <li className='cursor-pointer hover:text-[#ca1d52]'>White Paper</li>
                            <li className='cursor-pointer hover:text-[#ca1d52]'>How it Works</li>
                            <li className='cursor-pointer hover:text-[#ca1d52]'>Roadmap</li>
                            <li className='cursor-pointer hover:text-[#ca1d52]'>Our Telegram Channel</li>

                        </ul>
                    </div>

                    <div className='flex'>
                        <button className='text-black bg-[#CA1D52] w-[158px] h-[47px] rounded-[8px] font-[700] text-[14px]'>Join the presale</button>
                    </div>

                </div>

            </div>
            </motion.div>
                )}
            </AnimatePresence>
        )
    }
  return (
    <div className='h-[77px] lg:h-[92px] w-[86%] bg-[#c3c3c3] bg-opacity-[10%] backdrop-blur-[8px] overflow-hidden flex items-center justify-between px-[10px] lg:px-[50px] rounded-[24px] mt-[26px] lg:mt-[51px]'>
        <div className={` ${open? "hidden" : "flex"}`}>
            <img src={logo} alt="logo" className='h-[33px] lg:h-[38px]'/>
        </div>


        <div onClick={() => setOpen(true)} className={` ${open? "hidden" : "flex"} lg:hidden flex`}>
            <img src={openlogo} alt="" />
        </div>


        <div className='hidden lg:flex'>
            <ul className='font-[400] text-[16px] flex items-center gap-8'>
                <li className='cursor-pointer hover:text-[#ca1d52]'>White Paper</li>
                <li className='cursor-pointer hover:text-[#ca1d52]'>How it Works</li>
                <li className='cursor-pointer hover:text-[#ca1d52]'>Roadmap</li>
                <li className='cursor-pointer hover:text-[#ca1d52]'>Our Telegram Channel</li>

            </ul>
        </div>

        <div className='hidden lg:flex'>
            <button className='text-black bg-[#CA1D52] w-[158px] h-[47px] rounded-[8px] font-[700] text-[14px]'>Join the presale</button>
        </div>



        
        
    </div>
  )
}

export default Navbar