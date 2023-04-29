import Head from 'next/head'
import React, { FC } from 'react'

import { Footer } from '~/components/organisms/footer'
import { Header } from '~/components/organisms/header'
import { SEO, VERSION } from '~/utils/config'

interface PageProps {
  children: React.ReactNode
  subtitle?: string
}

const defaultTitle = `${ SEO.title } | ${ SEO.subtitle }`

export const Page: FC<PageProps> = ({ children, subtitle }) => {
  const composedTitle = subtitle
    ? `${ subtitle } | ${ SEO.title }`
    : defaultTitle

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <title>{ composedTitle }</title>
        <meta name="title" content={ defaultTitle }/>
        <meta name="description" content={ SEO.description }/>
        <meta name="keywords" content={ SEO.keywords }/>
        <meta property="og:title" content="Tomatoro"/>
        <meta property="og:description" content={ SEO.description }/>
        <meta property="og:image" content={ SEO.image }/>
        <meta property="og:url" content={ SEO.url }/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={ defaultTitle }/>
        <meta name="twitter:description" content={ SEO.description }/>
        <meta name="twitter:image" content={ SEO.image }/>
      </Head>

      <Header/>

      { children }

      <Footer version={ VERSION }/>
    </>
  )
}
