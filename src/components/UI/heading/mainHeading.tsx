import React from 'react'

const Heading = ({children, className}:any) => {
  return (
    <h2 className={`text-xl sm:text-2xl font-semibold text-[#333333] ${className}`}>{children}</h2>
  )
}

export default Heading