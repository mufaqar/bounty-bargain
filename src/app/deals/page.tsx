import Container from '@/components/UI/container'
import Heading from '@/components/UI/heading/mainHeading'
import SearchBox from '@/components/searchBox/searchBox'
import Coupon from '@/components/store/coupon'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { client } from '../../../sanity/lib/client'
import { QQoupons } from '../../../sanity/lib/queries'

async function getData(): Promise<any> {
    const coupons = await client.fetch(QQoupons)
    return {
        coupons
    }
}


export default async function Deals() {
    const { coupons } = await getData()
    console.log("🚀 ~ Deals ~ coupons:", coupons)
    return (
        <>
            <SearchBox />
            <section className='bg-secondary/5'>
                <Container className='pb-8 py-5'>
                    <ul className='flex gap-1 items-center sm:pl-[10%]'>
                        <li className='text-base font-normal text-[#44444B]'>Home</li>
                        <li className='text-base font-normal text-[#44444B]'><BiChevronRight /></li>
                        <li className='text-base font-medium text-[#44444B] capitalize'>Deals coupons</li>
                    </ul>
                    <Heading className="text-primary text-center my-8 capitalize">Today's Top Deals coupons & promo codes</Heading>
                    <div className='max-w-[730px] mx-auto flex flex-col gap-10'>
                        {coupons?.map((item: any, idx: number) => {
                            return (
                                <Coupon
                                    key={idx}
                                    data={item}
                                />
                            )
                        })}
                    </div>
                </Container>

            </section>
        </>
    )
}
