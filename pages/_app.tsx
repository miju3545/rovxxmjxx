import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetaData from '@/data/siteMetaData'
import LayoutWrapper from '@/components/LayoutWrapper'
import { AppProps } from 'next/app'

const isDevelopment = process.env.NODE_ENV === 'development'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetaData.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
