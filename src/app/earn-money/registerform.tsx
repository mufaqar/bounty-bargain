'use client'
import Button from '@/components/UI/button/button';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const RegisterForm = () => {
    const [openDTab, setOpenDTab] = useState('')
    const searchParams = useSearchParams()

    const queryemail = searchParams.get('email') || ""

    const handleTab = (e: any) => {
        if (openDTab === e) return setOpenDTab('')
        setOpenDTab(e)
    }

    const [formData, setFormData] = useState({
        email: queryemail,
        gender: '',
        fname: '',
        lname: '',
        day: '',
        month: '',
        year: ''
    })

    const handleChange = (e: any) => {
        let value = e.target.value
        let name = e.target.name
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    console.log("🚀 ~ RegisterForm ~ formData:", formData)
    
    const handleGender = (gender: any) => {
        setFormData({
            ...formData, gender
        })
    }

    const handleDOB = (d: any) => {
        const name = d.name
        const value = d.value
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }


    return (
        <div id="registor" className='bg-[#24BAF3] md:px-16 py-20 px-8 rounded-[39px] h-full'>
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
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        placeholder='john.doe@email.com'
                        className='bg-white w-full md:text-lg text-xs font-normal text-dark placeholder:text-dark py-6 px-5 rounded-full shadow-Input outline-none border border-transparent focus:border-secondary' />
                </div>
                <div>
                    <h4 className='text-[22px] leading-[30px] font-medium text-white text-center mb-5'>
                        Are you Male or Female?
                    </h4>
                    <div className='grid grid-cols-2 gap-7 items-center'>
                        <div onClick={() => handleGender('male')}>
                            <label htmlFor='male' className='relative cursor-pointer text-white md:text-lg text-xs text-center block mx-auto w-fit'>
                                <Image src='/images/male.png' alt='male' width={141} height={134} />
                                <span>Male</span>
                                {formData.gender === 'male' && <FaCheckCircle className="absolute text-3xl text-primary top-2 bg-white rounded-full border-white border-[2px] right-2" />}
                            </label>
                        </div>
                        <div onClick={() => handleGender('female')}>
                            <label htmlFor='female' className='relative cursor-pointer text-white md:text-lg text-xs text-center block mx-auto w-fit'>
                                <Image src='/images/female.png' alt='female' width={141} height={134} />
                                <span>Female</span>
                                {formData.gender === 'female' && <FaCheckCircle className="absolute text-3xl text-primary top-2 bg-white rounded-full border-white border-[2px] right-2" />}
                            </label>
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
                            value={formData.fname}
                            onChange={(e) => handleChange(e)}
                            placeholder='Type your fisrt name'
                            className='bg-white w-full md:text-lg text-gray-400 text-xs font-normal placeholder:text-gray-400 p-1 outline-none border border-transparent ' />
                    </div>
                    <div className='bg-white rounded-2xl border border-[#F1F1F1] p-4 shadow-Input'>
                        <label htmlFor='lname' className='cursor-pointer text-primary text-base font-bold'>
                            Last Name
                        </label>
                        <input
                            id='lname'
                            name='lname'
                            type='text'
                            value={formData.lname}
                            onChange={(e) => handleChange(e)}
                            placeholder='Type your last name'
                            className='bg-white w-full md:text-lg text-xs font-normal text-gray-400 placeholder:text-gray-400 p-1 outline-none border border-transparent ' />
                    </div>
                </div>
                <div>
                    <h4 className='text-[22px] leading-[30px] font-medium text-white text-center mb-5'>
                        date of Birth
                    </h4>
                    <div className='grid md:grid-cols-3 gap-7 items-center'>
                        <div className='relative'>
                            <label htmlFor='day' onClick={() => handleTab('day')} className='flex items-center justify-between cursor-pointer bg-white w-full md:text-lg text-xs font-bold text-primary placeholder:text-primary uppercase py-4 px-4 rounded-2xl outline-none border border-transparent focus:border-secondary'>
                                Day
                                <IoMdArrowDropdown className='text-2xl' />
                            </label>
                            {
                                openDTab === 'day' && <ul className="absolute max-h-[160px] bg-white overflow-auto rounded-2xl bar w-full mt-1">
                                    {
                                        Array.from({ length: 31 }, (_, index) => index + 1)?.map((item, idx) => (
                                            <li onClick={() => handleDOB({ value: item, name: "day" })} className="border-b-[1px] hover:bg-purple cursor-pointer hover:text-white p-1 px-5 border-gray-100" key={idx}>{item}</li>
                                        ))
                                    }
                                </ul>
                            }

                        </div>
                        <div className='relative'>
                            <label htmlFor='day' onClick={() => handleTab('month')} className='flex items-center justify-between  cursor-pointer bg-white w-full md:text-lg text-xs font-bold text-primary placeholder:text-primary uppercase py-4 px-4 rounded-2xl outline-none border border-transparent focus:border-secondary'>
                                Month
                                <IoMdArrowDropdown className='text-2xl' />
                            </label>
                            {
                                openDTab === 'month' && <ul className="absolute max-h-[160px] bg-white overflow-auto bar rounded-2xl w-full mt-1">
                                    {
                                        Array.from({ length: 12 }, (_, index) => index + 1)?.map((item, idx) => (
                                            <li onClick={() => handleDOB({ value: item, name: "month" })} className="border-b-[1px] hover:bg-purple cursor-pointer hover:text-white p-1 px-5 border-gray-100" key={idx}>{item}</li>
                                        ))
                                    }
                                </ul>
                            }
                        </div>
                        <div >
                            <label htmlFor='day' onClick={() => handleTab('')} className='flex items-center justify-between cursor-pointer bg-white w-full md:text-lg text-xs font-bold text-primary placeholder:text-primary uppercase py-4 px-4 rounded-2xl outline-none border border-transparent focus:border-secondary'>
                                <input type="text" 
                                    name="year"
                                    value={formData.year}
                                    onChange={(e) => handleChange(e)}
                                    className="w-20 placeholder:text-primary border-none outline-none" placeholder="Year" />
                                {/* <IoMdArrowDropdown className='text-2xl' /> */}
                            </label>
                        </div>
                    </div>
                </div>
                <Button
                    size='large'
                    variants='primary'
                    color='primary'
                    fullwidth
                    rounded
                    className='max-w-[420px] w-fit mx-auto hover:bg-purple mt-6 py-5'
                >
                    Register for free
                </Button>
            </form >
        </div >
    )
}

export default RegisterForm