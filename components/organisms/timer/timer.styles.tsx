import styled from '@emotion/styled'
import { IBM_Plex_Mono } from 'next/font/google'
import { Button as _Button, Flex } from 'theme-ui'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const Container = styled(Flex)`
  align-items: center;
  flex-direction: column;
  gap: 1em;
`

export const Display = styled.h1`
  ${ibmPlexMono.style}
  font-size: 5em;
  margin: 0;
`

export const Controls = styled(Flex)`
  gap: 1em;
`

export const Button = styled(_Button)`
  width: 100px;
`
