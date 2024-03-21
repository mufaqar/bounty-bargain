import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaStar } from "react-icons/fa";
import RateUs from '../rateUs';
import { client } from '../../../sanity/lib/client';
import { QStores } from '../../../sanity/lib/queries';
import CalculateRating from '../calculateRating';
import AffiliateButton from './affiliateButton';

async function getData(category:any) {
    const allstores = await client.fetch(QStores)
    
    const similerStore = allstores.filter((item:any) => item.category?.name === category) 
    return {
        similerStore,
    }
}


const Sidebar = async ({ data, total, totalcoupons, totalDeals, highestDiscount }: any) => {
    const { similerStore } = await getData(data?.category?.name)
    return (
        <div className='flex flex-col gap-7 divide-y divide-[#CACACE]'>
            <div className='pt-6'>
                <figure className=" flex-col justify-center items-center h-[140px] w-[140px] flex p-4 rounded-lg" style={{
                    backgroundColor: data?.backgroundColor?.hex
                }}>
                    <Image src={data?.logo?.asset.url} alt='author' width={152} height={153} className='object-contain ' />
                </figure>
                {/* <AffiliateButton data={data} /> */}
            </div>
            <RateUs data={data} id={data._id} />
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    About {data.name}
                </p>
                <CalculateRating number={data.grandRating}/>
                <p className='text-xs font-normal text-dark mt-4'>
                    {data.info}
                </p>
                <Link href="#" className='text-sm font-medium text-secondary inline-flex items-center gap-4 mt-6'>
                    <span>Read more about {data.name}</span> <AiOutlinePlusCircle />
                </Link>
            </div>
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    Today's {data.name} Top Offers:
                </p>
                <ul className='flex flex-col gap-1 list-disc list-inside'>
                    <li className='text-sm font-normal text-dark'>
                        Up to {highestDiscount === -Infinity ? 0 : highestDiscount}% Off
                    </li>
                    {/* <li className='text-sm font-normal text-dark'>
                        15% Off Sitewide
                    </li> */}
                </ul>
                <ul className='flex flex-col gap-2 mt-6'>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Total Offers</span>
                        <strong> {total}</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Coupon Codes</span>
                        <strong>  {totalcoupons}</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Deals</span>
                        <strong>  {totalDeals}</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Best Discount</span>
                        <strong>  {highestDiscount === -Infinity ? 0     : highestDiscount}% off</strong>
                    </li>
                    {/* <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Cash Back Offer</span>
                        <strong>  1%</strong>
                    </li> */}
                </ul>
            </div>
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    Similar Stores
                </p>
                <ul className='flex flex-col gap-2'>
                    {
                        similerStore?.length > 0 ?
                        similerStore?.map((item: any, idx: number) => (
                            <li className='text-sm font-normal text-dark capitalize' key={idx}>
                                <Link href={'/store/'+item.slug.current}>{item?.name}</Link>
                            </li>
                        )) : <p className='text-sm font-normal text-dark'>Not found!</p>
                    }
                </ul>
                <Link href="#" className='text-sm font-medium text-secondary inline-flex items-center gap-4 mt-6'>
                    <span>View All</span> <AiOutlinePlusCircle />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar