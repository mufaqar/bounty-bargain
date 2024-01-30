import Image from 'next/image'
import React from 'react'
import Button from '../UI/button/button'

const AnotherDeal = () => {
    return (
        <div className='bg-secondary/40 flex md:flex-row flex-col items-center md:p-10 p-6 rounded-2xl justify-center'>
            <div>
                <Image src="/images/monkey.png" alt="monkey" width={336} height={271} />
            </div>
            <div className='md:w-1/2'>
                <h2 className='text-2xl font-bold text-primary text-center'>
                    Never miss another deal
                </h2>
                <p className='text-xl font-normal text-dark my-4 text-center max-w-[513px] mx-auto'>
                    Get the top deals from 100s of retailers, including SHEIN, in the Best of Name of site emails.
                </p>
                <form className='flex md:flex-row flex-col items-center gap-2.5'>
                    <div className='w-full'>
                        <label htmlFor='email' className='hidden'>
                            Email
                        </label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Email Adress'
                            className='text-sm font-normal w-full bg-white border border-primary focus:border-secondary px-5 py-3.5 rounded-[10px] outline-none ' />
                    </div>
                    <Button
                        size='large'
                        variants='primary'
                        color="primary"
                        fullwidth
                        rounded
                        className='md:max-w-[186px] w-full hover:bg-secondary'
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AnotherDeal