import React from 'react'
import Heading from '../UI/heading/mainHeading'

const UserRegistor = () => {
     return (
          <>
               <div className='md:px-20 md:mb-10'>
                    <Heading className="text-primary text-center">User Successfully <br /> Registor</Heading>
                    <p className='text-center mt-6 text-neutral'><strong className='text-primary'>Check Your Email</strong> user email and password send to your mail.</p>
               </div>
          </>
     )
}

export default UserRegistor