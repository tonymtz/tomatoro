import type { Theme } from 'theme-ui'

export const defaultTheme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  text: {
    default: {
      fontFamily: 'body',
    },
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}
