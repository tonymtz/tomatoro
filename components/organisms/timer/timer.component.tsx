import { FC } from 'react'
import { Flex, Text } from 'theme-ui'

import { useTimerContext } from '~/contexts/timer'
import { useTimerStore } from '~/stores/time'
import { formatTime } from '~/utils/timer.utils'

import { Button, Controls, Donut } from './timer.styles'

export const Timer: FC = () => {
  const { onResetTimer, onStartTimer, onStopTimer } = useTimerContext()
  const { isRunning, isStarted, time, totalTime } = useTimerStore()

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
    <Flex sx={ {
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1em',
      height: 400,
      justifyContent: 'center',
      maxWidth: 768,
      position: 'relative',
      width: ['calc(100vw - 2rem)', 'auto'],
    } }>
      <Text variant="display">
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
        strokeWidth={ 1 }
        size={ '100%' }
        title={ `Progress made: ${ time / totalTime * 100 }%` }
        value={ time / totalTime }
        role="progressbar"
      />
    </Flex>
  )
}
