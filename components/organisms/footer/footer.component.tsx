import Link from "next/link";
import { H1 } from "~/components/atoms/heading";
import { Container, Half, Heading, Row, Third } from "./footer.styles";

const menuItems = [
  { name: 'How it works', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'SoftwareDevTools', href: '#' },
];

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Third>
          <img src="https://placehold.co/100x40.png" alt=""/>
          <img src="https://placehold.co/100x40.png" alt=""/>
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
  );
}
