import styled from '@emotion/styled'
import Link from 'next/link'
import React, { FC } from 'react'
import { Flex, Link as TuiLink, Paragraph } from 'theme-ui'

const stable = 'https://tomatoro.com'
const learn = '/post/exploring-the-unstable-branch-of-tomatoro?utm_source=banner&utm_medium=link&utm_campaign=unstable'

const Frame = styled(Flex)`
  align-items: center;
  background-color: #333;
  gap: 0.5em;
  justify-content: center;
  padding: 1em 1em;
  text-align: center;

  a {
    color: #fff;
  }
`

export const UnstableWarning: FC = () => (
  <Frame>
    <Paragraph variant="invertedParagraph">⚠️ This is an unstable version.</Paragraph>
    <TuiLink as={ Link } href={ stable }>Click here to go back to the stable version</TuiLink>
    <Paragraph variant="invertedParagraph">or</Paragraph>
    <TuiLink as={ Link } href={ learn }>learn more.</TuiLink>
  </Frame>
)
