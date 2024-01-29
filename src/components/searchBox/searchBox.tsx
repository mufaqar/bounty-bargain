import React from 'react'
import { FiSearch } from "react-icons/fi";
import Button from '../UI/button/button';
import { AiOutlinePlusCircle } from "react-icons/ai";

const SearchBox = () => {
     return (
          <section className='max-w-[650px] px-2 md:px-0 mx-auto py-4 md:py-8'>
               <div className='flex md:flex-row flex-col gap-3'>
                    <div className='border flex items-center p-2.5 flex-1 rounded-md text-neutral gap-2'>
                         <FiSearch className='text-xl'/>
                         <input type='text' className='placeholder:text-light outline-none w-full' placeholder='What are you looking for?' />
                    </div>
                    <Button
                         size="large"
                         color='secondary'
                         rounded
                         className='!text-sm'
                    >
                          <AiOutlinePlusCircle/>
                          Submit Coupon/Deal
                    </Button>
               </div>
          </section>
     )
}

export default SearchBox