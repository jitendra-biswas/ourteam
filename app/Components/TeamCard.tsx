import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const TeamCard = ({data}) => {
    
  return (
    <div className='flex max-md:flex-col text-zinc-200  px-5 gap-5 max-md:shrink-0 max-md:w-full'>
      <div className="left w-54 h-54 max-md:w-44 max-md:h-44  rounded-full shrink-0  overflow-hidden">
        <img src={data.img} alt="" className='w-full h-full object-cover object-center' />
      </div>
      <div className="right flex flex-col gap-3">
       <div>
         <h2 className='text-3xl font-semibold'>{data.name}</h2>
        <h2 className='text-[#F1C50E] uppercase font-semibold text-xl'>{data.role}</h2>
       </div>
        <p className='w-[25vw] max-lg:w-[40vw] max-md:w-full italic max-md:text-sm max-md:pr-10 text-zinc-300'>{data.about}</p>
        <div className="icons flex gap-2 text-xl max-md:text-sm">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
        </div>
      </div>
    </div>
  )
}

export default TeamCard
