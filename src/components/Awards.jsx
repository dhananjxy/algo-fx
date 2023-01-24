import React from 'react'
import Award1 from '../assets/award-1.png';
import Award2 from '../assets/award-2.png';
import Award3 from '../assets/award-3.png';
import Award4 from '../assets/award-4.png';
import Award5 from '../assets/award-5.png';
import Award6 from '../assets/award-6.png';

const Awards = () => {
  return (<>
    <div className='flex justify-center'>
        <h1 className="text-white text-bold text-2xl">International Brokerages' Awards</h1>
    </div>
    <div className='flex justify-center'>
        <img className='p-5' src={Award1} alt="" />
        <img className='p-5' src={Award2} alt="" />
        <img className='p-5' src={Award3} alt="" />
        <img className='p-5' src={Award4} alt="" />
        <img className='p-5' src={Award5} alt="" />
        <img className='p-5' src={Award6} alt="" />
    </div>
    </>)
}

export default Awards