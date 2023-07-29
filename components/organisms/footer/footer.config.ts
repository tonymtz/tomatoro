import { LINKS } from '~/utils/config'

interface FooterLink {
  key: string
  href: string
}

const siteItems: FooterLink[] = [
  { key: 'news', href: LINKS.NEWS },
  { key: 'terms', href: LINKS.TERMS },
  { key: 'privacy', href: LINKS.PRIVACY },
  { key: 'github', href: LINKS.GITHUB },
]

const supportItems: FooterLink[] = [
  { key: 'faq', href: LINKS.FAQ },
  { key: 'status', href: LINKS.STATUS },
  { key: 'contact', href: LINKS.CONTACT },
]

const toolItems: FooterLink[] = [
  { key: 'mitrabajo', href: LINKS.MITRABAJO },
  { key: 'dolar', href: LINKS.DOLAR },
  { key: 'clipps', href: LINKS.CLIPPS },
  { key: 'gatolinero', href: LINKS.GATOLINERO },
]

export const footerData = {
  links: [
    { key: 'site', items: siteItems },
    { key: 'support', items: supportItems },
    { key: 'moreTools', items: toolItems },
  ],
  currentYear: new Date().getFullYear(),
}
