import React, { FC, useState } from 'react'
import { Flex, Grid, Heading, Label, Slider, Switch } from 'theme-ui'

import { Modal } from '~/components/organisms/modal'

import { Badge } from './settings.styles'

interface SettingsState {
  workLength: number
  shortLength: number
  longLength: number
  showTimer: boolean
  showNotifications: boolean
  playSound: boolean
}

interface Props {
  children?: ((setToggled: () => void) => void)
}

export const Settings: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState(25)
  const [settings, setSettings] = useState<SettingsState>()

  const openModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <>
      { children?.(() => setShowModal(true)) }
      <Modal isToggled={ showModal } setToggled={ openModal }>
        <Heading as='h2' variant='text.title' sx={ { textAlign: 'center' } }>
          Settings
        </Heading>

        <Grid sx={ { gap: 3, my: 4, width: '100%' } }>

          <Flex sx={ { flexDirection: 'column' } }>
            <Label>Work session length:</Label>
            <Flex sx={ { gap: 4, mt: 2 } }>
              <Slider
                min={ 1 }
                max={ 60 }
                defaultValue={ settings?.workLength }
                onChange={ (e) => setValue(Number(e.target.value)) }
              />
              <Badge>{ value } min</Badge>
            </Flex>
          </Flex>

          <Label>Short break length:</Label>
          <Flex sx={ { gap: 4 } }>
            <Slider
              min={ 1 }
              max={ 60 }
              defaultValue={ 25 }
              onChange={ (e) => setValue(Number(e.target.value)) }
            />
            <Badge>{ value } min</Badge>
          </Flex>
          <Label>Long break length:</Label>
          <Flex sx={ { gap: 4 } }>
            <Slider
              min={ 1 }
              max={ 60 }
              defaultValue={ 25 }
              onChange={ (e) => setValue(Number(e.target.value)) }
            />
            <Badge>{ value } min</Badge>
          </Flex>
          <Switch label="Show timer on title"/>
          <Switch label="Show notification when timer ends"/>
          <Switch label="Play a sound when timer ends"/>
        </Grid>
      </Modal>
    </>
  )
}
