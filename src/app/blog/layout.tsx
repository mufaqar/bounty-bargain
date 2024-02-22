import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
     title: 'Shopping Guide | Bounty Bargain',
     description: 'Bounty bargain',
}

const Layout = ({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) => {
     return (
          <div>{children}</div>
     )
}

export default Layout