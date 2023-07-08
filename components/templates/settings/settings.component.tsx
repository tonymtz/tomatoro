import useTranslation from 'next-translate/useTranslation'
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

import { LanguageSelector } from '~/components/molecules/language-selector'
import { Modal } from '~/components/organisms/modal'
import { useTimerContext } from '~/contexts/timer'
import { useSettingsStore } from '~/stores/settings'
import { track } from '~/utils/tracking.utils'

import { Badge } from './settings.styles'

interface Props {
  children?: ((setToggled: () => void) => void)
}

export const Settings: FC<Props> = ({ children }) => {
  const { t } = useTranslation('home')
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
    setShowModal(prevState => {
      prevState ? track('$settings_closed') : track('$settings_opened')
      return !prevState
    })
  }

  const onAppSettingChange = (field: 'showTimer' | 'showNotifications' | 'playSound', value: unknown) => {
    updateAppSetting({ [field]: value })
    onResetTimer()
    track('$settings_changed', { field, value })
  }

  const onTimeSettingChange = (field: 'workLength' | 'shortLength' | 'longLength', value: number) => {
    updateTimerSetting({
      [field]: value * 60,
    })
    track('$timer_changed', { field, value })
  }

  return (
    <>
      { children?.(toggleModal) }
      <Modal show={ showModal } setToggled={ toggleModal }>
        <Flex sx={ { alignItems: 'center', flexDirection: 'column', gap: 2 } }>
          <Heading as="h2" variant="text.title" sx={ { textAlign: 'center' } }>
            { t('settings.title') }
          </Heading>

          <Paragraph>{ t('settings.subtitle') }</Paragraph>
        </Flex>
        <Grid sx={ { gap: 3, my: 4, width: '100%' } }>
          <Flex sx={ { flexDirection: 'column' } }>
            <Label>{ t('settings.work') }</Label>
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
            <Label>{ t('settings.short') }</Label>
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
            <Label>{ t('settings.long') }</Label>
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
            label={ t('settings.timerOnTitle') }
            checked={ showTimer }
            onChange={ (e) => onAppSettingChange('showTimer', e.target.checked) }
          />

          <Switch
            label={ t('settings.showNotifications') }
            checked={ showNotifications }
            onChange={ (e) =>
              onAppSettingChange('showNotifications', e.target.checked) }
          />

          <Flex sx={ { alignItems: 'center', gap: 3 } }>
            <Label sx={ { width: 'auto' } }>{ t('settings.language') }</Label>
            <LanguageSelector/>
          </Flex>

          <Divider sx={ { my: 1, width: '100%' } }/>

          <Flex sx={ { gap: 3 } }>
            <Button onClick={ resetSetting }>{ t('settings.cta.reset') }</Button>
            <Button onClick={ toggleModal }>{ t('settings.cta.close') }</Button>
          </Flex>
        </Grid>
      </Modal>
    </>
  )
}
