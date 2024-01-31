import Container from '@/components/UI/container'
import CheckEmail from '@/components/confirmation/check-email'
import React from 'react'

export default function Confirmation() {
    return (
        <>
            <section className='pt-16'>
                <CheckEmail />
            </section>
            <section className='bg-[#CCF4FE] py-16'>
                <Container>
                    <div className='max-w-[680px] mx-auto'>
                        <h2 className='md:text-[40px] md:leading-[64px] text-3xl font-medium text-dark text-center'>
                            Check your e-mail
                        </h2>
                        <p className='text-lg font-bold text-neutral text-center mb-8'>
                            Thank you for being part of our community! To ensure you have the best experience and can enjoy the rewards we offer, make sure you check your mailbox!
                        </p>
                        <p className='text-lg font-bold text-neutral text-center'>
                            Kindly open and confirm your email address upon registration and finish registration to all Survey partners. There may be a chance that partner e-mail may have gone to the spam folder! Don’t forget to check your spam folders and have fun!
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}
