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
     console.log("🚀 ~ RevelCopon ~ copan:", copan)
     const {inputRef, handleCopyToClipboard} = useCopyToClipBoard()
     const { openModal, setCopan } = useContext(GlobalContext)
     var isDeal = copan?.offer_type.includes("deal")

     return (
          <div className='max-w-[400px] w-full px-6 py-6'>
               <div className=''>
                    <figure className=' p-1 flex items-center justify-center flex-col w-[60px] h-[60px]  mx-auto rounded-xl' 
                    style={{
                         backgroundColor: copan?.store?.backgroundColor?.hex || '#030303'
                     }}
                    >
                         <Image src={copan?.store?.logo?.asset.url} alt={copan?.name} width={50} height={50} />
                    </figure>
                    <Heading className="text-center mb-7 mt-3">Take {copan.discount}% Off with <span className='capitalize'>{copan?.store.name}</span> <br /> {!isDeal && 'Promo Code'}</Heading>
                    {
                         !isDeal && <div className=' flex mb-4'>
                         <input type={`text`} value={copan.couponCode} ref={inputRef} className="border outline-none p-2 flex-1 text-gray-400 rounded-bl-md rounded-tl-md" />
                         <button onClick={handleCopyToClipboard} className="text-primary text-sm bg-primary/20 px-3 flex items-center gap-1 rounded-br-md rounded-tr-md">
                              <IoCopyOutline />
                              Copy
                         </button>
                    </div>
                    }
                    
                    <Link href={copan.websiteURL} target='_blank'>
                         <Button color='primary' fullwidth variants='primary' size='medium' rounded>Use at <span className='capitalize'>{copan?.store.name}</span></Button>
                    </Link>
                    <p className="text-sm mt-3 text-center px-1">Copy the code, then go to <strong className='capitalize'>{copan?.store.name}</strong> and paste it in during checkout. Your savings will be applied!</p>
                    <div className="flex mt-4 gap-2 justify-center flex-wrap">
                    <h6 className="text-primary text-center font-semibold ">Did this deal work for you?</h6>
                    {/* <h6 onClick={()=>{
                         setCopan(copan);
                         openModal('affiliate')
                    }} className="text-secondary underline text-center font-semibold cursor-pointer">Get affiliate link!</h6> */}
                    </div>
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