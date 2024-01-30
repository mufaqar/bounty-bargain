import Heading from '@/components/UI/heading/mainHeading'
import SearchBox from '@/components/searchBox/searchBox'
import React from 'react'

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