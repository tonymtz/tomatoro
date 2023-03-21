import axios from 'axios'
import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { BlogRenderer } from '~/components/organisms/blog-renderer'
import { Page } from '~/components/templates/page'

export async function getServerSideProps () {
  const { data: blog } = await axios.get('https://blog.tomatoro.com/blogs/3')
  return { props: { blog } }
}

export default function Faq ({ blog }: { blog: Blog }) {
  return (
    <Page title={ blog.title }>
      <Screen>
        <Grid variant='contained'>
          <Heading as='h1'>{ blog.title }</Heading>
          <BlogRenderer blog={ blog }/>
        </Grid>
      </Screen>
    </Page>
  )
}
