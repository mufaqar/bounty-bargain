'use client'
import React, { useEffect, useState } from 'react';
import { QBlogs } from '../../../sanity/lib/queries';
import { client } from '../../../sanity/lib/client';
import PostBox from '@/components/blog/post-box';

export default async function Blogs() {
 
    const posts = await client.fetch(QBlogs);



async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}api/blogs`)
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

  return (
    <section className='bg-secondary/5 py-16'>
      <div className='py-8'>
        <div className='max-w-[480px] mx-auto'>
          <h1 className='text-2xl text-primary font-semibold text-center mb-5'>
            Bounty Bargain Blog
          </h1>
          <p className='text-lg font-normal text-dark text-center'>
            We help you to better understand online consumer buying behavior, trends and coupon statistics.
          </p>
        </div>
      </div>
      <div className='py-8'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>

          {blogs?.data?.map((item:any, idx:number) => {

            return (
              <PostBox key={idx} data={item} />
            )
          })}
        </div>
      </div>
    
    </section>
  );
}


