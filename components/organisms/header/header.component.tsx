import Image from 'next/image'
import Link from 'next/link'
import { Grid, NavLink, Text } from 'theme-ui'

import logoTomatoro from '~/public/svg/logo-tomatoro.svg'

import { Container, Nav } from './header.styles'

const menuItems = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Contact', href: '#get-in-touch' },
]

export const Header = () => {
  return (
    <Container as='header'>
      <Grid variant='contained' columns={ 2 } sx={ { alignItems: 'center' } }>
        <Link href='/'>
          <Image
            src={ logoTomatoro }
            alt="Tomatoro's logo"
            width={ 150 }
            height={ 30 }
          />
        </Link>
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
