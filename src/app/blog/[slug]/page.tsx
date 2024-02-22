
import Container from '@/components/UI/container'
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { QSingleBlogs } from '../../../../sanity/lib/queries';
import Image from 'next/image';
import { PortableText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next';

async function getData(slug: any) {
  const blogsRes = await client.fetch(QSingleBlogs, {
    slug: slug
  });
  if (!blogsRes) {
    throw new Error('Failed to fetch data')
  }
  return {
    blogsRes
  }
}


export async function generateMetadata(
  { params }: any,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const blogsRes = await client.fetch(QSingleBlogs, {
    slug: slug
  });
  console.log("🚀 ~ blogsRes:", blogsRes)
  var keyword = blogsRes?.metaKeywords?.split(',');


  return {
    title: `${blogsRes.metatitle || blogsRes.title} | Bounty Bargain` ,
    description: blogsRes.metadescription,
    keywords: keyword,
    openGraph: {
      title: blogsRes.metatitle,
      description: blogsRes.metadescription,
    },
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
  }
}


const SingleBlog = async ({ params }: any) => {
  const { blogsRes } = await getData(params.slug)
  console.log("🚀 ~ SingleBlog ~ blogsRes:", blogsRes)

  return (
    <>
      <Container>
        <section className='mb-20'>
          <Image src={blogsRes?.image?.asset?.url} alt={blogsRes?.title} width={800} height={600} className='w-full mt-10 h-[400px] object-cover rounded-2xl' />
          <h1 className=' mt-8 mb-2 text-3xl font-bold max-w-[1000px] mx-auto'>{blogsRes?.title}</h1>
          <div className="flex capitalize max-w-[1000px] gap-1 mx-auto mb-8">
            <p>{blogsRes?.writtenby.fname} {blogsRes?.writtenby.lname}</p>
            <span>-</span>
            <p>{blogsRes?._createdAt}</p>
          </div>
          <div className='text-base font-normal text-dark mt-6 max-w-[1000px] mx-auto desc_content'>
            <PortableText value={blogsRes?.content} />
          </div>
        </section>
      </Container>
    </>
  )
}

export default SingleBlog
