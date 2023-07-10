import { rgba } from 'polished'
import type { Theme } from 'theme-ui'

import { defaultTheme } from './default.theme'

export const darkTheme: Theme = {
  ...defaultTheme,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  text: {
    default: {
      color: '#fff',
    },
    title: {
      color: '#fff',
    },
    display: {
      color: '#fff',
      fontFamily: 'monospace',
      fontSize: '5em',
      fontWeight: 'bold',
    },
    paragraph: {
      color: '#fff',
    },
    headers: {
      color: '#fff',
    },
  },
  colors: {
    text: '#fff',
    contrastText: '#fff',
    textHighEmphasis: rgba('#fff', 0.87),
    textMediumEmphasis: rgba('#fff', 0.6),
    textLowEmphasis: rgba('#fff', 0.38),
    background: '#2f2d2d',
    primary: '#ee6b33',
  },
}
