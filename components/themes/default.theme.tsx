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
    caption: {
      fontSize: '0.8em',
    },
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#f55e3c',
  },
  buttons: {
    primary: {
      color: 'white',
      '&:disabled': {
        opacity: 0.5,
      },
    },
    yellow: {
      backgroundColor: '#eab440',
    },
    green: {
      backgroundColor: '#81ab6a',
    },
  },
  messages: {
    warn: {
      backgroundColor: '#fffced',
      borderColor: '#d98b6c',
    },
  },
}
