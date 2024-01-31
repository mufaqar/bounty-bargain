import Image from 'next/image'
import React from 'react'
import Button from '../UI/button/button'

const ProceedCard = () => {
    return (
        <div className='flex md:flex-row flex-col items-center md:gap-10 gap-7 py-10 border-b border-black'>
            <div className='md:w-[30%] w-full'>
                <div className='bg-white py-14 px-8 rounded-3xl flex justify-center items-center border border-primary'>
                    <Image src="/images/partner/1.png" alt='partner' width={249} height={55} />
                </div>
            </div>
            <div className='md:w-[60%] w-full'>
                <h2 className='text-[40px] leading-[51px] font-medium text-primary mb-6 md:text-start text-center'>
                    OpinionWorld
                </h2>
                <ul className='proceed pl-5 md:text-start text-center gap-2'>
                    <li className='text-lg font-normal text-dark'>
                        Join now to start earning $25 cash payments (PayPal) or gift-cards
                    </li>
                    <li className='text-lg font-normal text-dark'>
                        Answers surveys on topics ranging from sports to politics, and your favourite Aussie brands
                    </li>
                    <li className='text-lg font-normal text-dark'>
                        Get your opinion featured in the news
                    </li>
                </ul>
            </div>
            <div className='md:w-[30%] w-full'>
                <Button
                    size='medium'
                    variants='primary'
                    color='primary'
                    fullwidth
                    rounded
                    className='text-lg bg-primary hover:bg-purple font-medium gap-7 max-w-[244px] md:mx-0 mx-auto'
                >
                    <div className='w-8 h-8 bg-white rounded-lg'></div> Join Now
                </Button>
                <ul className='flex md:gap-7 gap-3 items-center md:justify-start justify-center mt-7'>
                    <li className='flex md:flex-row flex-col gap-1 items-center'>
                        <Image src="/images/cash.png" alt='cash' width={33} height={36} />
                    </li>
                    <li className='flex md:flex-row flex-col gap-1 items-center'>
                        <Image src="/images/gift.png" alt='gift' width={33} height={36} />
                    </li>
                    <li className='flex md:flex-row flex-col gap-1 items-center'>
                        <Image src="/images/medal.png" alt='medal' width={33} height={36} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProceedCard