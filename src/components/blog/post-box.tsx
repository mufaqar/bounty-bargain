import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import { blogDateFormate } from '@/utils'
const PostBox = ({ data }: any) => {
    return (
        <div className=' rounded-3xl px-4 mx-auto'>
            <div>
                <Link href={`/blog/${data?.slug?.current}`}>

                    <Image src={data?.image?.asset.url} alt='feature' width={336} height={203} className='w-full h-full rounded-2xl' />
                </Link>
            </div>
            <div className='mt-6'>
                <p className='text-xs font-normal text-neutral/80'>
                    {blogDateFormate(data?._createdAt)}
                </p>

                <Link href={`/blog/${data?.slug?.current}`} className='text-base font-bold text-dark line-clamp-1'>
                    {data?.title}
                </Link>
                <div className='flex items-center gap-5 pt-6'>
                    <div className='w-[41px] h-[41px] rounded-full'>
                        {
                            data?.writtenby?.profile_image?.asset?.url ?
                            <Image src={data?.writtenby?.profile_image?.asset?.url} alt='feature' width={336} height={203} className='w-full h-full rounded-full' /> :
                            <div className="bg-gray-200 flex justify-center items-center flex-col text-sm w-[41px] h-[41px] uppercase rounded-full font-medium">{data?.writtenby?.fname.charAt(0)}{data?.writtenby?.fname.charAt(1)}</div>
                        }
                        
                    </div>
                    <div>
                        <h4 className='text-sm font-semibold text-dark '>
                        {data?.writtenby?.fname} {data?.writtenby?.lname}
                        </h4>
                        <p className='text-xs font-normal text-neutral/80'>
                            1 min reading
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostBox