'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../UI/button/button'
import { GlobalContext } from '@/context/global-context'
import Model from '@/components/UI/model'
import RevelCopon from './revelCopon'

const CouponCard = ({ data }: any) => {
     const { openModal, setCopan } = useContext(GlobalContext)
     return (
          <>
               <div className='rounded-[14px] overflow-hidden border'>
                    <figure className="bg-[#040404] flex justify-center">
                         <Image src={data.logo} alt={data.title} width={200} height={200} />
                    </figure>
                    <div className='p-4 px-6 text-neutral'>
                         <h2 className='font-semibold text-lg underline'>{data.title}</h2>
                         <p className='font-light max-w-[200px] mb-8'>{data.info}</p>
                         <div onClick={() => {
                              setCopan(data)
                              openModal()
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
               <Model><RevelCopon /></Model>
          </>
     )
}

export default CouponCard