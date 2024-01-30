import Image from 'next/image'
import React from 'react'

const BrandLogo = ({ data }: any) => {
    return (
        <div className='px-3 w-full'>
            <div className='bg-white w-full py-14 px-8 rounded-3xl flex justify-center items-center'>
                <div>
                    <Image src="/images/partner/1.png" alt='partner' width={249} height={55} />
                </div>
            </div>
        </div>
    )
}

export default BrandLogo