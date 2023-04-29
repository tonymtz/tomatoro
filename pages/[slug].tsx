import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { Box, Grid, Heading, Link as TuiLink } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { BlogRenderer } from '~/components/organisms/blog-renderer'
import { Page } from '~/components/templates/page'
import { getBlogBySlug } from '~/utils/cms.api'
import { PAGES } from '~/utils/config'

export const getStaticPaths = async () => {
  const paths = Object.keys(PAGES).map((key) => ({
    params: { slug: PAGES[key as keyof typeof PAGES] },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  { blog: Blog },
  { slug: string }
> = async ({ params }) => {
  const blog = await getBlogBySlug(params?.slug || '')

  if (!blog) {
    return { notFound: true }
  }

  return { props: { blog } }
}

export default function PageBySlug ({ blog }: { blog: Blog }) {
  if (!blog) {
    return null
  }

  return (
    <Page subtitle={ blog.attributes.title }>
      <Screen>
        <Grid variant="contained">
          <Heading as="h1">{ blog.attributes.title }</Heading>
          <BlogRenderer blog={ blog }/>
          <Box mt={ 3 }>
            <TuiLink as={ Link } href="/">Return to Tomatoro Home</TuiLink>
          </Box>
        </Grid>
      </Screen>
    </Page>
  )
}
