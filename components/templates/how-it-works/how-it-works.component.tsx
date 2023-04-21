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
  <Grid variant="contained" gap={ 5 }>
    <Heading as="h2" variant="text.title" sx={ { textAlign: 'center' } }>
      Looking to improve your productivity?
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
          <Heading as="h3">{ title }</Heading>
        </Box>
      )) }
    </Grid>

    <Box>
      <Paragraph mb={ 3 }>
        Give the Pomodoro technique a try! This method involves alternating
        periods of intense focus on work with
        brief, refreshing breaks to maximize efficiency and mental clarity.
      </Paragraph>
      <Paragraph mb={ 3 }>
        Here’s how it works: For every 25 minutes of dedicated work (also known
        as Tomatoros), reward yourself with a 5-minute break. After completing 3
        Tomatoros, treat yourself to a longer, 15-minute break to recharge.
        Then, simply repeat this cycle throughout your day!
      </Paragraph><Paragraph mb={ 3 }>
      By embracing the Pomodoro technique, you’ll maintain a steady workflow,
      keep distractions at bay, and make the most of your time. Start
      incorporating these productivity-enhancing intervals today!
      </Paragraph>
      <Paragraph mb={ 3 }>
        To boost your productivity use the Pomodoro technique. Just alternate
        cycles of hyper-focus on work with short
        breaks of relaxation.
      </Paragraph>
      <Paragraph>
        For each 25 mins of work or Tomatoros, take a 5 mins break. After
        completing 3 Tomatoros, take a longer 15 mins
        break. Repeat this cycle!
      </Paragraph>
    </Box>

    <Box mx="auto">
      <Link href={ LINKS.HOW_IT_WORKS } target="_blank">Read more about this
        technique</Link>
    </Box>
  </Grid>
)
