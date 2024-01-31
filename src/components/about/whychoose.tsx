import React from 'react'

const WhyChoose = () => {
    return (
        <div className='max-w-[811px] px-4 mx-auto'>
            <div>
                <h2 className='text-2xl font-bold text-primary text-center mb-8'>
                    Why Choose Us?
                </h2>
                <ul className='list-disc list-inside flex flex-col gap-4'>
                    <li className='text-lg font-normal text-dark'>
                        <strong>Wide Selection of Deals: </strong> From local businesses to top global brands, we offer an extensive range of discounts to suit all your needs
                    </li>
                    <li className='text-lg font-normal text-dark'>
                        <strong>User-Friendly Experience: </strong> Our site is designed for easy navigation, making finding and applying coupons hassle-free.
                    </li>
                    <li className='text-lg font-normal text-dark'>
                        <strong>Verified and Updated Offers:</strong> We ensure all our deals are current and valid, providing you with reliable savings every time.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WhyChoose