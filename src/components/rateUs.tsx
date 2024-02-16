'use client'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import { client } from '../../sanity/lib/client';

const RateUs = ({ data, id }: any) => {

     const [starNumber, setStarNumber] = useState<number>(0)
     const [loading, setLoading] = useState(false)
     const [rated, setRated] = useState<any>(false)

     useEffect(()=>{
         const r:any = localStorage.getItem('rated')
         setRated(JSON.parse(r))
     },[])

     const handleRating = (star: any) => {

          const grandRating = (data.grandRating + star) / 2
          setLoading(true)
          client
               .patch(id) // Document ID to patch
               .set({ grandRating: grandRating }) // Shallow merge
               // .inc({ grandRating: 1 })
               .commit() // Perform the patch and return a promise
               .then((res) => {
                    console.log("Updated");
                    toast.success(`You are successfully rated To ${data?.name}!`, { position: "top-right" });
                    setLoading(false)
                    setStarNumber(0)
                    setRated(true)
                    localStorage.setItem('rated', 'true')
               })
               .catch((err) => {
                    toast.error(`Not rated ${data?.name}!`, { position: "top-right" });
                    setLoading(false)
               });
     }
     return (
          <>
               <div className='pt-6'>
                    <p className='text-lg font-bold text-purple mb-5'>
                         Rate {data?.name} Offers
                    </p>
                    {
                         loading && <div role="status">
                              <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-100 mr-2 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                              </svg>
                         </div>
                    }
                    {
                         rated ? <p className="text-sx">You are already Rated</p> : 
                         <ul className='text-2xl font-bold text-dark flex gap-1.5 items-center'>
                              {
                                   [1, 2, 3, 4, 5].slice(0, starNumber).map((star, idx) => (
                                        <li key={idx} onClick={() => handleRating(star)} onMouseEnter={() => setStarNumber(star)}>
                                             <div className='text-purple cursor-pointer'><FaStar /></div>
                                        </li>
                                   ))

                              }
                              {
                                   [1, 2, 3, 4, 5].slice(starNumber, 5).map((star, idx) => (
                                        <li key={idx} onClick={() => handleRating(star)} onMouseEnter={() => setStarNumber(star)}>
                                             <div className='text-purple cursor-pointer'><FaRegStar /></div>
                                        </li>
                                   ))

                              }
                         </ul>
                    }

               </div>
          </>
     )
}

export default RateUs