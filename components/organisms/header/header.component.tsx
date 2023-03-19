import Link from 'next/link'
import { Box, Flex, Heading, NavLink } from 'theme-ui'

import { Container } from './header.styles'

const menuItems = [
  { name: 'How it works', href: '#' },
  { name: 'Contact', href: '#' },
]

export const Header = () => {
  return (
    <Container as='header'>
      <Box>
        <Heading>Tomatoro</Heading>
      </Box>
      <Flex sx={ {
        gap: 3,
      } }>
        { menuItems.map((item) => (
          <NavLink key={ item.name } as={ Link } href={ item.href }>
            { item.name }
          </NavLink>
        )) }
      </Flex>
    </Container>
  )
}
