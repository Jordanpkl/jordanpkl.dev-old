import Head from 'next/head'
import { motion } from "framer-motion";
import Link from 'next/link'
// import GitHubCalendar from 'react-github-calendar'
// import { Tooltip as MuiTooltip } from '@mui/material'


export default function Projects() {
    return (
        <div>
            <Head>
            <title>Jordanpkl - Projects</title>
            </Head>
            <section className="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-black">
            <div className="text-base text-white text-center font-viga transition duration-1000 mt-28">
                <h1 className="text-5xl tracking-tighter font-nfont5x7">PROJECTS</h1>
                <ol className="border-l border-neutral-300 dark:border-neutral-500 w-96">
                    <div className="flex items-center w-full my-6 -ml-1.5 font-mono">
                        <div className="w-1/12 z-10">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <p className="text-sm">Portfolio.</p>
                            <p className="text-xs text-gray-400">2023</p>
                            <p className="text-xs text-gray-400">Jordanpkl.dev</p>
                            <p className="text-xs text-gray-400">Next.js web app</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full my-6 -ml-1.5 font-mono">
                        <div className="w-1/12 z-10">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <p className="text-sm">Private project.<span className='text-xs'></span></p>
                            <p className="text-xs">Dev</p>
                            <p className="text-xs text-gray-400">2023 - Now</p>
                            <p className="text-xs text-gray-400">Next.js web panel</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full my-6 -ml-1.5 font-mono">
                        <div className="w-1/12 z-10">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-11/12">
                            <p className="text-sm">Private project.</p>
                            <p className="text-xs">Dev</p>
                            <p className="text-xs text-gray-400">2016 - Now</p>
                            <p className="text-xs text-gray-400">Next.js web app</p>
                            <p className="text-xs text-gray-400"><s>Basic static html website</s></p>
                        </div>
                    </div>
                </ol>
                <br/>
                <Link href="/contact" className="">
                    <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded">CONTACT</motion.button>
                </Link>
            </div>
            </section>
        </div>
    )
}
