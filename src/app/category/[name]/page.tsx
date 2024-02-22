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
import { QQouponsByCategories, QSingleCategories } from '../../../../sanity/lib/queries'
import { Metadata } from 'next'
import { PortableText } from '@portabletext/react'


async function getData(name: any): Promise<any> {
  const coupons = await client.fetch(QQouponsByCategories, { name })
  const category = await client.fetch(QSingleCategories, { name })
  return {
    coupons,
    category
  }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const name = params.name
  let capitalizedStr = name.replace(/-/g, ' ').split(' ').map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${capitalizedStr} | Bounty Bargain`,
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
  }
}

export default async function Category({ params }: any) {
  const { coupons, category } = await getData(params.name)
  console.log("🚀 ~ Category ~ category:", category)
  return (
    <>
      <SearchBox />
      <section className='bg-secondary/5'>
        <Container className='pb-8 py-5'>
          <ul className='flex gap-1 items-center sm:pl-[10%]'>
            <li className='text-base font-normal text-[#44444B]'>Home</li>
            <li className='text-base font-normal text-[#44444B]'><BiChevronRight /></li>
            <li className='text-base font-medium text-[#44444B] capitalize'>{category.name} coupons</li>
          </ul>
          <Heading className="text-primary text-center my-8 capitalize">Today's Top {category.name} coupons & promo codes</Heading>
          <div className='text-base font-normal text-dark mt-6 mb-10 max-w-[800px] text-center mx-auto desc_content'>
            <PortableText value={category?.content} />
          </div>
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
