import { GetServerSideProps } from 'next'

import { getAllPosts } from '~/utils/cms.api'
import { getAllStaticPages } from '~/utils/data.api'

interface SiteMapData {
  posts: Post[]
  domain: string
  staticPages: Array<{ slug: string }>
}

function generateSiteMap ({ domain, posts, staticPages }: SiteMapData) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://tomatoro.com</loc>
        <lastmod>${ new Date().toISOString() }</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
     ${ staticPages.map(({ slug }) => `
        <url>
            <loc>${ `${ domain }/${ slug }` }</loc>
            <lastmod>${ new Date().toISOString() }</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`).join('') }
     ${ posts.map(({ attributes: { slug, updatedAt } }) => `
        <url>
            <loc>${ `${ domain }/post/${ slug }` }</loc>
            <lastmod>${ updatedAt }</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`).join('') }
   </urlset>
 `
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ res }) => {
  const staticPages = getAllStaticPages()
  const posts = await getAllPosts()
  const sitemap = generateSiteMap({
    posts,
    domain: 'https://tomatoro.com',
    staticPages,
  })

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap () {
  // Empty.
}
