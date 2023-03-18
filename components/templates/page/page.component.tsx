import Head from 'next/head'
import React, { FC } from 'react'

import { Header } from '~/components/organisms/header'
import { SEO } from '~/utils/config'

interface PageProps {
  children: React.ReactNode
  title?: string
}

export const Page: FC<PageProps> = ({ children, title }) => {
  const composedTitle = title ? `${ title } | ${ SEO.title }` : SEO.title

  return (
    <div>
      <Head>
        <title>{ composedTitle }</title>
        <meta name="description" content={ SEO.description }/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>

      { children }
    </div>
  )
}
