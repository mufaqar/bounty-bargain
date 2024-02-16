'use client'
import Button from '@/components/UI/button/button';
import Container from '@/components/UI/container'
import { CheckRequiredFields } from '@/utils/checkRequiredFields';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { RiCouponLine } from "react-icons/ri";
import { toast } from 'react-toastify';

const SubmitCoupon = () => {

     const [type, setType] = useState('deal')
     const [loading, setLoading] = useState(false)
     const [formData, setFormData] = useState({
          websiteUrl: '',
          offerType: type,
          code: '',
          discountDescription: '',
          startDate: '',
          expDate: ''
     })
     console.log('formData', formData)
     const handleChange = (e: any) => {
          const name = e.target.name
          const value = e.target.value
          setFormData(values => ({ ...values, [name]: value }))
     }

     const handleSubmitCoupon = async () => {
          CheckRequiredFields(formData)
          if (!formData?.code || !formData?.discountDescription || !formData?.offerType || !formData?.websiteUrl) {
               return null
          }
          setLoading(true)
          fetch("/api/coupons", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
               },
               body: JSON.stringify({
                    ...formData
               })
          }).then((response) => response.json())
               .then((data) => {
                    toast.success("Coupon Created Successfully!", { position: "top-right" });
                    setLoading(false)
                    setFormData({
                         websiteUrl: '',
                         offerType: type,
                         code: '',
                         discountDescription: '',
                         startDate: '',
                         expDate: ''
                    })
               })
               .catch((error) => {
                    setLoading(false)
                    console.log(error)
               });
     }

     return (
          <div>
               <section className="bg-[#F7F9FF] py-12">
                    <Container className="!max-w-[760px] text-neutral">
                         <div>
                              <label className='block'>Store Website</label>
                              <input type="text" name="websiteUrl" onChange={(e) => handleChange(e)} value={formData.websiteUrl} className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' placeholder='e.g., storewebsite.com' required />
                              <label className='block mt-4'>Select an Offer Type</label>
                              <div className="mt-4 flex gap-5 flex-wrap">
                                   {
                                        offerTypes.map((item, idx) => (
                                             <button key={idx} className={`border ${item.value !== type && 'opacity-40'} border-purple p-2 hover:shadow-lg flex flex-col items-center justify-center relative rounded-lg text-purple`}
                                                  onClick={() => {
                                                       setType(item.value)
                                                       setFormData({ ...formData, offerType: item.value })
                                                  }}
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
                              <input type="text" name="code" onChange={(e) => handleChange(e)} value={formData.code} className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' placeholder='Code' required />
                              <label className='block mt-4'>Discount Description</label>
                              <textarea onChange={(e) => handleChange(e)} name="discountDescription" value={formData.discountDescription} className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' required />
                              <label className='block mt-4'>Start Date (optional)</label>
                              <input type="date" name="startDate" id="" onChange={(e) => handleChange(e)} value={formData.startDate} className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' />
                              <label className='block mt-4'>Expiration Date (optional)</label>
                              <input type="date" name="expDate" id="" onChange={(e) => handleChange(e)} value={formData.expDate} className='p-2 bg-white outline-none border w-full mt-2 px-4 rounded-md' />
                              <div className='flex justify-center mt-10'>
                                   <Button
                                        color="primary"
                                        variants='primary'
                                        size='large'
                                        rounded
                                        click={handleSubmitCoupon}
                                        loading={loading}
                                        disable={loading}
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
          value: 'deal'
     },
     {
          icon: <RiCouponLine />,
          title: 'In-Store Coupon',
          value: 'coupon'
     },
     {
          icon: <FiDollarSign />,
          title: 'Online Sale or Tip',
          value: 'online'
     }
]