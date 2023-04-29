import { GetServerSideProps } from 'next'
import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { BlogRenderer } from '~/components/organisms/blog-renderer'
import { Page } from '~/components/templates/page'
import { getBlogBySlug } from '~/utils/cms.api'

export const getServerSideProps: GetServerSideProps<
  { blog: Blog },
  { slug: string }
> = async ({ params }) => {
  const blog = await getBlogBySlug(params?.slug || '')

  if (!blog) {
    return { notFound: true }
  }

  return { props: { blog } }
}

export default function BlogBySlug ({ blog }: { blog: Blog }) {
  if (!blog) {
    return null
  }

  return (
    <Page subtitle={ blog.attributes.title }>
      <Screen>
        <Grid variant="contained">
          <Heading as="h1">{ blog.attributes.title }</Heading>
          <BlogRenderer blog={ blog }/>
        </Grid>
      </Screen>
    </Page>
  )
}
