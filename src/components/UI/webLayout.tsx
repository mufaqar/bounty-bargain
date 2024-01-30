'use client'
import React, { useContext } from 'react'
import Model from './model'
import { GlobalContext } from '@/context/global-context'
import RevelCopon from '../cards/revelCopon'
import SubscribeNewsLetter from '../cards/subscribeNewsLetter'

const WebLayout = ({ children }: any) => {
     const { modalIsOpen } = useContext(GlobalContext)
     return (
          <>
               <>{children}</>
               {modalIsOpen === 'newsletter' && <Model><SubscribeNewsLetter/></Model>}
               {modalIsOpen === 'coupon' && <Model><RevelCopon /></Model> }
          </>
     )
}

export default WebLayout