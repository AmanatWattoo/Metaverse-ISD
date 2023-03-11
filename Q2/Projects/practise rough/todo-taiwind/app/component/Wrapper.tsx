import React, { FC } from 'react'

const Wrapper: FC<React.ReactNode> = ({children}:any) => {
  return (
    <div className='bg-red-800'>
        {children}
    </div>
  )
}

export default Wrapper