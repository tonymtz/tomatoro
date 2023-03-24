import React, { FC, useState } from 'react'
import { Flex, Grid, Heading, Label, Paragraph, Slider, Switch } from 'theme-ui'

import { Modal } from '~/components/organisms/modal'
import { SettingsStaticContext } from '~/contexts/settings/notifications-context.types'
import { useSettingsContext } from '~/contexts/settings/settings-context.provider'

import { Badge } from './settings.styles'

interface Props {
  children?: ((setToggled: () => void) => void)
}

export const Settings: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const {
    longLength,
    shortLength,
    workLength,
    showNotifications,
    showTimer,
    playSound,
    updateSettings,
  } = useSettingsContext()

  const openModal = () => {
    setShowModal(prevState => !prevState)
  }

  const onChange = (field: keyof SettingsStaticContext, value: unknown) => {
    updateSettings({ [field]: value })
  }

  return (
    <>
      { children?.(() => setShowModal(true)) }
      <Modal isToggled={ showModal } setToggled={ openModal }>
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
                defaultValue={ workLength }
                onChange={ (e) => onChange('workLength', Number(e.target.value)) }
              />
              <Badge>{ workLength } min</Badge>
            </Flex>
          </Flex>

          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Short break length:</Label>
            <Flex sx={ { gap: 4, mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 15 }
                defaultValue={ shortLength }
                onChange={ (e) => onChange('shortLength', Number(e.target.value)) }
              />
              <Badge>{ shortLength } min</Badge>
            </Flex>
          </Flex>

          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Long break length:</Label>
            <Flex sx={ { gap: 4,mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 30 }
                defaultValue={ longLength }
                onChange={ (e) => onChange('longLength', Number(e.target.value)) }
              />
              <Badge>{ longLength } min</Badge>
            </Flex>
          </Flex>

          <Switch
            label="Show timer on title"
            defaultChecked={ showNotifications }
            onChange={ (e) => onChange('showNotifications', e.target.checked) }
          />

          <Switch
            label="Show notification when timer ends"
            defaultChecked={ showTimer }
            onChange={ (e) => onChange('showTimer', e.target.checked) }
          />

          <Switch
            label="Play a sound when timer ends"
            defaultChecked={ playSound }
            onChange={ (e) => onChange('playSound', e.target.checked) }
          />
        </Grid>
      </Modal>
    </>
  )
}
