import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[#ffd700] '>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>StocksTrader</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>StocksTrader offers the best conditions for trading stocks available at RoboMarkets, and a wide range of instruments for investments.</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
              </div>
              <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>Prime</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Prime is a premium account with some of the lowest spreads in the industry, and the most attractive trading conditions at RoboMarkets.</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
              </div>
              <button className='bg-black text-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>ECN</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>ECN accounts are perfect for trading currency pairs. This account type is intended for professional investors.</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
                  <p className='py-2 border-b mx-8 text-white'>profit 3</p>
              </div>
              <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w- border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>ProCent</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>ProCent accounts allow traders to test out new trading strategies with small deposits.</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
              </div>
              <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>Pro</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>The most popular account type at RoboMarkets. Suitable for traders with different levels of trading experience on the currency market.</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
                  <p className='py-2 border-b mx-8 text-white'>Profit 2</p>
              </div>
              <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
