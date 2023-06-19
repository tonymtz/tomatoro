import Link from 'next/link'
import React, { FC } from 'react'
import { Flex, Heading, NavLink, Text } from 'theme-ui'

import { footerData } from './footer.config'
import { Container, section, Section } from './footer.styles'

interface Props {
  version?: string
}

export const Footer: FC<Props> = ({ version }) => {
  return (
    <Container as="footer">
      <Flex sx={ section }>
        <Section>
          <NavLink href="/">
            <Heading as="h3">Tomatoro</Heading>
          </NavLink>
          <Text variant="small">
            Unleash Productivity,
            <br/>
            One Tomatoro at a Time! 🍅🎯
          </Text>
        </Section>

        { footerData.links.map((linkGroup) => (
          <Section key={ linkGroup.title }>
            <Heading as="h4">{ linkGroup.title }</Heading>
            { linkGroup.items.map((item) => (
              <NavLink key={ item.name } as={ Link } href={ item.href } variant="footer">
                <Text variant="small">{ item.name }</Text>
              </NavLink>
            )) }
          </Section>
        )) }
      </Flex>
      <Flex sx={ section }>
        <Text variant="small" as="span">
          &copy; 2017-{ new Date().getFullYear() } Tomatoro. All Rights
          Reserved.
        </Text>

        { version && (
          <Text variant="small" sx={ { textAlign: ['left', 'right'] } }>
            v{ version }
          </Text>
        ) }
      </Flex>
    </Container>
  )
}
