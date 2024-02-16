import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
          <Image src="/svg/logo.svg" alt="Bounty Bargain" height={22} width={200}/>
    </Link>
  )
}

export default Logo