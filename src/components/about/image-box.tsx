import Image from 'next/image'
import React from 'react'

const ImageBox = ({ ClassName, img, title, content }: any) => {
    return (
        <div className={`flex flex-col items-center gap-7 justify-between  ${ClassName}`}>
            <div className='md:w-2/5 w-full'>
                <Image src={img} alt='img' width={320} height={321} />
            </div>
            <div className='md:w-3/5 w-full'>
                <h2 className='text-2xl text-primary font-semibold mb-5'>
                    {title}
                </h2>
                <p className='text-lg font-normal text-dark'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default ImageBox