import { PAGES } from '~/utils/config'

export function getAllStaticPages () {
  return Object.keys(PAGES).map((key) => ({
    slug: PAGES[key as keyof typeof PAGES],
  }))
}
