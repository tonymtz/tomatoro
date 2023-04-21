import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { BlogRenderer } from '~/components/organisms/blog-renderer'
import { Page } from '~/components/templates/page'
import { getBlogBySlug } from '~/utils/cms.api'
import { PAGES } from '~/utils/config'

export async function getServerSideProps () {
  const blog = await getBlogBySlug(PAGES.PRIVACY)
  return { props: { blog } }
}

export default function Privacy ({ blog }: { blog: Blog }) {
  return (
    <Page title={ blog.attributes.title }>
      <Screen>
        <Grid variant="contained">
          <Heading as="h1">{ blog.attributes.title }</Heading>
          <BlogRenderer blog={ blog }/>
        </Grid>
      </Screen>
    </Page>
  )
}
