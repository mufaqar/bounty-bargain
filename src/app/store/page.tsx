import Accordion from '@/components/store/accordion'
import AnotherDeal from '@/components/store/another-deal'
import Coupon from '@/components/store/coupon'
import FaqSec from '@/components/store/faq-sec'
import Promo from '@/components/store/promo'
import Sidebar from '@/components/store/sidebar'
import React from 'react'
import { CouponData } from '../../../public/data/coupons'
import Container from '@/components/UI/container'
import { CategoriesData } from '../../../public/data/catogeries'

export default function Store() {
    return (
        <main className='bg-secondary/5'>
            <Container className='flex md:flex-row flex-col-reverse gap-10 py-16'>
                <aside className='md:w-1/4 w-full'>
                    <Sidebar />
                </aside>
                <div className='md:w-3/4 w-full'>
                    <div className='mb-16'>
                        <Promo />
                    </div>
                    <div>
                        <div className='flex flex-col gap-10'>
                            {CouponData?.map((item: any, idx: number) => {
                                return (
                                    <Coupon
                                        key={idx}
                                        data={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='py-8'>
                <AnotherDeal />
            </Container>
            <Container className='py-8'>
                <FaqSec />
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
        </main>
    )
}

