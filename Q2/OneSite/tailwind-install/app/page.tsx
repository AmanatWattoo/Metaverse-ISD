import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <>
      <div className='flex justify-center'>
        <div className='mx-4 order-last self-center'>
          <Image width={420} height={420} src={'/logos/panaverse_transparent_small.png'}/>
        <div>
        <h1 className='mx-4 self-center text-center'>Hello Penaverse</h1>
        <div className='self-center'>
         <h2 className='text-3xl font-serif'>Web 3.0 and developer coumminty</h2>  

        </div>
        <div className='order-last'>
        <button  className='my-4 px-4 py-2 border-black rounded-full bg-slate-600'>Apply</button>
        </div>
        
        </div>
        </div>
      </div>
      </>
  )
}
