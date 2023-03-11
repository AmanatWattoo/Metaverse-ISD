import logo from '/public/logos/headlogo.png'
 import Image from "next/image"
import Link from 'next/link'
const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-lg mx-auto bg-white sticky top-0 py-5 mt-7 px-2 items-center">
        {/*logo */}
        <div>
    {/* <h2 className="text-3xl font-extrabold underline ">Penaverse Dao</h2> */}
    <Image width={100} height={100} src={logo} alt = "Panaverse Logo"/>
    </div>
    {/* navigation Bar*/}
    <ul className="flex space-x-7 text-xl font-medium">
        <li>
          <Link href={'/'}>
          Home
          </Link>
        </li>
        <li>
        <Link href={'/cources' } >Courses</Link>
          </li>
    </ul>
    </header>
    //40.30


  )
}

export default Header