import { GetStaticProps } from 'next'
import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { BackCta } from '~/components/atoms/back-cta'
import { Screen } from '~/components/atoms/screen'
import { RichTextRenderer } from '~/components/organisms/rich-text-renderer'
import { Page } from '~/components/templates/page'
import { getBanners, getStaticPage } from '~/utils/cms.api'
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
  { post: StaticPage },
  { slug: string }
> = async ({ params }) => {
  try {
    const slug = params?.slug || ''
    const [post, banners] = await Promise.all([
      getStaticPage(slug),
      getBanners(slug),
    ])

    if (!post) {
      return { notFound: true }
    }

    return { props: { post, banners } }
  } catch (e) {
    return { notFound: true }
  }
}

export default function PageBySlug ({ banners, post }: { post: StaticPage, banners: Banner[] }) {
  if (!post) {
    return null
  }

  const seo = {
    title: post.attributes.title,
    description: post.attributes.excerpt,
    keywords: post.attributes.keywords,
    image: post.attributes.thumbnail?.data?.attributes.url,
  }

  return (
    <Page
      banners={ banners }
      subtitle={ post.attributes.title }
      seo={ seo }
    >
      <Screen>
        <Grid variant="contained"
          sx={ {
            gap: 3,
            lineHeight: 2,
            justifyItems: 'start',
          } }>
          <Heading as="h1">{ post.attributes.title }</Heading>
          <RichTextRenderer content={ post.attributes.content }/>
          <BackCta/>
        </Grid>
      </Screen>
    </Page>
  )
}
