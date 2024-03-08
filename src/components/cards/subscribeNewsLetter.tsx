'use client'
import React, { useContext } from 'react'
import Heading from '../UI/heading/mainHeading'
import Button from '../UI/button/button'
import Subscribe from '../subscribe/subscribe'
import { GlobalContext } from '@/context/global-context'

const SubscribeNewsLetter = () => {
     const { newsLetterConfurmation } = useContext(GlobalContext)

     return (
          <section className='max-w-[680px] w-full mx-auto py-8 px-7 md:px-20'>
               <div>
                    {
                         !newsLetterConfurmation && <div>
                              <Heading className="text-primary text-center">Unlock Exclusive Deals: <br /> Join us today!</Heading>
                              <p className='text-center mt-6 text-neutral'><strong className='text-primary'>Subscribe to our list</strong> now and get early access to amazing discounts and promo codes from your favorite brands and local businesses. Don't miss out on the opportunity to save big on special deals.</p>
                              <Subscribe />
                         </div>
                    }
                    {
                         newsLetterConfurmation && <div>
                              <Heading className="text-primary text-center">Welcome to the Club!</Heading>
                              <p className='mt-6'>🎉 Congratulations! You've successfully joined our exclusive list. Get ready to unlock a world of amazing deals and discounts.</p>
                              <p className='text-center mt-3 text-neutral'><strong className='text-primary'>Keep an eye on your inbox;</strong> we'll be sending you the hottest offers and insider tips to help you save like never before.</p>
                         </div>
                    }

               </div>
          </section>
     )
}

export default SubscribeNewsLetter