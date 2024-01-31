import Container from '@/components/UI/container'
import ImageBox from '@/components/about/image-box'
import JoinJourney from '@/components/about/join-journey'
import WhyChoose from '@/components/about/whychoose'
import AnotherDeal from '@/components/store/another-deal'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
    return (
        <main className='bg-secondary/5'>
            <section className='pt-32 pb-8 md:px-0 px-8'>
                <Container className='bg-white rounded-[30px] relative'>
                    <div className='absolute -top-20 left-1/2 -translate-x-1/2'>
                        <Image src="/images/monkey-circl.png" alt="monkey-circl" width={160} height={161} />
                    </div>
                    <div className='py-24 px-16 flex flex-col gap-7'>
                        <ImageBox ClassName="md:flex-row "
                            img='/images/about/1.png'
                            title="Your Ultimate Savings Destination"
                            content="At BountyBargain, we believe that saving money should be a seamless and enjoyable experience. That's why we've created a platform that makes accessing the best deals, coupons, and promo codes easier than ever. Our mission is to help consumers maximize their savings on everyday purchases, special occasions, and everything in between." />

                        <ImageBox ClassName="md:flex-row-reverse "
                            img='/images/about/2.png'
                            title="How It Works: Effortless Savings at Your Fingertips"
                            content="Our team works tirelessly to bring you the most up-to-date and exclusive deals from a wide range of categories. Whether you're looking to save on your next vacation, find a bargain on electronics, or enjoy a discount at your favorite restaurant, BountyBargain has got you covered. With our intuitive platform, you can easily browse, select, and apply the best deals to your online shopping cart, ensuring you never miss a chance to save." />

                        <ImageBox ClassName="md:flex-row "
                            img='/images/about/3.png'
                            title="More Than Just Coupons: A Community of Savers"
                            content="BountyBargain is more than just a coupon site; it's a community where savvy shoppers come to share and discover the latest deals. Our dedicated team and active user base contribute to a diverse and ever-expanding selection of promotions, ensuring there's always something new to explore. Join our community and start enjoying the benefits of smarter shopping today." />
                    </div>
                </Container>
            </section>
            <Container className='py-8'>
                <WhyChoose />
            </Container>
            <Container className='py-8'>
                <AnotherDeal />
            </Container>
            <Container className='py-8'>
                <JoinJourney />
            </Container>
        </main>
    )
}

export default AboutUs
