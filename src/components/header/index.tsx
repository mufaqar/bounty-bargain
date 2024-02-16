'use client'
import React, { useContext, useEffect, useState } from 'react'
import Logo from './logo'
import Button from '../UI/button/button'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './mobileNav';
import PopularCategories from './popularCategories';
import { GlobalContext } from '@/context/global-context';
import { usePathname } from 'next/navigation';

const Header = () => {

     const { openModal } = useContext(GlobalContext)
     const pathName = usePathname()
     const [isMobile, setIsMobile] = useState<boolean>(false)
     const [isCategory, setIsCategory] = useState<boolean>(false)
     const [categories, setCategories] = useState<any>()

     useEffect(()=>{
          (async()=>{
               const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}/api/categories`)
               const result = await res.json() 
               setCategories(result.data)
          })()
     },[])

     return (
          !pathName?.includes('studio') &&
          <>
               <header className='container mx-auto px-3 z-50 relative bg-transparent md:px-0 py-4 flex justify-between items-center'>
                    <div className='flex items-center gap-5 lg:gap-10'>
                         <Logo />
                         <div className='relative'>
                              <Button
                                   variants="outlined"
                                   rounded size="medium"
                                   color="secondary"
                                   className="hidden md:flex"
                                   click={()=>setIsCategory(!isCategory)}
                              >
                                   <span className="flex items-center gap-1">Categories <IoIosArrowDown /></span>
                              </Button>
                              {/* popular categories */}
                              { isCategory && <PopularCategories categories={categories} setIsCategory={setIsCategory}/> }
                              
                         </div>
                         <ul className='text-gray-800 md:flex items-center gap-5 lg:gap-8 hidden'>
                              <li><Link href="/deals" className='hover:text-primary'>Deals / Coupons</Link></li>
                              <li><Link href="/blog" className='hover:text-primary'>Blog</Link></li>
                              <li><Link href="/earn-money" className='flex items-center gap-1 font-semibold text-primary'>
                                   <Image src="/svg/disks.svg" width={20} height={20} alt="disk" />
                                   Earn Money
                              </Link>
                              </li>
                         </ul>
                    </div>


                    <Button
                         variants="text"
                         className="hidden md:flex"
                    >
                         <span onClick={()=>openModal('newsletter')}>Join the mail list</span>
                    </Button>

                    {/* hamburgur */}
                    <button className='flex flex-col gap-1.5 hover:cursor-pointer md:hidden'
                         onClick={() => setIsMobile(!isMobile)}
                    >
                         <div className={`w-7 h-[2px] bg-primary transition-all duration-200 ease-linear transform ${isMobile ? 'absolute rotate-45' : ''}`} />
                         <div className={`w-7 h-[2px] bg-primary ${isMobile && 'opacity-0'}`} />
                         <div className={`w-7 h-[2px] bg-primary transition-all duration-200 ease-linear transform ${isMobile ? 'absolute -rotate-45' : ''}`} />
                    </button>
               </header>

               {/* mobile navigation  */}
                <MobileNav isMobile={isMobile} />
          </>
     )
}

export default Header