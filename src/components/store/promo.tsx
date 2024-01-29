import Link from 'next/link'
import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

const Promo = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary'>
                Shein Coupons & Promo Codes
            </h1>
            <h3 className='text-xl font-medium text-dark'>
                Save with 45 Soma Offers.
            </h3>
            <p className='text-base font-normal text-dark mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href="#" className='text-sm font-medium text-secondary inline-flex items-center gap-4 mt-6'>
                <span>Read More</span> <AiOutlinePlusCircle />
            </Link>
        </div>
    )
}

export default Promo