import React from 'react'
import Button from '../UI/button/button'
import Image from 'next/image'
import ProceedCard from './proceed-card'

const SelectProceed = () => {
    return (
        <div>
            <div className='flex gap-5 justify-between items-center md:py-2 py-5 border-y border-black'>
                <div className='md:w-1/2 w-full'>
                    <Button
                        size='large'
                        variants='primary'
                        color='primary'
                        fullwidth
                        rounded
                        className='text-2xl bg-purple hover:bg-primary max-w-[407px] w-full font-medium !px-0'
                    >
                        <span className='md:block hidden'>Select All and Proceed</span>
                        <span className='md:hidden block'>Select All</span>
                    </Button>
                </div>
                <div className='md:w-1/2 w-full'>
                    <ul className='flex md:gap-7 gap-3 items-center justify-end'>
                        <li className='flex md:flex-row flex-col gap-1 items-center'>
                            <Image src="/images/cash.png" alt='cash' width={33} height={36} />
                            <span className='md:text-lg text-base font-normal text-dark md:text-start text-center'>
                                Cash
                            </span>
                        </li>
                        <li className='flex md:flex-row flex-col gap-1 items-center'>
                            <Image src="/images/gift.png" alt='gift' width={33} height={36} />
                            <span className='md:text-lg text-base font-normal text-dark md:text-start text-center'>
                                Gift Cards
                            </span>
                        </li>
                        <li className='flex md:flex-row flex-col gap-1 items-center'>
                            <Image src="/images/medal.png" alt='medal' width={33} height={36} />
                            <span className='md:text-lg text-base font-normal text-dark md:text-start text-center'>
                                Other incentives
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                {[0, 1, 2]?.map((item: any, idx: number) => {
                    return (<ProceedCard key={idx} />
                    )
                })}
            </div>
        </div>
    )
}

export default SelectProceed