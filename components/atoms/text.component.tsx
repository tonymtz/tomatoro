import styled from '@emotion/styled'
import { Merriweather } from 'next/font/google'

const inter = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const Text = styled.span`
  ${inter.style}
`
