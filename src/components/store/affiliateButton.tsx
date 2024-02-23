'use client'
import { GlobalContext } from '@/context/global-context';
import React, { useContext } from 'react'

const AffiliateButton = ({data}:any) => {
     const { openModal, setCopan } = useContext(GlobalContext)

  return (
     <h6 onClick={()=>{
          setCopan(data);
          openModal('affiliate')
     }} className="text-primary font-semibold mt-4 cursor-pointer">Get affiliate link!</h6>
  )
}

export default AffiliateButton