import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface IStoryProps {
     logo: string,
     about? : string, 
     link: string
}

const StoryCard:FC<IStoryProps> = ({logo, about, link}) => {
  return (
    <div>
          <Link href={link || '#'}>
          <figure className='bg-pure flex justify-center shadow-md p-2 min-w-[120px] min-h-[120px] w-full h-full rounded-md'>
               <Image src={logo} alt="logo" width={140} height={140} className='object-contain'/>
          </figure>
          </Link>
          {
               about && <p className='text-neutral text-center mt-3 text-sm'>{about}...</p>
          }
    </div>
  )
}

export default StoryCard