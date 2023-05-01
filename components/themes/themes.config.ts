import type { Theme } from 'theme-ui'

import { darkTheme } from './dark.theme'
import { defaultTheme } from './default.theme'

type ThemeKey = 'light' | 'dark'

const availableThemes: Record<ThemeKey, Theme> = {
  light: defaultTheme,
  dark: darkTheme,
}

export const getTheme = (themeKey: string): Theme => {
  return themeKey in availableThemes
    ? availableThemes[themeKey as ThemeKey]
    : defaultTheme
}

