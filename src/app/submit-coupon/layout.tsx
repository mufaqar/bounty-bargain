import Heading from '@/components/UI/heading/mainHeading'
import SearchBox from '@/components/searchBox/searchBox'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
     title: 'Submit Coupon | Bounty Bargain',
     description: 'Bounty bargain',
}

const layout = ({ children }: any) => {
     return (
          <>
               <main className='pb-6 shadow-sm z-10 relative'>
                    <SearchBox />
                    <Heading className="text-primary text-center mt-5">Submit a coupon and help millions save!</Heading>
               </main>
               {children}
          </>
     )
}

export default layout