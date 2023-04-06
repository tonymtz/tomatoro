import Image from 'next/image'
import { FC } from 'react'
import { Box, Grid, Heading, Link, Paragraph } from 'theme-ui'

import graphicRepeat from '~/public/svg/graphic-repeat.svg'
import graphicSetTime from '~/public/svg/graphic-set-time.svg'
import graphicTakeBreak from '~/public/svg/graphic-take-break.svg'
import { LINKS } from '~/utils/config'

const sections = [
  { title: 'Set the Time', graphic: graphicSetTime },
  { title: 'Take a Break', graphic: graphicTakeBreak },
  { title: 'Repeat', graphic: graphicRepeat },
]

export const HowItWorks: FC = () => (
  <Grid variant='contained' gap={ 5 }>
    <Heading as='h2' variant='text.title' sx={ { textAlign: 'center' } }>
      How to be more productive
    </Heading>

    <Grid columns={ 3 }>
      { sections.map(({ graphic, title }) => (
        <Box key={ title } sx={ { textAlign: 'center' } }>
          <Image
            src={ graphic }
            alt="Set the time"
            width={ 150 }
            height={ 150 }
          />
          <Heading as='h3'>{ title }</Heading>
        </Box>
      )) }
    </Grid>

    <Box>
      <Paragraph mb={ 3 }>
        To boost your productivity use the Pomodoro technique. Just alternate cycles of hyper-focus on work with short
        breaks of relaxation.
      </Paragraph>
      <Paragraph>
        For each 25 mins of work or Tomatoros, take a 5 mins break. After completing 3 Tomatoros, take a longer 15 mins
        break. Repeat this cycle!
      </Paragraph>
    </Box>

    <Box mx='auto'>
      <Link href={ LINKS.HOW_IT_WORKS } target='_blank'>Read more about this technique</Link>
    </Box>
  </Grid>
)
