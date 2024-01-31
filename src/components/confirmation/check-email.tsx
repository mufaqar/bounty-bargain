import Image from 'next/image'
import React from 'react'

const CheckEmail = () => {
    return (
        <div>
            <div className='md:block hidden'>
                <Image src="/images/warning.png" alt='warning' width={148} height={101} className='mx-auto' />
            </div>
            <h1 className='md:text-[64px] md:leading-[81px] text-[56px] leading-[72px] font-light text-dark text-center my-10 md:block hidden'>
                Final step ahead!
            </h1>
            <h1 className='md:text-[64px] md:leading-[81px] text-[56px] leading-[72px] font-light text-dark text-center my-10 md:hidden block'>
                Your are now subscribed!
            </h1>
            <div>
                <Image src="/images/envlop.png" alt='envlop' width={122} height={121} className='mx-auto mb-10' />
                <div className='bg-purple h-2 w-full rounded-lg max-w-[600px] mx-auto'></div>
            </div>
        </div>
    )
}

export default CheckEmail