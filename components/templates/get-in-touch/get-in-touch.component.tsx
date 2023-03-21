import { FC } from 'react'
import { Box, Grid, Heading, Link, Paragraph } from 'theme-ui'

import { LINKS } from '~/utils/config'

export const GetInTouch: FC = () => (
  <Grid variant='contained' gap={ 5 }>
    <Heading as='h2' variant='text.title' sx={ { textAlign: 'center' } }>
      Get in touch
    </Heading>

    <Box>
      <Paragraph mb={ 3 }>
        Tomatoro is an open source code project. You may play around with the code source and apply it for your own
        projects.
      </Paragraph>
    </Box>

    <Box sx={ { textAlign: 'center' } }>
      <p><Link href={ LINKS.GITHUB } target='_blank'>Github</Link></p>
      <p><Link href={ LINKS.FEEDBACK } target='_blank'>Leave your feedback</Link></p>
    </Box>
  </Grid>
)
