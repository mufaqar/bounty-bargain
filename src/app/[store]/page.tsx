import AnotherDeal from '@/components/store/another-deal'
import Coupon from '@/components/store/coupon'
import FaqSec from '@/components/store/faq-sec'
import Promo from '@/components/store/promo'
import Sidebar from '@/components/store/sidebar'
import React from 'react'
import Container from '@/components/UI/container'
import { client } from '../../../sanity/lib/client'
import { QQouponsByStore, QStore } from '../../../sanity/lib/queries'
import Categories from '@/components/categories'
import PopularStories from '@/components/popular-stories'
import { GetCurrentDateInISOFormat } from '@/utils'
import BlockContents from '@/components/UI/blockContent'

async function getData(name: any): Promise<any> {
    const coupons = await client.fetch(QQouponsByStore, { name })
    const store = await client.fetch(QStore, { name })
    return {
        coupons,
        store
    }
}

export default async function Store({ params }: any) {
    const { coupons, store } = await getData(params.store)
    const currentDateInISOFormat = GetCurrentDateInISOFormat();
    // const todaysOffer = coupons.filter((item:any)=>item._createdAt.slice(0, 10) === currentDateInISOFormat )
    const highestDiscount = Math.max(...coupons.map((offer:any) => offer.discount));
    const totalcoupons = coupons.filter((item: any) => item.offer_type.some((t: any) => t === 'code'))
    const totalDeals = coupons.filter((item: any) => item.offer_type.some((t: any) => t === 'deal'))

    return (
        <main className='bg-secondary/5'>
            <Container className='flex md:flex-row flex-col-reverse gap-10 py-16'>
                <aside className='md:w-1/4 w-full'>
                    <Sidebar data={store} total={coupons?.length} highestDiscount={highestDiscount} totalcoupons={totalcoupons.length} totalDeals={totalDeals.length} />
                </aside>
                <div className='md:w-3/4 w-full'>
                    <div className='mb-16'>
                        <Promo data={store} total={coupons?.length} />
                    </div>
                    <div>
                        <div className='flex flex-col gap-10'>
                            {coupons?.map((item: any, idx: number) => {
                                return (
                                    <Coupon
                                        key={idx}
                                        data={item} 
                                    />
                                )
                            })}
                        </div>
                        <BlockContents data={store?.detail_onlick} />
                    </div>
                </div>
            </Container>
            <Container className='py-8'>
                <AnotherDeal />
            </Container>
            <Container className='pt-8'>
                <FaqSec data={store.faqs} name={store.name} />
            </Container>
            <Container className='pb-6 flex flex-col gap-7 '>
                <Categories />
                <div className="pt-[1px] w-full bg-neutral mt-8" />
                {/* Popular Stores */}
                <PopularStories />
            </Container>
        </main>
    )
}






