import Container from '@/components/UI/container'
import Heading from '@/components/UI/heading/mainHeading'
// import SelectProceed from '@/components/survey/select-proceed'
import React from 'react'

export default function SurveySelection() {
    return (
        <>
            <section className='bg-secondary/10 py-16'>
                <Container>
                    <div>
                        <Heading className="md:text-4xl text-2xl font-medium text-primary md:text-end text-center">
                            <span className='text-purple'>Get paid </span>to share your opinion
                        </Heading>
                    </div>
                </Container>
            </section>
            <section className='py-16'>
                <Container>
                    <div className='mb-10'>
                        <h2 className='text-[40px] leading-[51px] font-medium text-purple text-center max-w-[700px] mx-auto'>
                            Select the companies you want to receive surveys from
                        </h2>
                        <p className='text-2xl font-light text-center mt-6 max-w-[1100px] mx-auto'>
                            You can easily join these companies by selecting from your personalised list below. In order to maximise your earnings, we recommend you select all of these companies - you will receive more money-making opportunities if you do so.
                        </p>
                    </div>
                    <div>
                        {/* <SelectProceed /> */}
                    </div>
                </Container>
            </section>
        </>
    )
}
