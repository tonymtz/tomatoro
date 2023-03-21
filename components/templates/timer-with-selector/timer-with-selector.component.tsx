import { FC } from 'react'
import { Grid } from 'theme-ui'

import { Timer } from '~/components/organisms/timer'
import { TimeSelector } from '~/components/organisms/timer-selector'

export const TimerWithSelector: FC = () => (
  <Grid variant='contained' gap={ 3 } sx={ { justifyContent: 'center' } }>
    <TimeSelector/>
    <Timer/>
  </Grid>
)
