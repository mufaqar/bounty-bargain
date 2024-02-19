import React from 'react'
import Heading from '../UI/heading/mainHeading'
import StoryCard from './storyCard'

const Stories = ({data}:any) => {
  return (
    <div>
          <Heading>Find coupons in the best stores</Heading>
          <div className='grid lg:grid-cols-8 md:grid-cols-5 gap-2 md:gap-3 lg:gap-5 sm:grid-cols-4 grid-cols-2 mt-5 sm:mt-10'>
               {
                    data?.map((item:any,idx:number)=>(
                         <StoryCard key={idx} logo={item.logo?.asset?.url} link={`/store/${item.slug?.current}`}/>
                    ))
               }
          </div>
    </div>
  )
}

export default Stories


export const copanStories = [
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
     {
          logo: '/images/dummylogo.png',
          about: "Text here about this brand and it's promo & coupons."
     },
]