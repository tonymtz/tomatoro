import React, { FC, useState } from 'react'
import { Flex, Grid, Heading, Label, Paragraph, Slider, Switch } from 'theme-ui'

import { Modal } from '~/components/organisms/modal'
import { useTimerContext } from '~/contexts/timer'
import { SettingsStore, useSettingsStore } from '~/stores/settings'

import { Badge } from './settings.styles'

interface Props {
  children?: ((setToggled: () => void) => void)
}

export const Settings: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const { onResetTimer, onStopTimer } = useTimerContext()
  const {
    longLength,
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

  const onTimeSettingChange = (field: keyof SettingsStore, value: number) => {
    updateTimerSetting({
      [field]: value * 60,
    })
  }

  return (
    <>
      { children?.(toggleModal) }
      <Modal isToggled={ showModal } setToggled={ toggleModal }>
        <Heading as='h2' variant='text.title' sx={ { textAlign: 'center' } }>
          Settings
        </Heading>

        <Paragraph>Customize your Tomatoro.</Paragraph>

        <Grid sx={ { gap: 3, my: 4, width: '100%' } }>

          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Work session length:</Label>
            <Flex sx={ { gap: 4, mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 60 }
                defaultValue={ workLength / 60 }
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
                defaultValue={ shortLength / 60 }
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
                defaultValue={ longLength / 60 }
                onChange={ (e) => onTimeSettingChange('longLength', Number(e.target.value)) }
              />
              <Badge>{ longLength / 60 } min</Badge>
            </Flex>
          </Flex>

          <Switch
            label="Show timer on title"
            defaultChecked={ showTimer }
            onChange={ (e) => onAppSettingChange('showTimer', e.target.checked) }
          />

          <Switch
            label="Show notification when timer ends"
            defaultChecked={ showNotifications }
            onChange={ (e) => onAppSettingChange('showNotifications', e.target.checked) }
          />
        </Grid>
      </Modal>
    </>
  )
}
