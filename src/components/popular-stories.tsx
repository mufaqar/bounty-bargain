import React from 'react'
import Heading from './UI/heading/mainHeading'
import { copanStories } from './storie/stories'
import StoryCard from './storie/storyCard'

const PopularStories = () => {
     return (
          <>
               {/* Popular Stores */}
               <div className="my-12">
                    <Heading>Popular Stores</Heading>
                    <div className='grid lg:grid-cols-6 md:grid-cols-4 gap-2 md:gap-3 lg:gap-5 sm:grid-cols-3 grid-cols-2 mt-5 sm:mt-10'>
                         {
                              copanStories.slice(0, 12).map((item, idx) => (
                                   <StoryCard key={idx} logo={item.logo} about={item.about} />
                              ))
                         }
                    </div>
               </div>
          </>
     )
}

export default PopularStories