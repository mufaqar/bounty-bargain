import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
const PostBox = ({ data }: any) => {
    return (
        <div className=' rounded-3xl px-4 mx-auto'>
            <div>
                <Link href={`/blog/${data?.slug.current}`}>
                    <Image src={urlForImage(data?.image)} alt='feature' width={336} height={203} className='w-full h-full' />
                </Link>
            </div>
            <div className='mt-6'>
                {/* <p className='text-xs font-normal text-neutral/80'>
                    {data?.releaseDate}
                </p> */}
                <Link href={`/blog/${data?.slug.current}`} className='text-base font-bold text-dark'>
                    {data?.title}
                </Link>
                <div className='flex items-center gap-5 pt-6'>
                    <div className='w-[41px] h-[41px] rounded-full'>
                        <Image src="/images/feature.png" alt='feature' width={336} height={203} className='w-full h-full rounded-full' />
                    </div>
                    <div>
                        <h4 className='text-sm font-semibold text-dark'>
                            Guilherme Santos
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