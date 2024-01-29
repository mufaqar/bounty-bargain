import Image from 'next/image'
import React, { FC } from 'react'

interface IStoryProps {
     logo: string,
     about? : string 
}

const StoryCard:FC<IStoryProps> = ({logo, about}) => {
  return (
    <div>
          <figure className='bg-pure flex justify-center shadow-md p-2 rounded-md'>
               <Image src={logo} alt="logo" width={140} height={140} />
          </figure>
          {
               about && <p className='text-neutral text-center mt-3 text-sm'>{about}</p>
          }
    </div>
  )
}

export default StoryCard