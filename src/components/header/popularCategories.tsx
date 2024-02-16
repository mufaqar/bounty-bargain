import React from 'react'
import Button from '../UI/button/button'
import Link from 'next/link'

const PopularCategories = ({categories, setIsCategory}:any) => {
     return (
          <div className='fixed top-[78px] rounded-md max-w-[480px] w-full bg-[#F6F9FF] shadow-md p-6 pr-0'>
               <h4 className='text-secondary mb-4 pl-1'>OUR POPULAR CATEGORIES</h4>
               <ul className='grid grid-cols-3 gap-1'>
                    {
                         categories?.slice(0,15)?.map((item:any, idx:number) => (
                              <li key={idx}>
                                   <Button
                                        variants='text'
                                        size="small"
                                        className="!capitalize !text-left"
                                        click={()=>setIsCategory(false)}
                                   >
                                        <Link href={`/category/${item.slug.current}`}>{item.name}</Link>
                                   </Button>
                              </li>
                         ))
                    }
               </ul>
          </div>
     )
}

export default PopularCategories

