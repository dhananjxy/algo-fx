import React from "react";
import Fade from "react-reveal/Fade";
import TradingViewWidget from "./TradingviewChart";
function Reason() {

  

  return (
    <div className="bg-black w-full content-center px-10 lg:px-28 lg:h-screen overflow-hidden">
        <h1 className='text-bold text-2xl text-[#ffd700]'>WHY CHOOSE AlgoFXTrades?</h1>
      <div className="lg:flex lg:pt-8">
        <Fade left cascade>
          <div className="lg:w-[800px] text-white container  xl:pt-24 lg:pt-10 pt-20">
            <p>Follow the most valid technical analysis and compare them to yours, to have the most benefits. Follow the most important trading symbols' technical analysis here.</p>
            <br /><p>Plan your trading with important news events to get an edge in Forex. News and data are automatically updated so you are always updated with crucial information that will impact your trading decisions.</p>
            <br /><p>With more than 1400 trading symbols and 300 cryptocurrencies, it is possible to choose from a wide range of trading symbols in the financial markets to maximize your profits.</p>
           
            

            <div className="xl:flex justify-start mt-7">
             
            </div>
          </div>
        </Fade>

       <div className="pr-24 lg:pr-0">
          <Fade right cascade>
            <div className="boy-illustration">
             <TradingViewWidget />
            </div>
          </Fade> 
        </div>
      </div>
    </div>
  );
}

export default Reason;