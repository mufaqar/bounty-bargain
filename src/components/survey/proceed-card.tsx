'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../UI/button/button'
import { FaCheck } from "react-icons/fa6";
import {PortableText} from '@portabletext/react'
import { GlobalContext } from '@/context/global-context';

const ProceedCard = ({ item }: any) => {
    const {selectSurvey, setSelectSurvey} = useContext(GlobalContext)
    const addSurveyId = (id:any) => {
        if(selectSurvey.includes(id)){
           const removeSurvey = selectSurvey.filter((i:any)=>i != id)
           return setSelectSurvey(removeSurvey)
        }
        setSelectSurvey([ ...selectSurvey, id ])
    }
    return (
        <div className='flex md:flex-row flex-col items-center md:gap-10 gap-7 py-10 border-b border-black'>
            <div className='md:w-[30%] w-full'>
                <div className='bg-white py-14 px-8 rounded-3xl flex justify-center items-center border border-primary'>
                    <Image src={item.thumbnail.asset.url} alt={item.title} width={249} height={55} />
                </div>
            </div>
            <div className='md:w-[60%] w-full'>
                <h2 className='text-[40px] leading-[51px] font-medium text-primary mb-6 md:text-start text-center'>
                    {item.title}
                </h2>
                
                <ul className='proceed pl-5 md:text-start text-center gap-2 text-lg font-normal text-dark'>
                    <PortableText
                        value={item.description}
                    />
                </ul>
            </div>
            <div className='md:w-[30%] w-full flex flex-col items-end'>
                <Button
                    size='medium'
                    variants='primary'
                    color='primary'
                    rounded
                    className='text-lg bg-primary hover:bg-purple font-medium py-4 px-6 gap-7  md:mx-0 mx-auto'
                    click={()=>addSurveyId(item._id)}
                >
                    <div className='w-8 h-8 relative bg-white rounded-lg'>
                        { selectSurvey.find((s:any)=>s === item._id) && <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-purple" />}
                    </div> Join Now
                </Button>
                <ul className='flex md:gap-7 gap-3 items-center md:justify-start justify-center mt-7'>
                    {
                        item?.types_of_rewards.map((t: any, i: number) => (
                            <>
                                {
                                    t === 'cash' && <li className='flex md:flex-row flex-col gap-1 items-center' key={i}>
                                        <Image src="/images/cash.png" alt='cash' width={33} height={36} />
                                    </li>
                                }
                                {
                                    t === 'gift_card' && <li className='flex md:flex-row flex-col gap-1 items-center' key={i}>
                                        <Image src="/images/gift.png" alt='gift' width={33} height={36} />
                                    </li>
                                }
                                {
                                    t === 'other_incentives' && <li className='flex md:flex-row flex-col gap-1 items-center' key={i}>
                                        <Image src="/images/medal.png" alt='medal' width={33} height={36} />
                                    </li>
                                }
                            </>

                        ))

                    }


                </ul>
            </div>
        </div>
    )
}

export default ProceedCard