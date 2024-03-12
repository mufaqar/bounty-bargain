'use client'
import { GlobalContext } from '@/context/global-context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'


const SearchResults = ({ input }: any) => {
     const [coupons, setCoupon] = useState<any>()
     const [stores, setStores] = useState<any>()
     const [categories, setCategories] = useState<any>()
     const { openModal, setCopan } = useContext(GlobalContext)
     const router = useRouter()

     useEffect(() => {
          (async () => {
               const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}api/coupons`)
               const CatRes = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}/api/categories`)
               const storesRes = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}/api/store`)

               if (!res.ok) {
                    throw new Error('Failed to fetch data')
               }
               const categoriesRes = await CatRes.json()
               const couponsRes = await res.json()
               const allstores = await storesRes.json()

               const coupons = couponsRes?.data?.filter((item: any) => item.name?.toLowerCase()?.includes(input.toLowerCase()) || item.info?.toLowerCase()?.includes(input?.toLowerCase()))
               const categories = categoriesRes?.data?.filter((item: any) => item.name?.toLowerCase()?.includes(input.toLowerCase()) || item.info?.toLowerCase()?.includes(input?.toLowerCase()))
               const stores = allstores?.data?.filter((item: any) => item.name?.toLowerCase()?.includes(input.toLowerCase()))
               // setCategories()
               setCoupon(coupons)
               setCategories(categories)
               setStores(stores)
          })()
     }, [input])

     return (
          
          <div className={`absolute top-12 rounded-lg shadow-xl p-3 bg-[#F7F9FF] w-full ${!input && 'hidden'}`}>
               {
                    coupons?.length > 0 && <div>
                         <h2 className='font-medium text-primary mb-1 px-2'>Coupons / Deals</h2>
                         <ul>
                              {
                                   coupons?.slice(0, 5).map((item: any, idx: number) => (
                                        <li key={idx} className='text-sm p-[1px] capitalize px-2 hover:text-primary cursor-pointer' onClick={() => {
                                             setCopan(item);
                                             openModal('coupon')
                                        }}>
                                             {item.name}
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
               }
               {
                    stores?.length > 0 && <div>
                         <h2 className='font-medium text-primary mb-1 px-2'>Stores</h2>
                         <ul>
                              {
                                   stores?.slice(0, 5).map((item: any, idx: number) => (
                                        <li key={idx} className='text-sm p-[1px] px-2 capitalize hover:text-primary cursor-pointer' onClick={() => {
                                             router.push(`/${item.slug.current}`)
                                        }}>
                                             {item.name}
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
               }
               {
                    categories?.length > 0 && <div>
                         <h2 className='font-medium text-primary my-1 px-2'>Categories</h2>
                         <ul>
                              {
                                   categories?.slice(0, 5).map((item: any, idx: number) => (
                                        <li key={idx} className='text-sm p-[1px] px-2 capitalize hover:text-primary cursor-pointer' onClick={() => {
                                             router.push(`/category/${item.slug.current}`)
                                        }}>
                                             {item.name}
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
               }

          </div>
     )
}

export default SearchResults