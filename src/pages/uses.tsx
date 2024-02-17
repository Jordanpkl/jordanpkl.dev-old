import Head from 'next/head'
import { motion } from "framer-motion";
import Link from 'next/link'


export default function Uses() {
    return (
        <div>
            <Head>
            <title>Jordanpkl - Uses</title>
            </Head>
            <section className="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-black">
            <div className="text-base text-white text-center font-viga transition duration-1000">
                <h1 className="text-5xl tracking-tighter font-nfont5x7">EQUIPMENT I USE</h1>
                
                <h1 className="text-3xl tracking-tighter font-nfont5x7">Main Computer</h1>
                <p className="leading-5 text-lg font-mono"><b>Corsair iCUE 4000X</b><span className='text-sm'> Black</span></p>
                <p className="leading-5 text-lg font-mono"><b>Intel Core i7-13700K</b><span className='text-sm'> 3.4GHz</span></p>
                <p className="leading-5 text-lg font-mono"><b>Corsair iCUE H100x</b><span className='text-sm'> 240mm Black</span></p>
                <p className="leading-5 text-lg font-mono"><b>ASUS PRIME Z790-P WIFI</b></p>
                <p className="leading-5 text-lg font-mono"><b>WD BLACK SN770 2TB NVMe SSD</b></p>
                <p className="leading-5 text-lg font-mono"><b>Western Digital Blue 1TB HDD</b></p>
                <p className="leading-5 text-lg font-mono"><b>Western Digital 500GB HDD</b></p>
                <p className="leading-5 text-lg font-mono"><b>GIGABYTE 240GB SSD</b></p>
                <p className="leading-5 text-lg font-mono"><b>Corsair Vengeance RGB DDR5</b><span className='text-sm'> 6000MHz 2x16GB</span></p>
                <p className="leading-5 text-lg font-mono"><b>Corsair RM750e</b><span className='text-sm'> 750W 80 Plus Gold Modular</span></p>
                <p className="leading-5 text-lg font-mono"><b>MSI RTX 4070 Ti</b><span className='text-sm'> Ventus 3X E1 12GB OC</span></p>
                
                <h1 className="text-3xl tracking-tighter font-nfont5x7 mt-2">Laptop & Accesories</h1>
                <p className="leading-5 text-lg font-mono"><b>MSI Prestige 15 A10SC 15.6&quot;</b><span className='text-sm'> (i7-10710U/32GB RAM/1TB SSD/GTX 1650)</span></p>
                <p className="leading-5 text-lg font-mono"><b>Sabrent 4-Bay USB SATA Docking Station</b></p>
                <p className="leading-5 text-lg font-mono"><b>Baseus Docking Station USB-C</b></p>

                <h1 className="text-3xl tracking-tighter font-nfont5x7 mt-2">Other Hardware</h1>
                <p className="leading-5 text-lg font-mono"><b>Samsung SyncMaster 953BW 19&quot;</b></p>
                <p className="leading-5 text-lg font-mono"><b>Samsung T32E310EW 32&quot;</b></p>
                <p className="leading-5 text-lg font-mono"><b>Corsair HS80 RGB Wireless</b></p>
                <p className="leading-5 text-lg font-mono"><b>Corsair Sabre Pro RGB Wireless</b></p>
                <p className="leading-5 text-lg font-mono"><b>Glorious GMMK 2 White</b><span className='text-sm'> 96% ANSI LAYOUT</span></p>
                <p className="leading-5 text-lg font-mono"><b>Titanwolf Symbol red XXXL</b><span className='text-sm'> (1200x400x3mm)</span></p>
                <p className="leading-5 text-lg font-mono"><b>Lenovo Explorer VR Headset</b></p>
                <p className="leading-5 text-lg font-mono"><b>Thrustmaster T300RS GT Edition</b></p>
                <p className="leading-5 text-lg font-mono"><b>Logitech G25 Racing Wheel</b><span className='text-sm font-mono'> (shifter only in use)</span></p>
                <p className="leading-5 text-lg font-mono"><b>SimMasters USB Adapter</b><span className='text-sm font-mono'> (<u><a href="https://www.simmasters.pl/index.php/produkt/119/">simmasters.pl</a></u>)</span></p>
                <p className="leading-5 text-lg font-nfont5x7"><b>Nothing Phone (1)</b><span className='text-sm font-mono'> (256GB/12GB RAM/BLACK)</span></p>
                <p className="leading-5 text-lg font-mono"><b>Huawei P20 Lite</b><span className='text-sm font-mono'> (64GB/4GB RAM/MIDNIGHT BLACK)</span></p>
                <br/>
                <Link href="/projects">
                    <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }} className="bg-white hover:bg-gray-300 text-gray-800 font-nfont5x7 leading-3 pt-1.5 py-1 px-2 rounded">PROJECTS</motion.button>
                </Link>
            </div>
            </section>
            <section className="flex items-center justify-center w-full h-auto bg-center bg-cover snap-start bg-black py-8 -mt-14 mb-32">
                <div className="text-white text-center font-mono">
                <h1 className="text-5xl tracking-tighter font-nfont5x7">SOFTWARE I USE</h1>
                <h1 className="text-lg tracking-tighter">VSCodium</h1>
                <h1 className="text-lg tracking-tighter">PostgreSQL</h1>
                <h1 className="text-lg tracking-tighter">MariaDB/MySQL</h1>
                <h1 className="text-lg tracking-tighter">DBeaver</h1>
                <h1 className="text-lg tracking-tighter">HeidiSQL</h1>
                <h1 className="text-lg tracking-tighter">Postman</h1>
                <h1 className="text-lg tracking-tighter">Vivaldi Browser</h1>
                <h1 className="text-lg tracking-tighter">DuckDuckGo Private Browser<span className='text-xs'> (Beta)</span></h1>
                <h1 className="text-lg tracking-tighter">Windows<span className='text-xs'> (11 Pro)</span></h1>
                <h1 className="text-lg tracking-tighter">Linux<span className='text-xs'> (Debian & Ubuntu)</span></h1>
                </div>
            </section>
        </div>
    )
}
