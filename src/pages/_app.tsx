import '@/styles/globals.css'
import '@/styles/custom.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  const disableFooter = ['/404']
  const disableNavbar = ['/404']
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial='initialState'
          animate='animateState'
          exit='exitState'
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {

            },
          }}
          className='base-page-size'
        >
          {disableFooter.includes(pathname) ? null : <Navbar/>}
          <Component {...pageProps} />
          {disableNavbar.includes(pathname) ? null : <Footer/>}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
