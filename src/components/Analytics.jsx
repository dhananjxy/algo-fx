import React from 'react';
import Laptop from '../assets/laptopblack.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#af8300] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#ffd700]'>Multi-Asset Platform AlgoFX</h1>
          <p className="text-white">
          AlgoFX is a brand-new trading platform that performs as a powerful stocks trading software with multiple features. Discover advanced charting capabilities, over 12,000 instruments, building automated strategies and more.

<br/>Access to global markets in one single platform.
<br/>Minimum deposit: 100 USD.
<br/>Stocks Leverage: up to 1:20.
<br/>3,000 stocks and 8,000 CFDs to choose from.
          </p>
          <button className='bg-[#ffd700] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
