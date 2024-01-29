import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const Coupon = ({ name, price, useTime, sucRate, deal, img }: any) => {
    return (
        <div className='bg-white p-5 w-full rounded-xl shadow-3xl'>
            <div className='flex md:flex-row flex-col gap-7 items-center'>
                <div className='md:w-[15%] w-full'>
                    <Image src={img} alt='author' width={76} height={76} className='md:w-full md:h-full' />
                </div>
                <div className='md:w-[50%] w-full'>
                    <p className='text-base font-normal text-dark'>
                        {name}
                    </p>
                    <p className='text-xl font-semibold text-dark my-2'>
                        {price} + Orders
                    </p>
                    <ul className='flex flex-wrap gap-4 items-center'>
                        <li className='text-xs font-normal text-dark'>
                            <strong>Coupon used:</strong> {useTime} times
                        </li>
                        <li className='text-xs font-normal text-dark'>
                            <span className='bg-dark h-[2px] w-[2px] rounded-full block'></span>
                        </li>
                        <li className='text-xs font-normal text-dark'>
                            <strong>Success rate: </strong> {sucRate}%
                        </li>
                    </ul>
                </div>
                <div className='md:w-[35%] w-full'>
                    {deal && <p className='bg-[#FDDCB5] rounded-[31px] text-[9px] leading-3 font-medium text-dark flex w-fit md:ml-auto items-center gap-1 p-1 mb-2'>
                        <CiStar color='#FAA745' size={12} /> <span>{deal}</span>
                    </p>}
                    <Link href="#" className={`text-base font-bold text-white block max-w-[222px] w-full md:ml-auto text-center rounded-[10px] py-3.5 px-4 ${deal ? "bg-primary hover:bg-secondary" : "bg-secondary hover:bg-primary"}`}>
                        {deal ? "SHOW COUPON " : "GET DEAL"}
                    </Link>
                </div>
            </div>
            <div className='border-t border-[#E4E4E4] mt-6'>
                <p className='text-xs font-medium text-dark flex items-center gap-2 p-4 pb-0'>
                    <span>See more details</span>  <FaChevronDown />
                </p>
            </div>
        </div>
    )
}

export default Coupon