"use client"
import TeamCard from '@/app/Components/TeamCard'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/app/globals.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const page = ({data}) => {
  
  const teamData = [
        {
            "img":"/bibek.png",
            "name":"Bibek Lama",
            "role":"director",
            "about":"Bibek is the visionary founder and CEO of Going Genius Group. With over 16 years of experience in the tech industry, he leads the company's strategic direction and ensures every project delivers exceptional value to clients.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/arjun.png",
            "name":"Arjun Gautam",
            "role":"Full Stack Developer",
            "about":"Arjun is a passionate full stack developer who builds scalable web applications using modern technologies. He specializes in React, Next.js, Node.js, and cloud architecture.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/prakash.png",
            "name":"Prakash Sapkota",
            "role":"Full Stack Developer",
            "about":"Prakash is a skilled full stack developer with expertise in building robust backend systems and responsive frontend interfaces. He loves solving complex problems with clean, maintainable code.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/rohit.png",
            "name":"Rohit Baral",
            "role":"Full Stack Developer",
            "about":"Rohit is a dedicated full stack developer who excels at building performant web applications. He has a keen eye for detail and is always eager to learn emerging technologies.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/subarna.png",
            "name":"Subarna Ghimire",
            "role":"Full Stack Developer",
            "about":"Subarna is a versatile full stack developer who brings creativity and technical precision to every project. He contributes across the entire stack from database design to pixel-perfect UIs.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/jyoti.png",
            "name":"Jyoti Kunwar",
            "role":"Full Stack Developer",
            "about":"Jyoti is a talented full stack developer who builds reliable, user-friendly applications. She combines strong frontend skills with solid backend knowledge to deliver complete solutions.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/sima.png",
            "name":"Sima Malla",
            "role":"Full Stack Developer",
            "about":"Sima is a motivated full stack developer with a passion for building modern web applications. She constantly pushes herself to improve and deliver high-quality work.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/ambika.png",
            "name":"Ambika Khatiwada",
            "role":"UI/UX Designer",
            "about":"Ambika is a creative UI/UX designer who crafts intuitive and visually stunning interfaces. She combines user research with modern design principles to create experiences that delight users.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/anisha.png",
            "name":"Anisha Khatiwada",
            "role":"QA Tester",
            "about":"Anisha is a detail-oriented QA tester who ensures every product meets the highest quality standards. She designs comprehensive test plans and catches bugs before they reach production.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
        {
            "img":"/kamal.png",
            "name":"Kamal Jaishi",
            "role":"Alumni Genius Developer",
            "about":"Kamal is an enthusiastic full stack developer who brings energy and fresh perspectives to the team. He is a quick learner and contributes effectively across frontend and backend tasks.",
            "facebook":"",
            "instagram":"",
            "linkedin":""
        },
    ]
  return (
    <div className='w-full h-screen bg-[#18181B] flex flex-col items-center pt-20 max-md:pt-5 '>
     <div className='text-center max-md:mt-10'>
       <h1 className='text-[#F1C50E] uppercase text-3xl font-semibold'>Our Team</h1>
       <h2 className='text-zinc-200 text-xl'>Meet Our Geniuses</h2>
     </div>
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[60vw] h-[40vh] max-lg:w-[70vw] max-md:w-full max-md:h-full mt-15"
      >
        
            <div className=' w-full mt-15 '>
        {teamData.map((team:any,idx)=>{
          return <SwiperSlide className='w-full flex jsutify-between'><TeamCard data={team}/></SwiperSlide>
        })}
      </div>
       
      
      </Swiper>
    </div>
    
  )
}

export default page
