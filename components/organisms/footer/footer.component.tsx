import Image from 'next/image'

import { Container, Half, Heading, Row, Third } from './footer.styles'

const menuItems = [
  { name: 'How it works', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'SoftwareDevTools', href: '#' },
]

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Third>
          <Image
            alt="placeholder"
            height={40}
            src="https://placehold.co/100x40.png"
            width={100}
          />
        </Third>
        <Half>
          <Heading>Tools</Heading>
        </Half>
        <Third>
          <Heading>Get in touch</Heading>
        </Third>
      </Row>
      <Row>
        <Heading>Tools</Heading>
      </Row>
      <Row>
        <Heading>Get in touch</Heading>
      </Row>
    </Container>
  )
}
