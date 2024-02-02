import Container from '@/components/UI/container'
import Heading from '@/components/UI/heading/mainHeading'
import SearchBox from '@/components/searchBox/searchBox'
import Coupon from '@/components/store/coupon'
import React from 'react'
import AnotherDeal from '@/components/store/another-deal'
import { BiChevronRight } from 'react-icons/bi'
import Categories from '@/components/categories'
import PopularStories from '@/components/popular-stories'
import { client } from '../../../../sanity/lib/client'
import { QQouponsByCategories } from '../../../../sanity/lib/queries'

async function getData(name:any): Promise<any> {
    const coupons = await client.fetch(QQouponsByCategories, {name})
    return {
      coupons
    }
  }
  

export default async function Category({params}:any) {
    const { coupons } =  await getData(params.name)
    return (
        <>
            <SearchBox />
            {JSON.stringify(coupons, null, 2)}
            <section className='bg-secondary/5'>
                <Container className='pb-8 py-5'>
                    <ul className='flex gap-1 items-center sm:pl-[10%]'>
                        <li className='text-base font-normal text-[#44444B]'>Home</li>
                        <li className='text-base font-normal text-[#44444B]'><BiChevronRight /></li>
                        <li className='text-base font-medium text-[#44444B] capitalize'>{params.name.replace(/-/g, ' ')} coupons</li>
                    </ul>
                    <Heading className="text-primary text-center my-8 capitalize">Today's Top {params.name.replace(/-/g, ' ')} coupons & promo codes</Heading>
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
                <Container className='py-8'>
                    <AnotherDeal />
                </Container>
                <Container className='py-6 flex flex-col gap-7 '>
                        <Categories />
                        <div className="pt-[1px] w-full bg-neutral mt-8" />
                        {/* Popular Stores */}
                        <PopularStories />
                </Container>
            </section>
        </>
    )
}
