"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Accordion = ({ title }: any) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='max-w-[984px] mx-auto w-full pt-6'>
            <h3 onClick={() => setOpen(!open)} className='text-2xl font-semibold text-dark flex items-center justify-between cursor-pointer'>
                <span>
                    {title}
                </span>
                <AiOutlinePlusCircle />
            </h3>
            <div className={`${open === true ? "block" : "hidden"} mt-6`}>
                <ul className='flex flex-wrap md:gap-4 gap-2'>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            plants
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            mouthwash
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            plants
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            skin care
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            climate control
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            plants
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            plants
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            supplements
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            plants
                        </Link>
                    </li>
                    <li className='bg-white text-base font-semibold py-1 px-1.5 rounded border border-[#E9F0FF]'>
                        <Link href="#">
                            plants
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Accordion