import React from 'react'
import Button from '../UI/button/button'
import Link from 'next/link'

const PopularCategories = () => {
     return (
          <div className='fixed top-[78px] rounded-md max-w-[480px] w-full bg-[#F6F9FF] shadow-md p-6 pr-0'>
               <h4 className='text-secondary mb-4 pl-1'>OUR POPULAR CATEGORIES</h4>
               <ul className='grid grid-cols-3 gap-2'>
                    {
                         categories.map((item, idx) => (
                              <li key={idx}>
                                   <Button
                                        variants='text'
                                        size="small"
                                   >
                                        <Link href={item.href}>{item.label}</Link>
                                   </Button>
                              </li>
                         ))
                    }
               </ul>
          </div>
     )
}

export default PopularCategories



const categories = [
     {
          label: 'Food & Drink',
          href: "#",
     },
     {
          label: 'Apparel',
          href: "#",
     }, {
          label: 'Pets',
          href: "#",
     }, {
          label: 'VPN',
          href: "#",
     }, {
          label: 'Finance',
          href: "#",
     }, {
          label: 'Gaming',
          href: "#",
     }, {
          label: 'Nutrition',
          href: "#",
     }, {
          label: 'Coffee',
          href: "#",
     }, {
          label: 'Oral care',
          href: "#",
     }, {
          label: 'Vaping',
          href: "#",
     }, {
          label: 'Clothing',
          href: "#",
     }, {
          label: 'Education',
          href: "#",
     }
]