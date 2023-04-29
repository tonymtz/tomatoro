import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { BlogsList } from '~/components/molecules/blogs-list'
import { Page } from '~/components/templates/page'
import { getAllBlogs } from '~/utils/cms.api'

export const getServerSideProps = async () => {
  const blogs = await getAllBlogs()
  return { props: { blogs } }
}

export default function AllBlogs ({ blogs }: { blogs: Blog[] }) {
  return (
    <Page subtitle="Articles">
      <Screen>
        <Grid variant="contained">
          <Heading as="h1">Articles</Heading>

          <BlogsList blogs={ blogs }/>
        </Grid>
      </Screen>
    </Page>
  )
}
