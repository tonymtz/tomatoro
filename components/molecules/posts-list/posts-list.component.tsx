import Link from 'next/link'
import React, { FC } from 'react'
import { Heading, Link as TuiLink } from 'theme-ui'

import { Date } from '~/components/atoms/date'

import { List, ListItem } from './posts-list.styles'

interface Props {
  posts: Post[]
}

export const PostsList: FC<Props> = ({ posts }) => {
  return (
    <List>
      { posts.map((post) => (
        <ListItem key={ post.id }>
          <Heading as="h4">
            <Date dateString={ post.attributes.publishedAt }/>
          </Heading>
          <TuiLink as={ Link } href={ `/post/${ post.attributes.slug }` }>
            { post.attributes.title }
          </TuiLink>
        </ListItem>
      )) }
    </List>
  )
}
