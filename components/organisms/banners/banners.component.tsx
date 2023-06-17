import React, { FC } from 'react'
import { Alert } from 'theme-ui'
import { useLocalStorage } from 'usehooks-ts'

import { RichTextRenderer } from '~/components/organisms/rich-text-renderer'

import { Close, Frame } from './banners.styles'

interface Props {
  banners: Banner[]
}

interface SeenBanners {
  [key: string]: boolean
}

export const Banners: FC<Props> = ({ banners }) => {
  const [seenBanners, setSeenBanners] = useLocalStorage('seen-banners', {} as SeenBanners)

  const handleBannerClose = (bannerId: Banner['id']) => {
    setSeenBanners({
      ...seenBanners,
      [bannerId]: true,
    })
  }

  return banners && banners.length ? (
    <Frame>
      { banners.map(banner => (
        !seenBanners[banner.id] && (
          <Alert key={ banner.id }>
            <RichTextRenderer
              content={ banner.attributes.content }
              overrides={ {
                a: {
                  borderWidth: 2,
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
            <Close onClick={ () => handleBannerClose(banner.id) }/>
          </Alert>
        )
      )) }
    </Frame>
  ) : null
}
