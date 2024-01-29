import Accordion from '@/components/store/accordion'
import AnotherDeal from '@/components/store/another-deal'
import Coupon from '@/components/store/coupon'
import FaqSec from '@/components/store/faq-sec'
import Promo from '@/components/store/promo'
import Sidebar from '@/components/store/sidebar'
import React from 'react'

export default function Store() {
    return (
        <main className='bg-secondary/5'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col-reverse gap-10 py-16'>
                <aside className='md:w-1/4 w-full'>
                    <Sidebar />
                </aside>
                <div className='md:w-3/4 w-full'>
                    <div className='mb-16'>
                        <Promo />
                    </div>
                    <div>
                        <div className='flex flex-col gap-10'>
                            {CouponData?.map((item, idx) => {
                                return (
                                    <Coupon
                                        key={idx}
                                        name={item?.name}
                                        price={item?.price}
                                        useTime={item?.useTime}
                                        sucRate={item?.sucRate}
                                        deal={item?.deal}
                                        img={item?.img}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 py-8'>
                <AnotherDeal />
            </div>
            <div className='container mx-auto px-4 py-8'>
                <FaqSec />
            </div>
            <div className='container mx-auto px-4 py-8'>
                <AnotherDeal />
            </div>
            <div className='container mx-auto px-4 py-8 flex flex-col gap-7 divide-y divide-black/50'>
                <Accordion
                    title=" Popular Categories"
                />
                <Accordion
                    title="Popular Stores"
                />
            </div>
        </main>
    )
}

export const CouponData = [
    {
        name: " Coupon name",
        price: "$20 Off $49",
        useTime: "138",
        sucRate: "78",
        deal: "TOP DEAL",
        img: "/images/author.png",
    },
    {
        name: " Coupon name",
        price: "$20 Off $49",
        useTime: "138",
        sucRate: "78",
        deal: "TOP DEAL",
        img: "/images/author.png",
    },
    {
        name: " Coupon name",
        price: "$20 Off $49",
        useTime: "138",
        sucRate: "78",
        deal: "",
        img: "/images/author.png",
    },
    {
        name: " Coupon name",
        price: "$20 Off $49",
        useTime: "138",
        sucRate: "78",
        deal: "TOP DEAL",
        img: "/images/author.png",
    },
    {
        name: " Coupon name",
        price: "$20 Off $49",
        useTime: "138",
        sucRate: "78",
        deal: "",
        img: "/images/author.png",
    },
    {
        name: " Coupon name",
        price: "$20 Off $49",
        useTime: "138",
        sucRate: "78",
        deal: "TOP DEAL",
        img: "/images/author.png",
    },
]