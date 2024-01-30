import React from 'react'
import Heading from '../UI/heading/mainHeading'
import StoryCard from './storyCard'

const Stories = () => {
  return (
    <div>
          <Heading>Find coupons in the best stores</Heading>
          <div className='grid lg:grid-cols-8 2xl:grid-cols-10 md:grid-cols-7 gap-2 md:gap-3 lg:gap-5 sm:grid-cols-5 grid-cols-3 mt-5 sm:mt-10'>
               {
                    copanStories.map((item,idx)=>(
                         <StoryCard key={idx} logo={item.logo}/>
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