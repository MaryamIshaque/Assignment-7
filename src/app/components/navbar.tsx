"use client"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const togglemenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <nav className='bg-gradient-to-r from-[#1b2045] to-[#04618C] w-full h-full flex justify-between items-center sticky top-0'>
             <h1 className='font-extrabold text-3xl  text-white p-3'>CryptoClub</h1>
             <div className='md:hidden'>
                <button onClick={togglemenu} className="w-5 h-5 text-white px-6">
                    {showMenu? <FaTimes className="w-6 h-6"/> : <FaBars className="w-6 h-6"/> }
                </button>
             </div>
                <ul className="hidden md:flex md:flex-row md:gap-14 md:text-white mr-6 cursor-pointer">
                   <li>Home</li>
                   <li>Rates</li>
                   <li>About us</li> 
          </ul>
    </nav>
  )
}

export default Navbar