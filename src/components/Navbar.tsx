import { createRef } from "react"
import { motion } from "framer-motion";
import Link from 'next/link'
import { useState } from "react";

export default function Navbar() {
    let myDiv = createRef<HTMLInputElement>()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = async () => {
        if (myDiv.current !== null) {
            setIsOpen(isOpen => !isOpen)
            myDiv.current.classList.toggle('hidden');
        }
    };

  return (
    <motion.div
    initial={{ y: -25, opacity: 0}}
    animate={{ y: 0, opacity: 1}}
    transition={{
        duration: 0.75,
    }}>
        <nav className="bg-black bg-opacity-70 fixed inset-x-0 z-50" >
            <div className="max-w-0xl mx-auto px-10">
                <div className="flex justify-between">
                <div className="flex space-x-4">
                    <div>
                    <Link href="https://www.jordanpkl.dev/" className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900">
                        <span className="h-8 px-3 text-gray-200 hover:text-gold text-lg transition ease-in-out duration-200 font-nfont5x7">JORDANPKL.DEV</span>
                    </Link>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-1 font-nfont5x7">
                    <Link href="/" className="py-5 px-3 text-gray-200 hover:text-gold text-xs-s transition ease-in-out duration-200">HOME</Link>
                    <Link href="/about" className="py-5 px-3 text-gray-200 hover:text-gold text-xs-s transition ease-in-out duration-200">ABOUT</Link>
                    <Link href="/uses" className="py-5 px-3 text-gray-200 hover:text-gold text-xs-s transition ease-in-out duration-200">USES</Link>
                    <Link href="/projects" className="py-5 px-3 text-gray-200 hover:text-gold text-xs-s transition ease-in-out duration-200">PROJECTS</Link>
                    <Link href="/contact" className="py-5 px-3 text-gray-200 hover:text-gold text-xs-s transition ease-in-out duration-200">CONTACT</Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button text-gray-200 px-2 -mt-1.5" onClick={handleClick}>
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h1M4 11h1M4 17h1M8 5 9 5ZM12 5 13 5ZM16 5 17 5ZM20 5 21 5ZM8 11 9 11ZM8 17 9 17ZM13 17 12 17M12 11 13 11ZM16 11 17 11M16 17 17 17M20 17 21 17ZM20 11 21 11Z" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>

            <motion.div animate={ isOpen ? "open" : "closed" } variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }} >
                <div ref={myDiv} className="mobile-menu hidden md:hidden bg-black bg-opacity-0 text-center font-nfont5x7">
                    <Link href="/" className="block py-2 px-4 text-sm text-gray-200 text-center hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-200">HOME</Link>
                    <Link href="/about" className="block py-2 px-4 text-sm text-gray-200 text-center hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-200">ABOUT</Link>
                    <Link href="/uses" className="block py-2 px-4 text-sm text-gray-200 text-center hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-200">USES</Link>
                    <Link href="/projects" className="block py-2 px-4 text-sm text-gray-200 text-center hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-200">PROJECTS</Link>
                    <Link href="/contact" className="block py-2 px-4 text-sm text-gray-200 text-center hover:bg-black hover:bg-opacity-50 transition ease-in-out duration-200">CONTACT</Link>
                </div>
            </motion.div>
        </nav>  
    </motion.div>
  )
}
