import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Jordanpkl - Contact</title>
      </Head>
      <section className="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-black">
        <div className="text-base text-white text-center font-viga transition duration-1000">
          <h1 className="text-5xl tracking-tighter font-nfont5x7">CONTACT</h1>
          <p className="leading-5 text-base font-mono mt-1 mb-1"><span>Email: <Link href="mailto:contact@jordanpkl.dev"><u>contact@jordanpkl.dev</u></Link></span></p>
          <p className="leading-5 text-base font-mono mt-1 mb-1"><span>Github: <Link href="https://github.com/jordanpkl"><u>Jordanpkl</u></Link></span></p>
        </div>
      </section>
    </div>
  )
}
