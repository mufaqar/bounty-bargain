'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import BlockContents from '@/components/UI/blockContent'

const Promo = ({data, total}:any) => {
    console.log("🚀 ~ Promo ~ data:", data)
    const [more , setMore] = useState(false)
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary'>
                <span className='capitalize'>{data.name}</span> Coupons & Promo Codes
            </h1>
            <h3 className='text-xl font-medium text-dark'>
                Save with {total} Soma Offers.
            </h3>
            
            <div className='text-base font-normal text-dark mt-6 desc_content'>
                <BlockContents data={data?.detail}/>
                { more && <BlockContents data={data?.detail_onlick} /> }
            </div>
            <button onClick={()=>setMore(!more)} className='text-sm font-medium text-secondary inline-flex items-center gap-4 mt-6'>
                {
                    more ? <><span>Close</span> <AiOutlinePlusCircle /></> : <><span>Read More</span> <AiOutlinePlusCircle /></>
                }
            </button>
        </div>
    )
}

export default Promo