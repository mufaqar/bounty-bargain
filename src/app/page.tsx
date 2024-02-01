import Container from "@/components/UI/container";
import Heading from "@/components/UI/heading/mainHeading";
import CouponCard from "@/components/cards/couponCard";
import Categories from "@/components/categories";
import SearchBox from "@/components/searchBox/searchBox";
import Stories, { copanStories } from "@/components/storie/stories";
import StoryCard from "@/components/storie/storyCard";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}/api/coupons`)
  if (!res.ok) {
       throw new Error('Failed to fetch data')
  }
  const coupons = await res.json()
  return {
    coupons
  }
}


export default async function Home() {
  const {coupons} = await getData()
  console.log("1111🚀 ~ Home ~ coupons22:", coupons)
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
                coupons?.data?.map((item:any, idx:number) => (
                  <CouponCard key={idx} data={item} />
                ))
              }
            </div>
          </div>
          <Categories/>
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
