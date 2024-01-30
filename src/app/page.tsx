import Container from "@/components/UI/container";
import Heading from "@/components/UI/heading/mainHeading";
import CouponCard from "@/components/cards/couponCard";
import SearchBox from "@/components/searchBox/searchBox";
import Stories, { copanStories } from "@/components/storie/stories";
import StoryCard from "@/components/storie/storyCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SearchBox />
      <section className="bg-[#F7F9FF] py-12 mt-3">
        <Container>
          <Stories />
          <div className="mt-12">
            <Heading>Best Deals in the moment</Heading>
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              {
                couponsdata?.map((item, idx) => (
                  <CouponCard key={idx} data={item} />
                ))
              }
            </div>
          </div>
          {/* popular categories  */}
          <div className="mt-20">
            <Heading>Popular Categories</Heading>
            <ul className="mt-6 flex flex-wrap gap-4">
              {
                categories.map((item, idx) => (
                  <li key={idx} className="bg-white text-neutral border p-1 px-3 hover:scale-105 transition-all duration-100 ease-linear">
                    <Link href={item.href}>{item.lable}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="pt-[1px] w-full bg-neutral mt-12"/>
          {/* Popular Stores */}
          <div className="my-12">
              <Heading>Popular Stores</Heading>
              <div className='grid lg:grid-cols-6 md:grid-cols-4 gap-2 md:gap-3 lg:gap-5 sm:grid-cols-3 grid-cols-2 mt-5 sm:mt-10'>
               {
                    copanStories.slice(0,12).map((item,idx)=>(
                         <StoryCard key={idx} logo={item.logo} about={item.about}/>
                    ))
               }
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}



const couponsdata = [
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
  {
    logo: '/images/dummylogo.png',
    title: 'SHEIN',
    info: 'Up to 20% off + $20 discount',
    coupon: 'A2XP65',
    off: '20',
    siteName: 'shein.com',
    siteURL: 'https://shein.com'
  },
]


const categories = [
  {
    lable: 'plants',
    href: "#"
  },
  {
    lable: 'skin care',
    href: "#"
  },
  {
    lable: 'mouthwash',
    href: "#"
  },
  {
    lable: 'books',
    href: "#"
  },
  {
    lable: 'bath mats',
    href: "#"
  },
  {
    lable: 'fashion',
    href: "#"
  },
  {
    lable: 'climate control',
    href: "#"
  },
  {
    lable: 'supplements',
    href: "#"
  },
  {
    lable: 'shampoo',
    href: "#"
  },
  {
    lable: 'bottles',
    href: "#"
  },
  {
    lable: 'hats',
    href: "#"
  }
]