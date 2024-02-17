import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jordanpkl</title>
      </Head>
      <section className="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-black">
        <div className="text-base text-white text-center font-viga transition duration-1000">
          <h1 className="text-5xl tracking-tighter font-nfont5x7">JORDANPKL</h1>
          <p className="leading-5 text-lg font-mono">I create stuff</p>
          <p className="leading-5 text-xs font-mono">(sometimes)</p>
          <br/>
          <Link href="/about">
            <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded">ABOUT ME</motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
