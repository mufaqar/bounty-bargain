import Container from "@/components/UI/container";
import Heading from "@/components/UI/heading/mainHeading";
import CouponCard from "@/components/cards/couponCard";
import Categories from "@/components/categories";
import PopularStories from "@/components/popular-stories";
import SearchBox from "@/components/searchBox/searchBox";
import Stories from "@/components/storie/stories";
import { client } from "../../sanity/lib/client";
import { QStores } from "../../sanity/lib/queries";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONEND_URL}api/coupons`)
  if (!res.ok) {
       throw new Error('Failed to fetch data')
  }

  const stores = await client.fetch(QStores)

  const coupons = await res.json()
  return {
    coupons,
    stores
  }
}

export default async function Home() {
  const {coupons, stores} = await getData()
  
  return (
    <>
      <SearchBox />
      <section className="bg-[#F7F9FF] py-12 mt-3">
        <Container>
          <Stories data={stores}/>
          <div className="mt-12">
            <Heading>Best Deals in the moment</Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
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
          <PopularStories />
        </Container>
      </section>
    </>
  );
}
