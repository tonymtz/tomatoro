import React, { FC, useState } from 'react'
import {
  Button, Divider,
  Flex,
  Grid,
  Heading,
  Label,
  Paragraph,
  Slider,
  Switch,
} from 'theme-ui'

import { Modal } from '~/components/organisms/modal'
import { useTimerContext } from '~/contexts/timer'
import { useSettingsStore } from '~/stores/settings'

import { Badge } from './settings.styles'

interface Props {
  children?: ((setToggled: () => void) => void)
}

export const Settings: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const { onResetTimer, onStopTimer } = useTimerContext()
  const {
    longLength,
    resetSetting,
    shortLength,
    showNotifications,
    showTimer,
    updateAppSetting,
    updateTimerSetting,
    workLength,
  } = useSettingsStore()

  const toggleModal = () => {
    onStopTimer()
    setShowModal(prevState => !prevState)
  }

  const onAppSettingChange = (field: 'showTimer' | 'showNotifications' | 'playSound', value: unknown) => {
    updateAppSetting({ [field]: value })
    onResetTimer()
  }

  const onTimeSettingChange = (field: 'workLength' | 'shortLength' | 'longLength', value: number) => {
    updateTimerSetting({
      [field]: value * 60,
    })
  }

  return (
    <>
      { children?.(toggleModal) }
      <Modal show={ showModal } setToggled={ toggleModal }>
        <Flex sx={ { flexDirection: 'column', gap: 2 } }>
          <Heading as="h2" variant="text.title"
            sx={ { textAlign: 'center' } }>
            Settings
          </Heading>

          <Paragraph>Customize your Tomatoro.</Paragraph>
        </Flex>
        <Grid sx={ { gap: 3, my: 4, width: '100%' } }>
          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Work session length:</Label>
            <Flex sx={ { gap: 4, mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 60 }
                value={ workLength / 60 }
                onChange={ (e) => onTimeSettingChange('workLength', Number(e.target.value)) }
              />
              <Badge>{ workLength / 60 } min</Badge>
            </Flex>
          </Flex>

          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Short break length:</Label>
            <Flex sx={ { gap: 4, mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 15 }
                value={ shortLength / 60 }
                onChange={ (e) => onTimeSettingChange('shortLength', Number(e.target.value)) }
              />
              <Badge>{ shortLength / 60 } min</Badge>
            </Flex>
          </Flex>

          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Long break length:</Label>
            <Flex sx={ { gap: 4, mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 30 }
                value={ longLength / 60 }
                onChange={ (e) => onTimeSettingChange('longLength', Number(e.target.value)) }
              />
              <Badge>{ longLength / 60 } min</Badge>
            </Flex>
          </Flex>

          <Switch
            label="Show timer on title"
            checked={ showTimer }
            onChange={ (e) => onAppSettingChange('showTimer', e.target.checked) }
          />

          <Switch
            label="Show notification when timer ends"
            checked={ showNotifications }
            onChange={ (e) =>
              onAppSettingChange('showNotifications', e.target.checked) }
          />

          <Divider sx={ { my: 1, width: '100%' } }/>

          <Flex sx={ { gap: 3 } }>
            <Button onClick={ resetSetting }>Reset settings</Button>
            <Button onClick={ toggleModal }>Close</Button>
          </Flex>
        </Grid>
      </Modal>
    </>
  )
}
