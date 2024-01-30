import Container from '@/components/UI/container'
import Heading from '@/components/UI/heading/mainHeading'
import SearchBox from '@/components/searchBox/searchBox'
import Coupon from '@/components/store/coupon'
import React from 'react'
import { CouponData } from '../../../public/data/coupons'
import AnotherDeal from '@/components/store/another-deal'
import Accordion from '@/components/store/accordion'
import { BiChevronRight } from 'react-icons/bi'
import { CategoriesData } from '../../../public/data/catogeries'

export default function Category() {
    return (
        <>
            <SearchBox />
            <section className='bg-secondary/5'>
                <Container className='pb-8 py-5'>
                    <ul className='flex gap-1 items-center sm:pl-[10%]'>
                        <li className='text-base font-normal text-[#44444B]'>Home</li>
                        <li className='text-base font-normal text-[#44444B]'><BiChevronRight /></li>
                        <li className='text-base font-medium text-[#44444B]'>Food & Drink coupons</li>
                    </ul>
                    <Heading className="text-primary text-center my-8">Today's Top Food & Drink coupons & promo codes</Heading>
                    <div className='max-w-[730px] mx-auto flex flex-col gap-10'>
                        {CouponData?.map((item: any, idx: number) => {
                            return (
                                <Coupon
                                    key={idx}
                                    data={item} />
                            )
                        })}
                    </div>
                </Container>
                <Container className='py-8'>
                    <AnotherDeal />
                </Container>
                <Container className='py-8 flex flex-col gap-7 divide-y divide-black/50'>
                    <Accordion
                        title="Categories"
                        data={CategoriesData}
                    />
                    <Accordion
                        title="Stores"
                    />
                </Container>
            </section>
        </>
    )
}
