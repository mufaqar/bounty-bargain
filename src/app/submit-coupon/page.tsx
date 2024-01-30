'use client'
import Button from '@/components/UI/button/button';
import Container from '@/components/UI/container'
import Link from 'next/link';
import React, { useState } from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { RiCouponLine } from "react-icons/ri";

const SubmitCoupon = () => {

     const [type, setType] = useState('online-code')

     return (
          <div>
               <section className="bg-[#F7F9FF] py-12">
                    <Container className="!max-w-[760px] text-neutral">
                         <div>
                              <label className='block'>Store Website</label>
                              <input type="text" className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' placeholder='e.g., storewebsite.com' />
                              <label className='block mt-4'>Select an Offer Type</label>
                              <div className="mt-4 flex gap-5 flex-wrap">
                                   {
                                        offerTypes.map((item, idx) => (
                                             <button key={idx} className={`border ${item.value !== type && 'opacity-40'} border-purple p-4 py-6 hover:shadow-lg flex flex-col items-center justify-center relative rounded-lg text-purple`}
                                                  onClick={() => setType(item.value)}
                                             >
                                                  <span className='text-2xl'>{item.icon}</span>
                                                  <span className='text-sm mt-1'>{item.title}</span>
                                                  {
                                                       type === item.value && <FaCheckCircle className='absolute text-green-400 text-xl bg-pure rounded-full border-[3px] border-pure -right-2 -top-2' />
                                                  }
                                             </button>
                                        ))
                                   }
                              </div>
                              <label className='block mt-4'>Code</label>
                              <input type="text" className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' placeholder='Code' />
                              <label className='block mt-4'>Discount Description</label>
                              <textarea className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' />
                              <label className='block mt-4'>Start Date (optional)</label>
                              <input type="date" name="" id="" className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' />
                              <label className='block mt-4'>Expiration Date (optional)</label>
                              <input type="date" name="" id="" className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' />
                              <div className='flex justify-center mt-10'>
                                   <Button
                                        color="primary"
                                        variants='primary'
                                        size='large'
                                        rounded
                                   >
                                        Submit Offer
                                   </Button>
                              </div>
                              <p className="text-center text-neutral mt-8">
                              Please only submit publicly available coupon codes and not private or internal company codes.
When in doubt, please obtain permission from the merchant first. See our <Link href="#" className='text-primary'>Terms and Conditions</Link> formore information regarding user generated content. Thank you very much!
                              </p>
                         </div>
                    </Container>
               </section>
          </div>
     )
}

export default SubmitCoupon


const offerTypes = [
     {
          icon: <CiGlobe />,
          title: 'Online Code',
          value: 'online-code'
     },
     {
          icon: <RiCouponLine />,
          title: 'In-Store Coupon',
          value: 'in-store-coupon'
     },
     {
          icon: <FiDollarSign />,
          title: 'Online Sale or Tip',
          value: 'online-sale-or-tip'
     }
]