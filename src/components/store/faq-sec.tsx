import React from 'react'

const FaqSec = ({ data, name }: any) => {
    return (
        <div className='bg-white py-10 px-6 rounded-2xl'>
            <h2 className='text-xl font-semibold text-purple mb-6'>
                Frequently Asked Questions (FAQ) about {name}
            </h2>
            {
                data?.map((item: any, idx: number) => (
                    <div key={idx}>
                        <h3 className='text-base font-semibold text-dark mb-3'>
                            {item.question}
                        </h3>
                        <p className='text-base font-normal text-dark mb-3'>
                            {item.answer}
                        </p>
                    </div>
                ))
            }


        </div>
    )
}

export default FaqSec