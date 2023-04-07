import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Grid } from 'theme-ui'

import { Timer } from '~/components/organisms/timer'
import { TimeSelectorSkeleton } from '~/components/organisms/timer-selector'

const DynamicTimeSelector = dynamic(
  () => import('~/components/organisms/timer-selector')
    .then(mod => mod.TimeSelector),
  {
    ssr: false,
    loading: () => <TimeSelectorSkeleton/>,
  },
)

export const TimerWithSelector: FC = () => (
  <Grid variant="contained" gap={ 3 } sx={ { justifyContent: 'center' } }>
    <DynamicTimeSelector/>
    <Timer/>
  </Grid>
)
