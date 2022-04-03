import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Layout from '../components/layouts'
import { AnimateSharedLayout } from 'framer-motion'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <Layout>

      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
