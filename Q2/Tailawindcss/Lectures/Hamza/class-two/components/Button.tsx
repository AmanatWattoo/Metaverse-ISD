import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
    
  return (
    <button className='bg-teal-700 text-white px-4 py3
    rounded-full shadow-lg font-semibold text-lg hover:bg-red-400  hover:duration-500 hover: scale-150 hover:shadow-2xl'>{text}</button>
  )
}

export default Button