import styled from '@emotion/styled'
import useTranslation from 'next-translate/useTranslation'
import React, { FC } from 'react'
import { Flex } from 'theme-ui'

import { RichTextRenderer } from '~/components/organisms/rich-text-renderer'

const stableLink = 'https://tomatoro.com?utm_source=banner&utm_medium=link&utm_campaign=unstable'
// eslint-disable-next-line max-len
const learnMoreLink = '/post/exploring-the-unstable-branch-of-tomatoro?utm_source=banner&utm_medium=link&utm_campaign=unstable'

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

export const UnstableWarning: FC = () => {
  const { t } = useTranslation('common')
  const warning = t('unstableWarning', {
    stableLink,
    learnMoreLink,
  })

  return (
    <Frame sx={ {
      flexDirection: ['column', 'row'],
    } }>
      <RichTextRenderer
        content={ warning }
        overrides={ {
          a: {
            color: 'contrastText',
            '&:hover, &:focus, &:active': {
              color: 'primary',
              backgroundColor: 'white',
            },
          },
          p: {
            color: 'contrastText',
          },
        } }
      />
    </Frame>
  )
}
