import Link from 'next/link'

import { H1 } from '~/components/atoms/heading'

import { Container, InlineList } from './header.styles'

const menuItems = [
  { name: 'How it works', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'SoftwareDevTools', href: '#' },
]

export const Header = () => {
  return (
    <Container>
      <Link href='/'>
        <H1>Tomatoro</H1>
      </Link>
      <nav>
        <InlineList>
          { menuItems.map((item) => (
            <li key={ item.name }>
              <a href={ item.href }>{ item.name }</a>
            </li>
          )) }
        </InlineList>
      </nav>
    </Container>
  )
}
