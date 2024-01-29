import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../UI/button/button'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'

const MobileNav: FC<any> = ({ isMobile }) => {
     return (
          <div className={`
               flex justify-center flex-col 
               items-center 
               gap-6 
               bg-light 
               pb-10
               pt-[96px] 
               shadow-xl
               absolute w-full z-10
               transition-all duration-300 ease-linear
               ${ isMobile ? 'top-0' : '-top-[100%]' }
          `}
          >
               <Button
                    variants="outlined"
                    rounded size="medium"
                    color="secondary"
               >
                    Categories <IoIosArrowDown />
               </Button>
               <ul className='text-gray-800 flex flex-col justify-center items-center gap-5 lg:gap-8'>
                    <li><Link href="#" className='hover:text-primary'>Deals / Coupons</Link></li>
                    <li><Link href="#" className='hover:text-primary'>Blog</Link></li>
                    <li><Link href="#" className='flex items-center gap-1 font-semibold text-primary'>
                         <Image src="/svg/disks.svg" width={20} height={20} alt="disk" />
                         Earn Money
                    </Link>
                    </li>
               </ul>
               <Button
                    variants="text"
               >
                    Join the mail list
               </Button>
          </div>
     )
}

export default MobileNav