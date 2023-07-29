import { ChangeEvent, FC } from 'react'
import { Flex, Switch } from 'theme-ui'

import { useSettingsStore } from '~/stores/settings'

export const ThemeSelector: FC = () => {
  const { setThemePreference } = useSettingsStore()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target as HTMLInputElement
    const themeMode = checked ? 'light' : 'dark'
    console.log(themeMode)
    setThemePreference(themeMode)
  }

  return (
    <Flex sx={ { gap: '1em', alignSelf: 'flex-end' } }>
      <Switch onChange={handleChange} sx={{
        backgroundColor: '#063970',
      }} />
    </Flex>
  )
}
