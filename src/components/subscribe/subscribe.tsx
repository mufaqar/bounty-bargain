'use client'
import React, { useContext } from 'react'
import Button from '../UI/button/button'
import { GlobalContext } from '@/context/global-context'

const Subscribe = () => {
     const {setNewsLetterConfurmation} =  useContext(GlobalContext)
     return (
          <>
               <div className='flex md:flex-row flex-col gap-2 mt-5'>
                    <div className='border border-primary flex items-center p-2.5 flex-1 rounded-md text-neutral gap-2'>
                         <input type='text' className='placeholder:text-gray-400 text-sm outline-none w-full' placeholder='Email Address' />
                    </div>
                    <Button
                         size="large"
                         color='primary'
                         rounded
                         className='!text-sm'
                    >
                         <span onClick={()=>setNewsLetterConfurmation(true)}>Subscribe</span>
                    </Button>
               </div>
          </>
     )
}

export default Subscribe