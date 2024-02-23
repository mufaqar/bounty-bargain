'use client'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import Button from '../UI/button/button';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import SearchResults from './SearchResults';

const SearchBox = () => {
     const router = useRouter()
     const [input, setInput] = useState('')
     const handleSearch = () => {
          router.push(`/submit-coupon`)
     }
     

     return (
          <section className='max-w-[650px] px-2 md:px-0 mx-auto py-4 md:py-8'>
               <div className='flex md:flex-row flex-col gap-3'>
                    <div className="flex-1 relative ">
                         <div className='border flex items-center p-2.5 rounded-md text-neutral gap-2'>
                              <FiSearch className='text-xl' />
                              <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='placeholder:text-light outline-none w-full' placeholder='What are you looking for?' />
                         </div>
                         <SearchResults input={input}/> 
                         
                    </div>

                    <Button
                         size="large"
                         color='secondary'
                         rounded
                         className='!text-sm'
                         click={handleSearch}
                    >
                         <AiOutlinePlusCircle />
                         Submit Coupon/Deal
                    </Button>
               </div>
          </section>
     )
}

export default SearchBox