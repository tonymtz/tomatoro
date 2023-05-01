import Image from 'next/image'
import Link from 'next/link'
import { Grid, NavLink, Text } from 'theme-ui'

import logoTomatoro from '~/public/svg/logo-tomatoro.svg'
import { LINKS } from '~/utils/config'

import { Container, Heading, Nav } from './header.styles'

const menuItems = [
  { name: 'How it works', href: LINKS.HOW_IT_WORKS },
  { name: 'Contact', href: LINKS.CONTACT },
]

export const Header = () => {
  return (
    <Container as="header">
      <Grid variant="contained" columns={ 2 } sx={ { alignItems: 'center' } }>
        <Link href="/" title="Go to Tomatoro Home">
          <Image
            src={ logoTomatoro }
            alt="Tomatoro's logo"
            width={ 150 }
            height={ 30 }
            aria-hidden
          />
          <Heading as="h1">Tomatoro</Heading>
        </Link>
        <Nav as="nav">
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
