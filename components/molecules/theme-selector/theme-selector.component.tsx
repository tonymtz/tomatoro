import { ChangeEvent, FC } from 'react'
import { Flex, IconButton, Switch, Image } from 'theme-ui'
//import { useLocalStorage } from 'usehooks-ts'
import { useSettingsStore } from '~/stores/settings'

export const ThemeSelector: FC = () => {
  const { setThemePreference } = useSettingsStore();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target as HTMLInputElement
    const themeMode = checked  ? 'light' : 'dark'
    console.log(themeMode)
    setThemePreference(themeMode)
  }

  return (
    <Flex sx={ { gap: '1em', flexDirection: 'flex-end' } }>
      <Switch onChange={handleChange} sx={{
        backgroundColor: '#063970',
      }} />
    </Flex>
  )
}
