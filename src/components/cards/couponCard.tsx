'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../UI/button/button'
import { GlobalContext } from '@/context/global-context'


const CouponCard = ({ data }: any) => {
     const { openModal, setCopan } = useContext(GlobalContext)
     return (
          <>
               <div className='rounded-[14px] overflow-hidden border'>
                    <figure className="bg-[#040404] flex justify-center py-5">
                         <Image src={data.logo.asset.url} alt={data.title} width={160} height={200} />
                    </figure>
                    <div className='p-4 px-6 text-neutral'>
                         <h2 className='font-semibold text-lg underline'>{data.name}</h2>
                         <p className='font-light max-w-[200px] my-1'>{data.info}</p>
                         {
                              data.discount && <p className='font-light max-w-[200px] mb-8'>Discount</p>
                         }
                         
                         <div onClick={() => {
                              setCopan(data)
                              openModal('coupon')
                         }}>
                              <Button
                                   size='large'
                                   variants='primary'
                                   color='primary'
                                   fullwidth
                                   rounded
                              >
                                   Get Coupon
                              </Button>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default CouponCard