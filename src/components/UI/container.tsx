import React from 'react'

const Container = ({className, children}:any) => {
  return (
    <div className={`max-w-[1080px] mx-auto px-3 lg:px-0 ${className}`}>{children}</div>
  )
}

export default Container