import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
    <h2 className={styles.center}>Welcome to main page</h2>
    <p className='body'>This is beging of revolution world </p>    
    </div>
  )
}
