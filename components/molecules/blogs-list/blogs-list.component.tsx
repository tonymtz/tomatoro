import Link from 'next/link'
import React, { FC } from 'react'
import { Heading, Link as TuiLink } from 'theme-ui'

import { Date } from '~/components/atoms/date'

import { List, ListItem } from './blogs-list.styles'

interface Props {
  blogs: Blog[]
}

export const BlogsList: FC<Props> = ({ blogs }) => {
  return (
    <List>
      { blogs.map((blog) => (
        <ListItem key={ blog.id }>
          <Heading as="h4">
            <Date dateString={ blog.attributes.publishedAt }/>
          </Heading>
          <TuiLink as={ Link } href={ `/blog/${ blog.attributes.slug }` }>
            { blog.attributes.title }
          </TuiLink>
        </ListItem>
      )) }
    </List>
  )
}
