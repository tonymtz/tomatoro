interface FooterLink {
  name: string
  href: string
}

const siteItems: FooterLink[] = [
  { name: 'Terms of service', href: '#' },
  { name: 'Privacy notice', href: '#' },
  { name: 'Github', href: '#' },
]

const supportItems: FooterLink[] = [
  { name: 'FAQ', href: '#' },
  { name: 'Status', href: '#' },
  { name: 'Email', href: '#' },
]

const toolItems: FooterLink[] = [
  { name: 'Tomatoro', href: '#' },
  { name: 'Dolar en Bancos', href: '#' },
  { name: 'Clipps', href: '#' },
  { name: 'Songbox', href: '#' },
]

export const footerData = {
  links: [
    { title: 'Site', items: siteItems },
    { title: 'Support', items: supportItems },
    { title: 'Tools', items: toolItems },
  ],
}
