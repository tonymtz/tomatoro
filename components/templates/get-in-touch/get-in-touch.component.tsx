import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import { Box, Grid, Heading, Link, Paragraph } from 'theme-ui'

import { LINKS } from '~/utils/config'

export const GetInTouch: FC = () => {
  const { t } = useTranslation('home')

  return (
    <Grid variant="contained" gap={ 5 }>
      <Heading as="h2" variant="text.title" sx={ { textAlign: 'center' } }>
        { t('getInTouch.title') }
      </Heading>

      <Box>
        <Paragraph mb={ 3 }>
          { t('getInTouch.content') }
        </Paragraph>
      </Box>

      <Box sx={ { textAlign: 'center' } }>
        <p><Link href={ LINKS.GITHUB } target="_blank">Github</Link></p>
        <p><Link href={ LINKS.FEEDBACK } target="_blank">
          { t('getInTouch.cta') }
        </Link></p>
      </Box>
    </Grid>
  )
}
