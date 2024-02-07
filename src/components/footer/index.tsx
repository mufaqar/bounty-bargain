import React from 'react'
import Container from '../UI/container'
import Logo from '../header/logo'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='py-16 border-t-4 border-purple'>
            <Container className="grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-7 justify-between">
                <div>
                    <Logo />
                    <p className='text-sm font-normal text-neutral mt-5'>
                        Look no further for coupons and
                        discounts! Bounty Bargain has it all readily available for you. Save money while shopping online.
                    </p>
                </div>
                <div>
                    <h6 className='text-base font-bold text-dark mb-5'>
                        FIND DEALS
                    </h6>
                    <ul className='flex flex-col gap-1'>
                        <li>
                            <Link href="/category/fashion" className='text-sm font-normal text-dark hover:text-purple'>
                                Popular Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/store/shein" className='text-sm font-normal text-dark hover:text-purple'>
                                Popular Stores
                            </Link>
                        </li>
                        <li>
                            <Link href="/deals" className='text-sm font-normal text-dark hover:text-purple'>
                                Exclusive Deals
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-base font-bold text-dark mb-5'>
                        GENERAL
                    </h6>
                    <ul className='flex flex-col gap-1'>
                        <li>
                            <Link href="mailto:hello@bountybargain.com" target='_blank' className='text-sm font-normal text-dark hover:text-purple'>
                                hello@bountybargain.com
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className='text-sm font-normal text-dark hover:text-purple'>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className='text-sm font-normal text-dark hover:text-purple'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className='text-sm font-normal text-dark hover:text-purple'>
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-base font-bold text-dark mb-5'>
                        Follow us on Social Media
                    </h6>
                    <ul className='flex flex-row gap-7'>
                        <li>
                            <Link href="#" className='text-2xl font-normal text-dark hover:text-purple'>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-2xl font-normal text-dark hover:text-purple'>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-2xl font-normal text-dark hover:text-purple'>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-2xl font-normal text-dark hover:text-purple'>
                                <FaLinkedinIn />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer