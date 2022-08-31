import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'
import supportImg from '../assets/5bbef2b64.webp'

const Hero = () => {
    return (
        
      <div name='home' className='w-full h-screen flex flex-col justify-between opacity-100'>
          <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>
            
          <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
             
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        
                <h1 className='py-3 text-5x1 md:text-7xl font-bold text-white relative'>Business Consult & Management</h1>
                <button className='py-3 px-6 sm:w-[60%] my-4 text-white relative'>Request a call</button>
            </div>
            <div>
                <img className='w-full relative' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[1060px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Our Services </p><br/>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Business Registration</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Tin Processing </p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Tax Filling</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Bulk SMS</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Call center </p>
                    {/* <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' />  </p> */}
                    <button className='py-1 px-2 sm:w-[15%] my-2'>Download Full List</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero