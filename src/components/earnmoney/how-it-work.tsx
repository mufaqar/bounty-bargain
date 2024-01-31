import React from 'react'
import Container from '../UI/container'
import WorkBox from './workbox'
import Button from '../UI/button/button'

const HowItWork = () => {
    return (
        <Container className="flex md:flex-row flex-col gap-7 items-center bg-[url('/images/zoom.png')] bg-auto bg-right-bottom bg-no-repeat">
            <div className='md:w-2/5 w-full'>
                <h2 className='text-[40px] leading-[64px] font-medium text-dark md:text-start text-center'>
                    How it works
                </h2>
                <p className='text-lg font-normal text-[#757575] max-w-[420px] md:mx-0 mx-auto md:text-start text-center'>
                    Bounty Bargain connects you with online survey companies that pay for your opinion
                </p>
                <Button
                    size='large'
                    variants='primary'
                    color='primary'
                    fullwidth
                    rounded
                    className='max-w-[186px] w-fit mx-auto hover:bg-secondary mt-6 md:hidden'
                >
                    Start Now
                </Button>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7 [&>div:nth-child(2)]:md:mt-16 [&>div:nth-child(3)]:md:-mt-16'>
                <WorkBox
                    title="1.Register for free"
                    content=" Enter your email to get started."
                    img="/images/work/1.png" />
                <WorkBox
                    title="2. Select paid survey companies"
                    content="Choose from a list of personalised paid survey opportunities."
                    img="/images/work/2.png" />
                <WorkBox
                    title="3. Complete the sign up process"
                    content="Follow the instructions in your email to complete the sign up process."
                    img="/images/work/3.png" />
                <WorkBox
                    title="4. Get paid for your opinion"
                    content="Respond to surveys and earn cash or other rewards for your opinion."
                    img="/images/work/4.png" />
            </div>
        </Container>
    )
}

export default HowItWork