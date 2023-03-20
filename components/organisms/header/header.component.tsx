import Link from 'next/link'
import { Grid, Heading, NavLink, Text } from 'theme-ui'

import { Container, Nav } from './header.styles'

const menuItems = [
  { name: 'How it works', href: '#' },
  { name: 'Contact', href: '#' },
]

export const Header = () => {
  return (
    <Container as='header'>
      <Grid variant='contained' columns={ 2 } sx={ { alignItems: 'center' } }>
        <Heading>Tomatoro</Heading>
        <Nav as='nav'>
          { menuItems.map((item) => (
            <NavLink key={ item.name } as={ Link } href={ item.href }>
              <Text>
                { item.name }
              </Text>
            </NavLink>
          )) }
        </Nav>
      </Grid>
    </Container>
  )
}
