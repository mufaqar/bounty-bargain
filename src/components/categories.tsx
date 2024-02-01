import React from 'react'
import Heading from './UI/heading/mainHeading'
import Link from 'next/link'

async function getData() {
     const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}/api/categories`)
     if (!res.ok) {
          throw new Error('Failed to fetch data')
     }
     return res.json()
}

const Categories = async () => {
     const categories = await getData()
     return (
          <>
               {/* popular categories  */}
               <div className="mt-20">
                    <Heading>Popular Categories</Heading>
                    <ul className="mt-6 flex flex-wrap gap-4">
                         {
                              categories?.data?.map((item:any, idx:number) => (
                                   <li key={idx} className="bg-white text-neutral border p-1 px-3 hover:scale-105 transition-all duration-100 ease-linear">
                                        <Link href={item.slug.current}>{item.name}</Link>
                                   </li>
                              ))
                         }
                    </ul>
               </div>
          </>
     )
}

export default Categories


const categories = [
     {
          lable: 'plants',
          href: "#"
     },
     {
          lable: 'skin care',
          href: "#"
     },
     {
          lable: 'mouthwash',
          href: "#"
     },
     {
          lable: 'books',
          href: "#"
     },
     {
          lable: 'bath mats',
          href: "#"
     },
     {
          lable: 'fashion',
          href: "#"
     },
     {
          lable: 'climate control',
          href: "#"
     },
     {
          lable: 'supplements',
          href: "#"
     },
     {
          lable: 'shampoo',
          href: "#"
     },
     {
          lable: 'bottles',
          href: "#"
     },
     {
          lable: 'hats',
          href: "#"
     }
]