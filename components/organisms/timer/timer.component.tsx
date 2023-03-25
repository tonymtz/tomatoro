import { FC } from 'react'
import { Text } from 'theme-ui'

import { useTimerContext } from '~/contexts/timer'
import { useComposedStore } from '~/store'
import { formatTime } from '~/utils/timer.utils'

import { Button, Container, Controls, Donut } from './timer.styles'

export const Timer: FC = () => {
  const { onStartTimer, onStopTimer, onResetTimer } = useTimerContext()
  const { time, totalTime, isRunning, isStarted } = useComposedStore()

  const onToggleClick = () => {
    if (!isStarted) {
      onStartTimer()
    } else if (isRunning) {
      onStopTimer()
    } else {
      onStartTimer()
    }
  }

  const onStopClick = () => {
    onResetTimer()
  }

  return (
    <Container sx={ { height: 400 } }>
      <Text variant='display'>
        { formatTime(time) }
      </Text>
      <Controls>
        <Button
          onClick={ onStopClick }
          disabled={ !isStarted }
        >
          Done
        </Button>
        <Button
          onClick={ onToggleClick }
          bg={ isRunning ? 'yellow' : 'green' }
        >
          { isRunning ? 'Pause' : 'Start' }
        </Button>
      </Controls>
      <Donut
        strokeWidth={ 2 / 2 }
        size={ 400 }
        title='progress made'
        value={ time / totalTime }
      />
    </Container>
  )
}
