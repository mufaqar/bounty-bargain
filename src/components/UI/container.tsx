import React from 'react'

const Container = ({className, children}:any) => {
  return (
    <div className={`container mx-auto px-3 md:px-0 ${className}`}>{children}</div>
  )
}

export default Container