import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-7 divide-y divide-[#CACACE]'>
            <div className='pt-6'>
                <Image src="/images/author.png" alt='author' width={152} height={153} />
            </div>
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    Rate Shein Offers
                </p>
                <ul className='text-2xl font-bold text-dark flex gap-1.5 items-center'>
                    <li><CiStar /></li>
                    <li><CiStar /></li>
                    <li><CiStar /></li>
                    <li><CiStar /></li>
                    <li><CiStar /></li>
                </ul>
            </div>
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    About Shein
                </p>
                <ul className='text-2xl font-bold text-purple flex gap-1.5 items-center'>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li className='text-sm font-normal text-[#636363]'>
                        4.7/5
                    </li>
                </ul>
                <p className='text-xs font-normal text-dark mt-4'>
                    SHEIN provides fashion-minded shoppers who love bargains with access to fresh and trendy styles. The brand does business entirely online and has no brick-and-mortar shops. Although SHEIN caters primarily to women, they also have men’s and children’s apparel. Home and pet supplies also have their own department with cute outfits for animals and attractive home décor. Women’s fashion is by far SHEIN’s biggest draw, however, and they provide everything from cocktail dresses and T-shirts to shoes and accessories. Shoppers can also find swimsuits, lingerie and all kinds of accessories. SHEIN typically adds over 100 new items every day, and stock is always limited. It’s a fast-paced sales environment that always has something fresh to admire.
                </p>
                <Link href="#" className='text-sm font-medium text-secondary inline-flex items-center gap-4 mt-6'>
                    <span>Read more about SHEIN</span> <AiOutlinePlusCircle />
                </Link>
            </div>
            <div className='pt-6'>
                <p className='text-lg font-bold text-purple mb-5'>
                    Today's SHEIN Top Offers:
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
                        <strong> 50</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Coupon Codes</span>
                        <strong>  42</strong>
                    </li>
                    <li className='text-sm font-normal text-dark flex items-center justify-between'>
                        <span>Free Shipping Deals</span>
                        <strong>  2</strong>
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
                    <li className='text-sm font-normal text-dark'>
                        Kohl's
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Macy's
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Bed Bath & Beyond
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Target
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Old Navy
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        ULTA
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        American Eagle
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Victoria's Secret
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Amazon
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        H&M
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Edible Arrangements
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Gap
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        VistaPrint
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Urban Outfitters
                    </li>
                    <li className='text-sm font-normal text-dark'>
                        Bloomingdale's
                    </li>
                </ul>
                <Link href="#" className='text-sm font-medium text-secondary inline-flex items-center gap-4 mt-6'>
                    <span>View All</span> <AiOutlinePlusCircle />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar