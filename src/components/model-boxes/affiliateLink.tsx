'use client'

import Image from 'next/image'
import React, { useContext } from 'react'
import Heading from '../UI/heading/mainHeading'
import useCopyToClipBoard from '@/hooks/useCopyToClipBoard'
import { IoCopyOutline } from 'react-icons/io5'
import { GlobalContext } from '@/context/global-context'
import useBasePath from '@/hooks/useBasePath'

const AffiliateLink = () => {
     const {inputRef, handleCopyToClipboard} = useCopyToClipBoard()
     const { copan } = useContext(GlobalContext)
     const { url } = useBasePath()
     const affiliateLink = `${url}/${copan?._type}/${copan?._id}`

     return (
          <div className='max-w-[400px] w-full px-6 py-6'>
               <div className=''>
                    <figure className='bg-[#030303] p-1 max-w-[60px] h-[60px] flex items-center justify-center mx-auto rounded-xl'>
                         <Image src={copan?.logo?.asset.url} alt={copan?.name} width={50} height={50} className='invert'/>
                    </figure>
                    <Heading className="text-center mt-3">Generate Affiliate Link Of This <br /> {copan?._type === "store" ? 'Store' : 'Promo Code'}</Heading>
                    <div className='mt-7 flex mb-4'>
                         <input type={`text`} value={affiliateLink} ref={inputRef} className="border outline-none p-2 flex-1 text-gray-400 rounded-bl-md rounded-tl-md" />
                         <button onClick={handleCopyToClipboard} className="text-primary text-sm bg-primary/20 px-3 flex items-center gap-1 rounded-br-md rounded-tr-md">
                              <IoCopyOutline />
                              Copy
                         </button>
                    </div>
                    <p className="text-sm mt-3 text-center px-1">Copy the code, then go to any website to spread this link and get commition on each enquire</p>
                    <h6 className="text-primary text-center font-semibold mt-4">Did this deal work for you?</h6>
               </div>
          </div>
     )
}

export default AffiliateLink