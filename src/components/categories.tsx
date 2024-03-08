import React from 'react'
import Heading from './UI/heading/mainHeading'
import Link from 'next/link'
import { GoPlusCircle } from "react-icons/go";

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
                    <div className='flex items-center justify-between'>
                         <Heading>Popular Categories</Heading>
                         {/* <GoPlusCircle className="text-2xl" /> */}
                    </div>
                    <ul className="mt-8 flex flex-wrap gap-4">
                         {
                              categories?.data?.map((item:any, idx:number) => (
                                   <li key={idx} className="bg-white text-neutral border font-medium p-1 px-3 hover:scale-105 transition-all duration-100 ease-linear">
                                        <Link href={`/category/${item.slug.current}`}>{item.name}</Link>
                                   </li>
                              ))
                         }
                    </ul>
               </div>
          </>
     )
}

export default Categories
