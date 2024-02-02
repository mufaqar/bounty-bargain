import Banner from '@/components/earnmoney/banner'
import HowItWork from '@/components/earnmoney/how-it-work'
import Partners from '@/components/earnmoney/partners'
import React from 'react'
import RegisterNow from '@/components/register-now'

export default function EarnMoney() {
    return (
        <>
            <section className='h-full min-h-screen bg-secondary/10 py-20 overflow-hidden'>
                <Banner />
                <Partners />
            </section>
            <section className='bg-[#C2D7FF] py-16'>
                <HowItWork />
            </section>
            <section className='py-16'>
                <RegisterNow />
            </section>
        </>
    )
}
