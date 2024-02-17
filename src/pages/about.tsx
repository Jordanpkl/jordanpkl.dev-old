import Head from 'next/head'
import { motion } from "framer-motion";
import Link from 'next/link'


export default function About() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var years = year - 2003;
    if (month <= 9) {
        if (day < 18) {
            years = years - 1
        }
    }
    return (
        <div>
            <Head>
            <title>Jordanpkl - About</title>
            </Head>
            <section className="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-black">
            <div className="text-base text-white text-center font-viga transition duration-1000">
                <h1 className="text-5xl tracking-tighter font-nfont5x7">ABOUT ME</h1>
                <h1 className="text-3xl tracking-tighter font-nfont5x7">Jordan R.</h1>
                <p className="leading-5 text-lg font-mono">I am {years} years old. Born in Poland and currently living in Spain.</p>
                <p className="leading-5 text-lg font-mono">I speak Polish, English and Spanish.</p>
                <p className="leading-5 text-lg font-mono">I am a self taught developer.</p>
                <p className="leading-5 text-lg font-mono">Car & truck enthusiast.</p>
                <br/>
                <p className="leading-5 text-lg font-mono">Activities I enjoy:</p>
                <p className="leading-5 text-lg font-mono">Coding</p>
                <p className="leading-5 text-lg font-mono">Playing games</p>
                <p className="leading-5 text-lg font-mono">Modding games</p>
                <p className="leading-5 text-lg font-mono">🐛 Breaking/Glitching games</p>
                <p className="leading-5 text-lg font-mono">Creating gameservers.</p>
                <p className="leading-5 text-lg font-mono">Sim Racing</p>
                <p className="leading-5 text-lg font-mono">Driving</p>
                <br/>
                <Link href="/uses">
                    <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded mr-1">USES</motion.button>
                </Link>
                <Link href="/projects">
                    <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded ml-1 mr-1">PROJECTS</motion.button>
                </Link>
                <Link href="/contact">
                    <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded ml-1">CONTACT</motion.button>
                </Link>
            </div>
            </section>
            <section className="flex items-center justify-center w-full h-auto bg-center bg-cover snap-start bg-black -mt-7 mb-32">
                <div className="text-white text-center font-mono">
                <h1 className="text-5xl tracking-tighter font-nfont5x7">SKILLSET</h1>
                <h1 className="text-lg tracking-tighter">Lua</h1>
                <h1 className="text-lg tracking-tighter">Javascript</h1>
                <h1 className="text-lg tracking-tighter">Typescript</h1>
                <h1 className="text-lg tracking-tighter">React</h1>
                <h1 className="text-lg tracking-tighter">Next.js</h1>
                <h1 className="text-lg tracking-tighter">Node.js</h1>
                <h1 className="text-lg tracking-tighter">Discord.js</h1>
                </div>
            </section>
        </div>
    )
}
