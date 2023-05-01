import React, { FC } from 'react'
import { Heading, Paragraph } from 'theme-ui'

import {
  List,
  ListItem,
} from '~/components/molecules/updates-list/updates-list.styles'

interface Props {
  updates: Update[]
}

export const UpdatesList: FC<Props> = ({ updates }) => {
  return (
    <List>
      { updates.map((update) => (
        <ListItem key={ update.id }>
          <Heading as="h4">
            { update.attributes.date }
          </Heading>
          <Paragraph>
            { update.attributes.title }
          </Paragraph>
        </ListItem>
      )) }
    </List>
  )
}
