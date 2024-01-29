import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
          <Image src="/images/logo.png" alt="Bounty Bargain" height={22} width={140}/>
    </Link>
  )
}

export default Logo