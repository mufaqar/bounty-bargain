'use client'
import { GlobalContext } from '@/context/global-context'
import Image from 'next/image'
import React, { useContext } from 'react'
import Heading from '../UI/heading/mainHeading'
import { IoCopyOutline } from "react-icons/io5";
import Button from '../UI/button/button'
import Link from 'next/link'
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import useCopyToClipBoard from '@/hooks/useCopyToClipBoard'

const RevelCopon = () => {
     const { copan } = useContext(GlobalContext)
     const {inputRef, handleCopyToClipboard} = useCopyToClipBoard()

     return (
          <div className='max-w-[400px] w-full px-6 py-6'>
               <div className=''>
                    <figure className='bg-[#030303] p-1 max-w-[60px] mx-auto rounded-xl'>
                         <Image src={copan?.logo.asset.url} alt={copan?.name} width={50} height={50} />
                    </figure>
                    <Heading className="text-center mt-3">Take {copan.discount}% Off with {copan?.websiteURL?.replace('http://', '')?.replace('https://', '')} <br /> Promo Code</Heading>
                    <div className='mt-7 flex mb-4'>
                         <input type={`text`} value={copan.couponCode} ref={inputRef} className="border outline-none p-2 flex-1 text-gray-400 rounded-bl-md rounded-tl-md" />
                         <button onClick={handleCopyToClipboard} className="text-primary text-sm bg-primary/20 px-3 flex items-center gap-1 rounded-br-md rounded-tr-md">
                              <IoCopyOutline />
                              Copy
                         </button>
                    </div>
                    <Link href={copan.websiteURL} target='_blank'>
                         <Button color='primary' fullwidth variants='primary' size='medium' rounded>Use at {copan?.websiteURL?.replace('http://', '')?.replace('https://', '')}</Button>
                    </Link>
                    <p className="text-sm mt-3 text-center px-1">Copy the code, then go to <strong>{copan?.websiteURL?.replace('http://', '')?.replace('https://', '')}</strong> and paste it in during checkout. Your savings will be applied!</p>
                    <h6 className="text-primary text-center font-semibold mt-4">Did this deal work for you?</h6>
                    <div className="mt-3 flex justify-center gap-3">
                         <button className="bg-light flex item-center text-neutral gap-1 px-3 py-2 hover:bg-primary hover:text-white rounded-md">
                              <FaRegThumbsUp className="text-green-400 pt-[2px] text-xl"/>
                              <span>Yes, it worked</span>
                         </button>
                         <button className="bg-light flex item-center text-neutral gap-1 px-3 py-2 hover:bg-primary hover:text-white rounded-md">
                              <FaRegThumbsDown className="text-red-400 pt-[3px] text-xl"/>
                              <span>No, try next</span>
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default RevelCopon