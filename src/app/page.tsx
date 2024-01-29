import Container from "@/components/UI/container";
import Heading from "@/components/UI/heading/mainHeading";
import CouponCard from "@/components/cards/couponCard";
import SearchBox from "@/components/searchBox/searchBox";
import Stories from "@/components/storie/stories";
import Image from "next/image";

export default function Home() {
  return (
   <>
      <SearchBox/>
      <section className="bg-[#F7F9FF] py-12 mt-3">
        <Container>
            <Stories/>
            <div className="mt-12">
                <Heading>Best Deals in the moment</Heading>
                <div className="grid md:grid-cols-4 gap-4 mt-8">
                  {
                    couponsdata?.map((item,idx)=>(
                      <CouponCard key={idx} data={item}/>
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