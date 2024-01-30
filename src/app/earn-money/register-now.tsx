import Button from '@/components/UI/button/button'
import Container from '@/components/UI/container'
import React from 'react'
import RegisterForm from './registerform'

const RegisterNow = () => {
    return (
        <Container className="relative md:px-0 px-3">
            <div className='bg-[#24BAF3] w-[187px] h-[178px] rounded-[32px] rounded-tl-[64px] absolute -top-5 -left-5 -z-10'></div>
            <div className='flex md:flex-row flex-col gap-7 items-center bg-[#CCF4FE] rounded-[39px]'>
                <div className='md:w-2/5 w-full md:px-16 md:py-0 py-8 px-5'>
                    <h2 className='md:text-[40px] md:leading-[64px] text-3xl font-medium text-dark md:text-start text-center'>
                        Register now
                    </h2>
                    <p className='md:text-2xl text-[22px] leading-[35px] font-normal text-[#757575] max-w-[350px] md:mx-0 mx-auto md:text-start text-center md:mt-8 mt-3'>
                        Sign up for free and start
                        earning cash, gift cards and
                        other rewards for your opinion!
                    </p>
                </div>
                <div className='md:w-3/5 w-full'>
                    <RegisterForm />
                </div>
            </div>
        </Container>
    )
}

export default RegisterNow