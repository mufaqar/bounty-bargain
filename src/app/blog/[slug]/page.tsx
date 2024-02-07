
import Container from '@/components/UI/container'
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { QSingleBlogs } from '../../../../sanity/lib/queries';
import Image from 'next/image';
import { PortableText } from '@portabletext/react'

async function getData(slug: any) {
  const blogsRes = await client.fetch(QSingleBlogs, {
    slug: slug
  });
  return {
    blogsRes
  }
}


const SingleBlog = async ({ params }: any) => {
  const { blogsRes } = await getData(params.slug)

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

import { groq } from 'next-sanity';
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from "next/image";
import Link from "next/link";
import {PortableText} from '@portabletext/react'

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  image: {
    url: string;
  };

}
interface Props {
  params: {
    slug: string;
  };
}



export const generateStaticParams = async () => {
  const query = groq`*[_type == 'blogs']{
        slug
    }`;
  const slugs: string[] = await client.fetch(query);
  return slugs.map((slug) => ({
    params: { slug },
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'blogs' && slug.current == $slug][0]{
          ...,
          body,
          author->
      }`;
  const blogs: Blog = await client.fetch(query, { slug });
  console.log("🚀 ~ SlugPage ~ blogs:", blogs)

  return (
    <section className="container px-4 mx-auto  pb-8">
      <div className="">
        <div className="">
          <Image
            src={urlForImage(blogs?.image)}
            width={500}
            height={500}
            alt="main image"
            className="object-cover w-full"
          />
          <p className="text-3xl text-[#5442ae] font-semibold text-center p-4">
            {blogs?.title}
          </p>
          <div className="content ">
          {/* <PortableText value={blogs?.content} />  */}
            </div>

        </div>

      </div>

    </section>
  );
};

export default SlugPage;

