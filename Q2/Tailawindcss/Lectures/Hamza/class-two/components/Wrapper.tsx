
import React, { FC } from 'react'

const Wrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-sm mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper