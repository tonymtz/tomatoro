import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { PostsList } from '~/components/molecules/posts-list'
import { Page } from '~/components/templates/page'
import { getAllPosts } from '~/utils/cms.api'

export const getServerSideProps = async () => {
  const posts = await getAllPosts()
  return { props: { posts } }
}

export default function AllPosts ({ posts }: { posts: Post[] }) {
  return (
    <Page subtitle="Articles">
      <Screen>
        <Grid variant="contained">
          <Heading as="h1">Posts</Heading>

          <PostsList posts={ posts }/>
        </Grid>
      </Screen>
    </Page>
  )
}
