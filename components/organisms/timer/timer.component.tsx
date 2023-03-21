import { FC } from 'react'
import { Text } from 'theme-ui'

import { useTimerContext } from '~/contexts/timer'
import { formatTime } from '~/utils/timer.utils'

import { Button, Container, Controls, Donut } from './timer.styles'

export const Timer: FC = () => {
  const { state, startTimer, stopTimer, resetTimer } = useTimerContext()

  const onToggleClick = () => {
    if (!state.isStarted) {
      startTimer()
    }
    if (state.isRunning) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  const onStopClick = () => {
    resetTimer()
  }

  return (
    <Container sx={ { height: 400 } }>
      <Text variant='display'>
        { formatTime(state.time) }
      </Text>
      <Controls>
        <Button
          onClick={ onStopClick }
          disabled={ !state.isStarted }
        >
          Done
        </Button>
        <Button
          onClick={ onToggleClick }
          bg={ state.isRunning ? 'yellow' : 'green' }
        >
          { state.isRunning ? 'Pause' : 'Start' }
        </Button>
      </Controls>
      <Donut
        strokeWidth={ 2 / 2 }
        size={ 400 }
        title='progress made'
        value={ state.time / state.totalTime }
      />
    </Container>
  )
}
