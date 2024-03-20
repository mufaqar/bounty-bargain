'use client'
import React, { useContext, useState } from 'react'
import Button from '../UI/button/button'
import { GlobalContext } from '@/context/global-context'

const Subscribe = () => {
     const { setNewsLetterConfurmation } = useContext(GlobalContext)
     const [email, setEmail] = useState('')
     const [loading, setLoading] = useState(false)

     const handleSubscribe = async () => {
          setLoading(true)
          // fetch("/api/email/subscribe", {
          //      method: "POST",
          //      headers: {
          //           "Content-Type": "application/json",
          //      },
          //      body: JSON.stringify({ email })
          // })
          //      .then((response) => response.json())
          //      .then((data) => {
          //           console.log(data);
          //           setNewsLetterConfurmation(true)
          //           setLoading(false)
          //      })
          //      .catch((error) => {
          //           setLoading(false)
          //           console.log(error)
          //      });
          const options = {
               method: 'POST',
               headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    'api-key': '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'
               },
               body: JSON.stringify({ updateEnabled: false, email: email })
          };

          fetch('https://api.brevo.com/v3/contacts', options)
               .then(response => response.json())
               .then(response => {
                    console.log("🚀 ~ handleSubscribe ~ response:", response)
                    setNewsLetterConfurmation(true)
                    setLoading(false)
               })
               .catch(err => {
                    setLoading(false)
                    console.log(err)
               });
     }

     return (
          <>
               <div className='flex md:flex-row flex-col gap-2 mt-5'>
                    <div className='border border-primary flex items-center p-2.5 flex-1 rounded-md text-neutral gap-2'>
                         <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='placeholder:text-gray-400 text-sm outline-none w-full' placeholder='Email Address' />
                    </div>
                    <Button
                         size="large"
                         color='primary'
                         rounded
                         disable={loading}
                         className='!text-sm'
                         loading={loading}
                    >
                         <span onClick={() => handleSubscribe()}>
                              Subscribe
                         </span>
                    </Button>
               </div>
          </>
     )
}

export default Subscribe