import React from 'react'
import Button from './Button'
import Wrapper from '@/components/Wrapper'

const CoreTracks = () => {
  return (
    <Wrapper>
    <section className='mt-4 max-w-screen-sm'>
    <h4>program of studies</h4>
    <h2 className='text-4xl font-bold'>Core Tracsk(common in all sepcilization)</h2>
    <p className='mt-3 '>Every participant of the program will start by completing the following three core courses:</p>
    <Button text='learn more'/>
    {/* // {boxes} */}
    <div className='mya-50'>
    <div className='border rounded-md w-4/12 relative px-8 py-12'>
        <h4 className='font-bold'>Quarter i</h4>
        <p className='text-lg text-bold'>CS-101: Object-Oriented Programming using TypeScript</p>
        <div className='text-gray-200 absolute top-0 right-5 font-bold text-9xl -z-10'>1</div>
        </div>
    </div>
    </section>
    </Wrapper>
  
  )
}

export default CoreTracks