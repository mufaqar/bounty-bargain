
import Container from '@/components/UI/container'
import JoinJourney from '@/components/about/join-journey'
import PostBox from '@/components/blog/post-box'
import AnotherDeal from '@/components/store/another-deal'
import React from 'react'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}api/blogs`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const blogs = await res.json()

  return {
    blogs
  }
}

async function Blog() {
  const { blogs } = await getData()
  console.log("🚀 ~ Blog ~ blogs:", blogs)

  return (
    <section className='bg-secondary/5 py-16'>
      <Container className='py-8'>
        <div className='max-w-[480px] mx-auto'>
          <h1 className='text-2xl text-primary font-semibold text-center mb-5'>
            Bounty Bargain Shopping Guide
          </h1>
          <p className='text-lg font-normal text-dark text-center'>
            We help you to better understand online consumer buying behavior, trends and coupon statistics.
          </p>
        </div>
      </Container>
      <Container className='py-8'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
          {blogs?.data?.map((item: any, idx: number) => {
            return (
              <PostBox key={idx} data={item} />
            )
          })}
        </div>
      </Container>
      <Container className='py-8'>
        <AnotherDeal />
      </Container>
      {/* join */}
      <Container className='py-8'>
        <JoinJourney />
      </Container>
    </section>
  )
}
export default Blog

