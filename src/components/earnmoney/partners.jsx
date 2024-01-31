'use client'
import React from 'react'
import Container from '../UI/container'
import Slider from "react-slick";
import BrandLogo from './brandlogo';
import { CouponData } from '../../../public/data/coupons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Partners = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = React.useRef(null);
    return (
        <Container className="flex md:flex-row flex-col gap-7 items-center mt-16">
            <div className='md:w-2/5 w-full'>
                <h2 className='text-[40px] md:leading-[64px] font-medium text-dark md:text-start text-center'>
                    Our Partners
                </h2>
                <p className='text-lg font-normal text-[#757575] max-w-[420px] md:mx-0 mx-auto md:text-start text-center'>
                    Get access to the best paying survey opportunities, with just one click.
                </p>
            </div>
            <div className='md:w-3/5 w-full relative md:mr-[-30%] '>
                <div className='bg-[#F2F5F8] rounded-[32px] md:p-8 p-5'>
                    <Slider ref={slider} {...settings}>
                        {CouponData?.map((item, idx) => {
                            return (<BrandLogo key={idx} data={item} />
                            )
                        })}
                    </Slider>
                    <button className="absolute top-1/2 md:-left-10 left-0 transform -translate-y-1/2 text-2xl md:text-neutral text-primary " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl md:text-neutral text-primary md:hidden" onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
                </div>
            </div>
        </Container>
    )
}

export default Partners