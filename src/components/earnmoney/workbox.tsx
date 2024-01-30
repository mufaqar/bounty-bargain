import Image from 'next/image'
import React from 'react'

const WorkBox = ({ title, content, img }: any) => {
    return (
        <div className='bg-white md:px-10 md:py-14 p-6 max-w-[313px] min-h-[420px] h-fit flex flex-col gap-4 justify-between rounded-[39px] shadow-5xl'>
            <div>
                <Image src={img} alt='img' width={146} height={113} className='mx-auto' />
            </div>
            <h3 className='text-2xl font-normal text-dark text-center'>
                {title}
            </h3>
            <p className='text-lg font-normal text-neutral text-center'>
                {content}
            </p>
        </div>
    )
}

export default WorkBox