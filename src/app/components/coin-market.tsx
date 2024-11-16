"use client";

import { useState } from 'react';
import { useEffect } from 'react';
const CoinMarket = () => {
    const API_KEY = "4024ad878cf2f230a0d1bd85ee692a20";
  const [data, setData] = useState<any>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const CryptoClub = async() => {
      let response = await fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`);
      let data = await response.json();
      console.log(data);
      setData(data);
    }
    CryptoClub();


   
  


   
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-3xl mx-auto'>Crypto Currency Market</h1>
      <table className='min-w-full bg-white border-4 border-gray-300'>
          <thead className='bg-green-300'>
            <tr >
              <th className='px-6 py-3 font-bold border-4 border-gray-300 '>S.No</th>
              <th className='px-6 py-3 font-bold border-4 border-gray-300'>Currency Name</th>
              <th className='px-6 py-3 font-bold border-4 border-gray-300'>Rates</th>
            </tr>
          </thead>

          <tbody>
          
            
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300' ></td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
              <tr className='border-2 border-gray-300n  text-black' >
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{count + 1}</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>BNB</td>
                   <td className='px-6 py-3 text-[16px] border-2 border-gray-300'>{data?.rates?.BNB}</td>
              </tr>
          
        
          </tbody>
      </table>
                   

      

     
        
    </div>
  )
}

export default CoinMarket