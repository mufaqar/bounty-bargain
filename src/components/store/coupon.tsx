'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { CiStar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Button from '../UI/button/button';
import { GlobalContext } from '@/context/global-context'
import Model from '../UI/model';
import RevelCopon from '../cards/revelCopon';

const Coupon = ({ data }: any) => {
    const { openModal, setCopan } = useContext(GlobalContext)
    return (
        <>
            <div className='bg-white p-5 w-full rounded-xl shadow-3xl'>
                <div className='flex md:flex-row flex-col gap-7 items-center'>
                    <div className='md:w-[15%] w-full'>
                        <Image src={data?.logo} alt='author' width={76} height={76} className='md:w-full md:h-full' />
                    </div>
                    <div className='md:w-[50%] w-full'>
                        <p className='text-base font-normal text-dark'>
                            {data?.title}
                        </p>
                        <p className='text-xl font-semibold text-dark my-2'>
                            {data?.info} + Orders
                        </p>
                        <ul className='flex flex-wrap gap-4 items-center'>
                            <li className='text-xs font-normal text-dark'>
                                <strong>Coupon used:</strong> {data?.useTime} times
                            </li>
                            <li className='text-xs font-normal text-dark'>
                                <span className='bg-dark h-[2px] w-[2px] rounded-full block'></span>
                            </li>
                            <li className='text-xs font-normal text-dark'>
                                <strong>Success rate: </strong> {data?.sucRate}%
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-[35%] w-full'>
                        {data?.deal && <p className='bg-[#FDDCB5] rounded-[31px] text-[9px] leading-3 font-medium text-dark flex w-fit md:ml-auto items-center gap-1 p-1 mb-2'>
                            <CiStar color='#FAA745' size={12} /> <span>{data?.deal}</span>
                        </p>}
                        <div onClick={() => {
                            setCopan(data);
                            openModal();
                        }}>
                            <Button
                                size='large'
                                variants='primary'
                                color={data?.deal ? "primary" : "secondary"}
                                fullwidth
                                rounded
                                className={`text-white ${data?.deal ? "hover:bg-secondary" : "hover:bg-primary"}`}
                            >
                                {data?.deal ? "SHOW COUPON " : "GET DEAL"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-[#E4E4E4] mt-6'>
                    <button className='text-xs font-medium text-dark flex items-center gap-2 p-4 pb-0'>
                        <span>See more details</span>  <FaChevronDown />
                    </button>
                </div>
            </div><Model><RevelCopon /></Model>
        </>
    )
}

export default Coupon