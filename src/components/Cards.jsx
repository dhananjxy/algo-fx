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
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Platform: MetaTrader 5</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'> Currency account USD/EUR/GBP</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Minimum deposit $10</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Spread per lot $16 `(16points)`</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Maximum leverage 1:1000 *</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Up to $2000 Bonus</p>
              </div>
              <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>Prime</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8 text-white'>Platform: MetaTrader 5</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'> Currency account USD/EUR/GBP</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Minimum deposit $100</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Spread per lot $8 `(8points)`</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Maximum leverage 1:500 *</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Up to $2000 Bonus</p>
              </div>
              <button className='bg-black text-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 text-[#755b00]'>ECN</h2>
              <p className='text-center text-4xl font-bold text-[#af8300]'>$149</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8 text-white'>Platform: MetaTrader 5</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'> Currency account USD/EUR/GBP</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Minimum deposit $1000</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Spread-0</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Maximum leverage 1:400*</p>
                  <p className='py-2 border-b mx-8 mt-8 text-white'>Up to $2000 Bonus</p>
              </div>
              <button className='bg-[#ffd700] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
         {/* <div className='w- border-lime-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[#ffd700]'>
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
          </div>*/}
      </div>
    </div>
  );
};

export default Cards;
