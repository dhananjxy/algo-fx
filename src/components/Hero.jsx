import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#af8300] font-bold p-2'>
          YOUR SOLUTION TO TRADE PROFITABELLY!
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Join and Earn with us.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible trading for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#755b00]'
            strings={['Stocks', 'Forex', 'Funds']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data and watch as we increase your trading revenue.</p>
        <div className='flex'>
        <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Login</button>
        <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
