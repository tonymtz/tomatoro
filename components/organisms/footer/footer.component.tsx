import Link from 'next/link'
import React, { FC } from 'react'
import { Flex, Grid, Heading, NavLink, Text } from 'theme-ui'

import { footerData } from './footer.config'
import { Container } from './footer.styles'

interface Props {
  version?: string
}

export const Footer: FC<Props> = ({ version }) => {
  return (
    <Container as="footer">
      <Grid variant="contained" columns={ [4, '2fr 1fr 1fr 1fr'] }>
        <Flex sx={ { flexDirection: 'column' } }>
          <NavLink href="/">
            <Heading as="h3" mb={ 3 }>Tomatoro</Heading>
          </NavLink>
          <Text variant="small">
            Unleash Productivity,
            <br/>
            One Tomatoro at a Time! 🍅🎯
          </Text>
        </Flex>

        { footerData.links.map((linkGroup) => (
          <Flex key={ linkGroup.title }
            sx={ { flexDirection: 'column', gap: 1 } }>
            <Heading as="h4" mb={ 3 }>{ linkGroup.title }</Heading>
            { linkGroup.items.map((item) => (
              <NavLink key={ item.name } as={ Link } href={ item.href }>
                <Text variant="small">{ item.name }</Text>
              </NavLink>
            )) }
          </Flex>
        )) }
      </Grid>
      <Grid variant="contained" columns={ 2 }>
        <Text variant="small" as="span">
          &copy; 2017-{ new Date().getFullYear() } Tomatoro. All Rights
          Reserved.
        </Text>

        { version && (
          <Text variant="small" sx={ { textAlign: 'right' } }>
            v{ version }
          </Text>
        ) }
      </Grid>
    </Container>
  )
}
