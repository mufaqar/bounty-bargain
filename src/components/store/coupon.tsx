'use client'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Button from '../UI/button/button';
import { GlobalContext } from '@/context/global-context'
import { NewlyAddedCoupon } from '@/utils';

const Coupon = ({ data }: any) => {
    const { openModal, setCopan } = useContext(GlobalContext)
    const [moreDetails, setMoreDetails] = useState(false)
    const isNewly = NewlyAddedCoupon(data?._createdAt)
    console.log("🚀 ~ Coupon ~ newly:", isNewly)

    const handleMoreSetails = () => {
        setMoreDetails(!moreDetails)
    }
    return (
        <>
            <div className='bg-white p-5 w-full rounded-xl shadow-3xl'>
                <div className='flex md:flex-row flex-col gap-7 items-center'>
                    <div className='md:w-[15%] w-full'>
                        {
                            data?.store?.logo?.asset?.url ? <figure className='bg-gray-950 h-[90px] p-3 rounded-lg'>
                                <Image src={data?.store?.logo?.asset?.url} alt='author' width={76} height={86} className='md:w-full md:h-full object-contain invert' />
                            </figure> : <Image src={data?.logo?.asset?.url} alt='author' width={76} height={86} className='md:w-full md:h-full invert' />
                        }

                    </div>
                    <div className='md:w-[50%] w-full'>
                        <p className='text-base font-normal text-dark'>
                            {data?.name}
                        </p>
                        <p className='text-xl font-semibold text-dark my-2'>
                            {data?.info} + Orders
                        </p>
                        <ul className='flex flex-wrap gap-4 items-center'>
                            <li className='text-xs font-normal text-dark'>
                                <strong>Coupon used:</strong> {data?.totalUsed} times
                            </li>
                            <li className='text-xs font-normal text-dark'>
                                <span className='bg-dark h-[2px] w-[2px] rounded-full block'></span>
                            </li>
                            <li className='text-xs font-normal text-dark'>
                                <strong>Success rate: </strong> {data?.successRate}%
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-[35%] w-full'>
                        {isNewly && <p className='bg-[#FDDCB5] rounded-[31px] text-[9px] leading-3 font-medium text-dark flex w-fit md:ml-auto items-center gap-1 p-1 px-2 mb-2'>
                            <CiStar color='#FAA745' size={12} /> <span className='text-gray-700'>Newly added</span>
                        </p>}

                        <Button
                            size='large'
                            variants='primary'
                            color={data?.offer_type?.[0] === 'coupon' ? "primary" : "secondary"}
                            fullwidth
                            rounded
                            className={`text-white ${data?.offer_type?.[0] === 'coupon' ? "hover:bg-secondary" : "hover:bg-primary"}`}
                            click={() => {
                                setCopan(data)
                                openModal('coupon')
                            }}
                        >
                            {data?.offer_type?.[0] === 'coupon' ? "SHOW COUPON " : "GET DEAL"}
                        </Button>

                    </div>
                </div>
                <div className='border-t border-[#E4E4E4] mt-6'>
                    <button className='text-xs font-medium text-dark flex items-center gap-2 p-4 pb-0' onClick={handleMoreSetails}>
                        <span> See more details </span>  <FaChevronDown />
                    </button>
                    {
                        moreDetails && <div className='mt-4 px-4'>
                            <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 capitalize'>
                                <li className='text-xs font-normal text-dark flex justify-between'>
                                    <strong>Store: </strong> {data?.store?.name}
                                </li>
                                <li className='text-xs font-normal text-dark flex justify-between'>
                                    <strong>Category: </strong> {data?.category?.name}
                                </li>
                                <li className='text-xs font-normal text-dark flex justify-between'>
                                    <strong>Discount: </strong> {data?.discount}%
                                </li>
                                <li className='text-xs font-normal text-dark flex justify-between'>
                                    <strong>URL: </strong> {data?.websiteURL}
                                </li>
                                <li className='text-xs font-normal text-dark flex justify-between'>
                                    <strong>Type: </strong> {data?.offer_type?.[0]}
                                </li>
                            
                                <li className='text-xs font-normal text-dark flex justify-between'>
                                    <strong>Country: </strong> {data?.country?.name}
                                </li>
                            </ul>

                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Coupon