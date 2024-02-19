import React from 'react'
import Heading from './UI/heading/mainHeading'
import StoryCard from './storie/storyCard'
import { client } from '../../sanity/lib/client'
import { QStores } from '../../sanity/lib/queries'

async function getData() {
     const stores = await client.fetch(QStores)
     return {
          stores
     }
}

const PopularStories = async () => {
     const { stores } = await getData()
     return (
          <>
               {/* Popular Stores */}
               <div className="my-12">
                    <Heading>Popular Stores</Heading>
                    <div className='grid lg:grid-cols-5 md:grid-cols-4 gap-2 md:gap-3 lg:gap-5 sm:grid-cols-3 grid-cols-2 mt-5 sm:mt-10'>
                         {
                              stores?.slice(0, 10).map((item: any, idx: number) => (
                                   <StoryCard key={idx} height="large" logo={item.logo?.asset?.url} about={item?.info?.slice(0, 42)} link={`/store/${item.slug?.current}`} />
                              ))
                         }
                    </div>
               </div>
          </>
     )
}

export default PopularStories