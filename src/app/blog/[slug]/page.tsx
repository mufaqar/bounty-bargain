import { groq } from 'next-sanity';
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

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
  
    return (
      <section className="container px-4 mx-auto  pb-8">
        <div className="">
          <div className="">
            <img
              src={urlForImage(blogs?.image)}
              width={500}
              height={500}
              alt="main image"
              className="object-cover w-full"
            />
             <p className="text-3xl text-[#5442ae] font-semibold text-center p-4">
              {blogs?.title}
            </p>
            <div className="content " />
            <PortableText  value={blogs?.content} /> 
          </div>
       
        </div>
      
      </section>
    );
  };
  
  export default SlugPage;