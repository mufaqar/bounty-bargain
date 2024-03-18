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
                    <figure className=" flex justify-center py-5 h-[150px]" style={{
                         backgroundColor: data?.store?.backgroundColor?.hex
                    }}>
                         <Image src={data.store?.logo?.asset.url} alt={data.title} width={150} height={150} className='object-contain' />
                    </figure>
                    <div className='p-4 px-6 text-neutral'>
                         <h2 className='font-semibold text-lg underline'>{data.name}</h2>
                         <p className='font-light max-w-[200px] my-1 line-clamp-1'>{data.info}</p>
                         {
                              data.discount && <p className='font-light max-w-[200px] mb-8'>Discount</p>
                         }
                         <Button
                              size='large'
                              variants='primary'
                              color='primary'
                              fullwidth
                              rounded
                              click={
                                   () => {
                                        setCopan(data);
                                        openModal('coupon')
                                   }
                              }
                         >
                              Get {data?.offer_type?.[0] === 'code' ? 'Coupon' : 'Deal'}
                         </Button>
                    </div>
               </div>
          </>
     )
}

export default CouponCard