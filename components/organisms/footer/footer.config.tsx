import { LINKS } from '~/utils/config'

interface FooterLink {
  name: string
  href: string
}

const siteItems: FooterLink[] = [
  { name: 'Terms of service', href: LINKS.TERMS },
  { name: 'Privacy notice', href: LINKS.PRIVACY },
  { name: 'Github', href: LINKS.GITHUB },
]

const supportItems: FooterLink[] = [
  { name: 'FAQ', href: LINKS.FAQ },
  { name: 'Status', href: LINKS.STATUS },
  { name: 'Email', href: LINKS.SUPPORT },
]

const toolItems: FooterLink[] = [
  { name: 'Tomatoro', href: LINKS.TOMATORO },
  { name: 'Dolar en Bancos', href: LINKS.DOLAR },
  { name: 'Clipps', href: LINKS.CLIPPS },
  { name: 'Songbox', href: LINKS.SONGBOX },
]

export const footerData = {
  links: [
    { title: 'Site', items: siteItems },
    { title: 'Support', items: supportItems },
    { title: 'Tools', items: toolItems },
  ],
}
