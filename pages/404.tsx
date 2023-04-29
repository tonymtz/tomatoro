import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { Flex, Grid, Heading } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { BlogRenderer } from '~/components/organisms/blog-renderer'
import { Page } from '~/components/templates/page'
import graphicTakeBreak from '~/public/svg/graphic-take-break.svg'
import { getBlogBySlug } from '~/utils/cms.api'

const fallbackBlog: Blog = {
  'id': 99999,
  'attributes': {
    'title': 'Oops! 🍅 Time\'s Up!',
    // eslint-disable-next-line max-len
    'content': 'We couldn\'t find the page you\'re looking for.\n\nLet\'s get you back on track!\n\n[Return to Tomatoro Home](/)',
    'slug': '404',
    'createdAt': '2023-04-29T00:35:43.151Z',
    'updatedAt': '2023-04-29T00:40:25.617Z',
    'publishedAt': '2023-04-29T00:35:54.035Z',
    'locale': 'en',
  },
}

export const getStaticProps: GetStaticProps<
  { page: Blog },
  {}
> = async () => {
  let page = await getBlogBySlug('404')

  if (!page) {
    page = fallbackBlog
  }

  return { props: { page } }
}

export default function Custom404 ({ page }: { page: Blog }) {
  return (
    <Page subtitle={ page.attributes.title }>
      <Screen>
        <Grid variant="contained" columns={ 2 }>
          <Grid gap={ 3 }>
            <Heading as="h1">{ page.attributes.title }</Heading>
            <div>
              <BlogRenderer blog={ page }/>
            </div>
          </Grid>
          <Flex sx={ { justifyContent: 'center' } }>
            <Image
              src={ graphicTakeBreak }
              alt="Tomato taking a break"
              width={ 180 }
              height={ 180 }
            />
          </Flex>
        </Grid>
      </Screen>
    </Page>
  )
}
