'use client'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";


const CalculateRating = ({ number }: any) => {
     const [rated, setRated] = useState<any>(false)
     let roundedNumber = Math.ceil(rated);
     console.log("🚀 ~ CalculateRating ~ rated:", rated)

     useEffect(() => {
          const r: any = localStorage.getItem('rated')
          setRated(JSON.parse(r))
     }, [])

     return (
          <>
               <div className=' flex items-center gap-2'>
                    {
                         <ul className='text-2xl font-bold text-dark flex gap-1.5 items-center'>
                              {
                                   [1, 2, 3, 4, 5].slice(0, roundedNumber).map((star, idx) => (
                                        <li key={idx}>
                                             <div className='text-purple '><FaStar /></div>
                                        </li>
                                   ))

                              }
                              {
                                   [1, 2, 3, 4, 5].slice(roundedNumber, 5).map((star, idx) => (
                                        <li key={idx}>
                                             <div className='text-purple '><FaRegStar /></div>
                                        </li>
                                   ))

                              }
                         </ul>
                    }

                    <ul className='text-2xl font-bold text-purple flex gap-1.5 items-center'>
                         <li className='text-sm mt-1 font-normal text-[#636363]'>
                              {Math.ceil(rated) || '5'}/5
                         </li>
                    </ul>
               </div>
          </>
     )
}

export default CalculateRating