import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Works from './Works'
import Tokens from './Tokens'
import Roadmap from './Roadmap'
import Growing from './Growing'
import Footer from './Footer'

const First = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='w-[100vw] flex flex-col overflow-x-hidden items-center justify-center'>
        <Navbar open={open} setOpen={setOpen}/>
        <div className={`w-[100vw] ${open ? "hidden" : "flex"} flex-col overflow-x-hidden items-center justify-center`}>
        <Hero />
        <Works />
        <Tokens />
        <Roadmap />
        <Growing />
        <Footer />
            
        </div>
    </div>
  )
}

export default First