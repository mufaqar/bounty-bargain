import Button from '@/components/UI/button/button';
import Image from 'next/image';
import React from 'react'
import { FaCheck } from "react-icons/fa6";

const RegisterForm = () => {
    return (
        <div className='bg-[#24BAF3] md:px-16 py-20 px-8 rounded-[39px] h-full'>
            <form className='flex flex-col gap-10'>
                <div className='relative'>
                    <span className='absolute right-3 top-1/2 -translate-y-1/2 w-[79px] h-[60px] bg-[#EDF9FD] text-[#14B881] text-2xl rounded-full flex items-center justify-center'><FaCheck /></span>
                    <label htmlFor='email' className='hidden'>
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='john.doe@email.com'
                        className='bg-white w-full md:text-lg text-xs font-normal text-dark placeholder:text-dark py-6 px-5 rounded-full shadow-Input outline-none border border-transparent focus:border-secondary' />
                </div>
                <div>
                    <h4 className='text-[22px] leading-[30px] font-medium text-white text-center mb-5'>
                        Are you Male or Female?
                    </h4>
                    <div className='grid grid-cols-2 gap-7 items-center'>
                        <div>
                            <label htmlFor='male' className='cursor-pointer text-white md:text-lg text-xs text-center block mx-auto w-fit'>
                                <Image src='/images/male.png' alt='male' width={141} height={134} />
                                <span>Male</span>
                            </label>
                            <input
                                id='male'
                                name='male'
                                type='radio'
                                placeholder='male'
                                className='appearance-none ' />
                        </div>
                        <div>
                            <label htmlFor='female' className='cursor-pointer text-white md:text-lg text-xs text-center block mx-auto w-fit'>
                                <Image src='/images/female.png' alt='female' width={141} height={134} />
                                <span>Female</span>
                            </label>
                            <input
                                id='female'
                                name='female'
                                type='radio'
                                placeholder='female'
                                className='appearance-none ' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-7 items-center'>
                    <div className='bg-white rounded-2xl border border-[#F1F1F1] p-4 shadow-Input'>
                        <label htmlFor='fname' className='cursor-pointer text-primary text-base font-bold'>
                            First Name
                        </label>
                        <input
                            id='fname'
                            name='fname'
                            type='text'
                            placeholder='Type your fisrt name'
                            className='bg-white w-full md:text-lg text-xs font-normal text-neutral placeholder:text-neutral p-1 outline-none border border-transparent focus:border-secondary' />
                    </div>
                    <div className='bg-white rounded-2xl border border-[#F1F1F1] p-4 shadow-Input'>
                        <label htmlFor='lname' className='cursor-pointer text-primary text-base font-bold'>
                            Last Name
                        </label>
                        <input
                            id='lname'
                            name='lname'
                            type='text'
                            placeholder='Type your last name'
                            className='bg-white w-full md:text-lg text-xs font-normal text-neutral placeholder:text-neutral p-1 outline-none border border-transparent focus:border-secondary' />
                    </div>
                </div>
                <div>
                    <h4 className='text-[22px] leading-[30px] font-medium text-white text-center mb-5'>
                        date of Birth
                    </h4>
                    <div className='grid grid-cols-3 gap-7 items-center'>
                        <div>
                            <label htmlFor='day' className='hidden'>
                                Day
                            </label>
                            <select
                                id='day'
                                name='day'
                                className='bg-white w-full md:text-lg text-xs font-bold text-primary placeholder:text-primary uppercase py-4 px-4 rounded-2xl outline-none border border-transparent focus:border-secondary'>
                                <option>Day</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='month' className='hidden'>
                                Month
                            </label>
                            <select
                                id='month'
                                name='month'
                                className='bg-white w-full md:text-lg text-xs font-bold text-primary placeholder:text-primary uppercase py-4 px-4 rounded-2xl outline-none border border-transparent focus:border-secondary'>
                                <option>Month</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='year' className='hidden'>
                                Year
                            </label>
                            <select
                                id='year'
                                name='year'
                                className='bg-white w-full md:text-lg text-xs font-bold text-primary placeholder:text-primary uppercase py-4 px-4 rounded-2xl outline-none border border-transparent focus:border-secondary'>
                                <option>Year</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Button
                    size='large'
                    variants='primary'
                    color='primary'
                    fullwidth
                    rounded
                    className='max-w-[420px] w-fit mx-auto hover:bg-purple mt-6'
                >
                    Register for free
                </Button>
            </form >
        </div >
    )
}

export default RegisterForm