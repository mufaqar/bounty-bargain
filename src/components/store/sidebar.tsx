import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaStar } from "react-icons/fa";
import RateUs from '../rateUs';
import { client } from '../../../sanity/lib/client';
import { QStores } from '../../../sanity/lib/queries';

async function getData(category:any) {
    
    const allstores = await client.fetch(QStores)
    const similerStore = allstores.filter((item:any) => item.category?.name === category) 
    return {
        similerStore,
    }
}


const Sidebar = async ({ data, total, totalcoupons, totalDeals }: any) => {
    const { similerStore } = await getData(data?.category?.name)
    return (
        <div className='flex flex-col gap-7 divide-y divide-[#CACACE]'>
            <div className='pt-6'>
                <figure className="bg-gray-950 flex-col justify-center items-center h-[140px] w-[140px] flex p-4 rounded-lg">
                    <Image src={data?.logo?.asset.url} alt='author' width={152} height={153} className='object-contain invert' />
                </figure>
            </div>
            <RateUs data={data} id={data._id} />
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    About {data.name}
                </p>
                <ul className='text-2xl font-bold text-purple flex gap-1.5 items-center'>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li className='text-sm mt-1 font-normal text-[#636363]'>
                        {data.grandRating || '5'}/5
                    </li>
                </ul>
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
                        Up to 20% Off $49.99+
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        15% Off Sitewide
                    </li>
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
                        <span>Free Shipping Deals</span>
                        <strong>  {totalDeals}</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Best Discount</span>
                        <strong>  20% off</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Cash Back Offer</span>
                        <strong>  1%</strong>
                    </li>
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
                            <li className='text-sm font-normal text-dark' key={idx}>
                                <Link href={'/store'+item.slug.current}>{item?.name}</Link>
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