"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Accordion = ({ title, data }: any) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full pt-6'>
            <h3 onClick={() => setOpen(!open)} className='text-2xl font-semibold text-dark flex items-center justify-between cursor-pointer'>
                <span>
                    Popular {title}
                </span>
                {open ? (<AiOutlineMinusCircle />) : (<AiOutlinePlusCircle />)}
            </h3>
            <div className={`${open === true ? "block" : "hidden"} mt-6`}>
                {title == "Categories" ? (<ul className='flex flex-wrap md:gap-3 gap-2'>
                    {data?.map((item: any, idx: number) => {
                        return (<li key={idx} className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                            <Link href="#">
                                {item?.title}
                            </Link>
                        </li>
                        )
                    })}
                </ul>) :
                    (
                        <div className='grid md:grid-cols-5 grid-cols-2 gap-5'>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item: any, idx: number) => {
                                return (<Link href="#" key={idx} className='max-w-[189px] mx-auto'>
                                    <div className='max-w-[189px] max-h-[189px] mx-auto shadow-3xl'>
                                        <Image src="/images/author.png" alt='logo' width={189} height={189} className='w-full h-full' />
                                    </div>
                                    <p className='text-[13px] leading-4 font-normal text-dark text-center mt-3'>
                                        Text here about this brand and it's promo & coupons.
                                    </p>
                                </Link>
                                )
                            })}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Accordion