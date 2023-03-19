import Head from 'next/head'
import React, { FC } from 'react'
import { Box } from 'theme-ui'

import { Header } from '~/components/organisms/header'
import { SEO, VERSION } from '~/utils/config'

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

      <Box sx={{
        position: 'absolute',
        bottom: '1em',
        right: '1em',
      }}>
        <small>v{ VERSION }</small>
      </Box>
    </div>
  )
}
