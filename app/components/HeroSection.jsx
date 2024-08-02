'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
     <div className='col-span-7 place-self-center text-center sm:text-left'>
     <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>Hello I am{" "}</span> 
      <br />
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ankit Dwivedi',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={25}
      repeat={Infinity}
    />
      </h1> 
     <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In perferendis reprehenderit tempore explicabo hic delectus odit magnam provident nobis expedita. Possimus voluptate cumque porro itaque consequuntur dicta ex, magnam molestiae?</p>
     <div>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
     </div>
     </div>
     <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
        <Image src="/images/coding.png"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        alt='hero-image'
        width={300}
        height={300}
        />
        </div>
     </div>
      </div>
    </section>
  )
}

export default HeroSection
