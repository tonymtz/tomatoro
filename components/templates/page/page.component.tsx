import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, useMemo } from 'react'
import { useIsClient } from 'usehooks-ts'

import { UnstableWarning } from '~/components/atoms/unstable-warning'
import { Banners } from '~/components/organisms/banners'
import { Footer } from '~/components/organisms/footer'
import { Header } from '~/components/organisms/header'
import { SEO, VERSION } from '~/utils/config'

interface Seo {
  title: string
  description: string
  keywords: string
  image: string
}

interface PageProps {
  banners?: Banner[]
  children: React.ReactNode
  subtitle?: string
  seo?: Partial<Seo>
}

const defaultTitle = `${ SEO.title } | ${ SEO.subtitle }`

const shouldShowUnstableWarning = (origin: string) => {
  return process.env.NODE_ENV === 'production' && origin.includes('next')
}

export const Page: FC<PageProps> = ({ banners, children, seo, subtitle }) => {
  const isClient = useIsClient()
  const { asPath } = useRouter()
  const cleanPath = asPath.split('#')[0].split('?')[0]

  const description = seo?.description || SEO.description
  const keywords = seo?.keywords || SEO.keywords
  const image = seo?.image || SEO.image
  const url = SEO.url + cleanPath

  const composedTitle = useMemo(() => {
    let result = defaultTitle

    if (subtitle) {
      result = `${ subtitle } | ${ SEO.title }`
    }

    if (seo?.title) {
      result = seo.title
    }

    return result
  }, [seo?.title, subtitle])

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <title>{ composedTitle }</title>
        <meta name="title" content={ composedTitle }/>
        <meta name="description" content={ description }/>
        <meta name="keywords" content={ keywords }/>
        <meta property="og:title" content={ composedTitle }/>
        <meta property="og:description" content={ description }/>
        <meta property="og:image" content={ image }/>
        <meta property="og:url" content={ url }/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={ composedTitle }/>
        <meta name="twitter:description" content={ description }/>
        <meta name="twitter:image" content={ image }/>
      </Head>

      {/* Warning appears only in client. It might cause issues with SSR */}
      { isClient && shouldShowUnstableWarning(origin) && (<UnstableWarning/>) }

      <Header/>

      {/* Banners appears only in client. It might cause issues with SSR */}
      { isClient && banners && <Banners banners={ banners }/> }

      { children }

      <Footer version={ VERSION }/>
    </>
  )
}
