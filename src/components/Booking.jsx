import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


export default function BookingSection() {
  //Animation

const container = {
  hidden: {},
  show: {
    transition: {
     staggerChildren: 0.5 
    }
  }
};

const message = {
  hidden: {opacity: 0, y: 10},
  show: {opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

return (
  
<motion.div 
initial="hidden"
animate="show"
variants={container}
className="relative flex flex-col md:flex-row items-center min-h-screen bg-[#FAFAFA] overflow-hidden  px-4 sm:px-6 lg:px-8 ">
{/*Top-left gradient blob */}
<div className="absolute top-0 left-[-30px] sm:left-[-60px] w-[280px] sm:w-[355px] h-[400px] sm:h-[550px] bg-gradient-to-b from-[hsl(293_100%_63%)] to-[hsl(264_100%_61%)] rounded-bl-[200px] rounded-br-[300px] z-0" />




{/* Main content */}
<div className="relative z-10 flex flex-col md:flex-row items-center w-full p-8">
{/* Left side with phone mockup */}
<div className="flex justify-center items-center flex-1">
<div className="w-[240px] sm:w-[260px] md:w-[280px] h-[480px] sm:h-[500px] md:h-[520px] rounded-[2rem] bg-white p-2 shadow-xl flex flex-col overflow-hidden relative">
  {/* Phone notch */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-white rounded-b-2xl z-20"></div>
  
  {/* Header with avatar and back arrow */}
  <div className="bg-gradient-to-r from-purple-600 to-[hsl(293_100%_63%)] text-white  pt-6 rounded-t-[2rem] rounded-b-[0.5rem] flex items-center ">
    <div className="w-6  ">
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </div>
    <div className="w-6 h-6 border rounded-full bg-white mr-3 overflow-hidden">
      <img src="/avatar.jpg" alt="Samuel" className="w-full h-full object-cover" />
    </div>
    <div>
      <div className="font-medium text-sm text-[hsl(276_100%_81%)]">Samuel Green</div>
      <div className="text-xs opacity-75 text-[hsl(276_100%_81%)]">Available to Walk</div>
    </div>
    <div className="ml-15">
      <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
      <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
      <div className="w-1 h-1 bg-white rounded-full"></div>
    </div>
  </div>

  {/* Chat body with animation */}
  <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="flex-1 px-2 p-2  space-y-4 text-xs sm:text-[0.58rem] bg-gray-100 overflow-y-auto no-scrollbar">
    <motion.div 
    variants={message}
    className='flex justify-start' >
    <div className="bg-[#EDE5F4] text-[hsl(276_55%_52%)]   p-2 rrounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm max-w-[65%]">That sounds great. I’d be happy with that.</div>
    </motion.div>
    <motion.div 
    variants={message}
    className='flex justify-start' >
    <div className="bg-[#EDE5F4] text-[hsl(276_55%_52%)] p-2 rounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm max-w-[65%]">Could you send over some pictures of your dog, please?</div>
    </motion.div>

    {/* Sample images */}
    <motion.div 
    variants={message}
    className="flex justify-end">
      <div className="flex gap-2">
        {["/dog-image-1.jpg", "/dog-image-2.jpg", "/dog-image-3.jpg"].map((src, i) => (

        <div key={i} className="w-10 h-10 rounded-xl overflow-hidden">
          <img src={src} alt = {`dog${i + 1}`} className="w-full h-full object-cover" />
        </div>
        ))}
        </div>
        </motion.div>
    
    <motion.div 
    variants={message}
    className="flex justify-end">
    <div className="bg-white p-2 rounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm text-[hsl(271_15%_43%)] max-w-[65%] ">Here are a few pictures. She’s a happy girl!</div>
    </motion.div>

    <motion.div 
    variants={message}
    className="flex justify-end">
    <div className="bg-white p-2 rounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm max-w-[65%] text-[hsl(271_15%_43%)] 
    ">Can you make it?</div>
    </motion.div>

      <motion.div 
      variants={message}
      className='flex justify-start' >
    <div className="bg-[#EDE5F4] text-[hsl(276_55%_52%)]  p-2 rounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm max-w-[60%] ">She looks so happy! The time we discussed works. How long shall I take her out for?</div>
    </motion.div>
  </motion.div>

  {/* Walk option buttons */}
  <div className="p-2 bg-gray-100">
    <div className="flex flex-col  gap-3">
      <button className="bg-gradient-to-r from-[hsl(293_100%_63%)] to-purple-600 text-white rounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm px-4 py-2 text-sm flex justify-between items-center max-w-[70%] text-xs sm:text-[0.58rem]">

        <div className="flex items-center">
          <div className="w-3 h-3 border-1 border-white rounded-full mr-3"></div>
          <div>
        <span className='mr-6'>30 minute walk</span> 
        </div>

        <span className='text-[0.7rem] font-bold'>$29</span>
        </div>
      </button>
      <button className="bg-gradient-to-r from-[hsl(293_100%_63%)] to-purple-600 text-white rounded-tr-lg rounded-br-lg rounded-tl-xl rounded-bl-sm px-4 py-2 text-sm flex justify-between items-center max-w-[70%] text-xs sm:text-[0.58rem]">

        <div className="flex items-center">
          <div className="w-3 h-3 border-1 border-white rounded-full mr-3"></div>
          <div>
        <span className='mr-9.5'>1 hour walk</span> 
        </div>

        <span className='text-[0.7rem] font-bold'> $49</span>
        </div>
      </button>
    </div>
  </div>


  <div className="p-3 bg-gray-100 rounded-b-[20px]">
      <div className="relative ">
    <input
      type="text"
      placeholder="Type a message..."
      className="w-full px-4 py-3 rounded-full bg-white  text-xs sm:text-[0.58rem]  focus:outline-none focus:border-purple-300 pr-12 placeholder-[hsl(206_6%_79%)]"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#383350] rounded-full flex items-center justify-center">
        <svg className="w-full h-full" fill="#fff" viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
      </svg>
      </button>
  </div>
  </div>
</div>
</div>

{/* Right side text */}
<div className="flex-1 w-full md:w-1/2 px-8 py-12 text-center md:text-left">
<h2 className="text-4xl font-bold text-[hsl(271_36%_24%)] mb-4">Simple booking</h2>
<p className="text-[hsl(270_7%_64%)] max-w-md">
  Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make
  bookings. Once the walk has been completed you can rate your walker and book again all through the chat.
</p>
</div>
</div>
</motion.div>
);
}
