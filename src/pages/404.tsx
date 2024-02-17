import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>Jordanpkl - 404 | Not Found</title>
      </Head>
      <div className="grid h-screen px-4 bg-black place-content-center font-mono">
        <h1 className="text-5xl tracking-tighter font-nfont5x7">404
        <Link href="/" className='text-lg pl-2'>
          <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded">HOME</motion.button>
        </Link>
        </h1>
        <h1 className="text-3xl tracking-tighter font-nfont5x7">NOT FOUND</h1>
     </div>
    </div>
  )
}
