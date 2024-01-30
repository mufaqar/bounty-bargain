import React from 'react'
import Container from '../UI/container'
import Image from 'next/image'
import Button from '../UI/button/button'

const Banner = () => {
    return (
        <section className='h-screen min-h-screen bg-secondary/5 py-20'>
            <Container className="grid md:grid-cols-2 grid-cols-1 gap-7 items-center">
                <div>
                    <h1 className='sm:text-[64px] sm:leading-[81px] text-4xl font-light text-dark '>
                        Get paid to share your opinion
                    </h1>
                    <form className='flex items-center sm:gap-2.5 gap-1 bg-white border border-primary rounded-2xl py-1 px-1.5 shadow-4xl mt-10'>
                        <div className='w-full'>
                            <label htmlFor='email' className='hidden'>
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Enter your e-mail address'
                                className='sm:text-2xl text-sm font-normal w-full focus:border-secondary px-1 py-3 rounded-2xl outline-none ' />
                        </div>
                        <Button
                            size='large'
                            variants='primary'
                            color="primary"
                            fullwidth
                            rounded
                            className='sm:max-w-[186px] w-fit px-0 bg-purple hover:bg-secondary sm:text-2xl text-sm rounded-2xl'
                        >
                            Join Free
                        </Button>
                    </form>
                </div>
                <div>
                    <Image src="/images/banner.png" alt='banner' width={562} height={561} className='w-full' />
                </div>
            </Container>
        </section>
    )
}

export default Banner