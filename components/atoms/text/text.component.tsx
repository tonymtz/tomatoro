import styled from '@emotion/styled'
import { Merriweather } from 'next/font/google'
import { Text as _Text } from 'theme-ui'

const inter = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const Text = styled(_Text)`
  ${inter.style}
`
