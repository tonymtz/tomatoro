import { darken } from '@theme-ui/color'
import { IBM_Plex_Mono, Open_Sans } from 'next/font/google'
import { rgba } from 'polished'
import type { Theme } from 'theme-ui'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
})

const maxWidth = '768px'

export const defaultTheme: Theme = {
  fonts: {
    body: openSans.style.fontFamily,
    heading: openSans.style.fontFamily,
    monospace: ibmPlexMono.style.fontFamily,
  },
  text: {
    default: {
      fontFamily: 'body',
    },
    heading: {
      marginBottom: '0.5em',
    },
    small: {
      fontSize: '0.8em',
      fontFamily: 'body',
    },
    display: {
      fontFamily: 'monospace',
      fontSize: '5em',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '2em',
      fontFamily: 'heading',
    },
    paragraph: {
      color: 'textMediumEmphasis',
      textAlign: 'justify',
      lineHeight: '1.75em',
    },
    invertedParagraph: {
      color: 'contrastText',
      textAlign: 'justify',
      lineHeight: '1.75em',
    },
  },
  colors: {
    contrastText: '#fff',
    textHighEmphasis: rgba('#000', 0.87),
    textMediumEmphasis: rgba('#000', 0.6),
    textLowEmphasis: rgba('#000', 0.38),
    background: '#fff',
    primary: '#DA3B1B',
    yellow: '#eab440',
    green: '#647C46',
  },
  buttons: {
    primary: {
      color: 'white',
      fontFamily: 'body',
      transition: 'background-color 0.15s ease-in-out, opacity 0.15s ease-in-out',
      willChange: 'background-color, opacity',
      '&:hover, &:focus, &:active': {
        bg: darken('primary', 0.2),
      },
      '&:disabled': {
        opacity: 0.4,
        bg: 'primary',
      },
    },
  },
  messages: {
    warn: {
      backgroundColor: '#fffced',
      borderColor: '#d98b6c',
    },
  },
  grids: {
    contained: {
      alignItems: 'start',
      justifyContent: 'space-between',
      mx: 'auto',
      maxWidth,
      padding: '1em',
      width: '100%',
    },
  },
  forms: {
    label: {
      color: 'textMediumEmphasis',
      fontFamily: 'body',
    },
    slider: {
      backgroundColor: rgba('#000', 0.15),
      color: 'primary',
      height: 8,
    },
    select: {
      borderColor: '#ccc',
    },
  },
  images: {
    hero: {
      backgroundSize: 'cover',
      height: '50vh',
      width: '100%',
    },
  },
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary',
      margin: '1em auto 0',
      maxWidth,
    },
  },
  styles: {
    a: {
      borderBottom: '1px solid',
      color: 'primary',
      py: 1,
      textDecoration: 'none',
      transition: 'background-color 0.15s ease-in-out, color 0.1s ease-in-out',
      willChange: 'background-color, color',
      '&:hover, &:focus, &:active': {
        color: 'white',
        backgroundColor: 'primary',
      },
    },
    hr: {
      borderColor: '#eee',
      maxWidth,
      mx: 'auto',
    },
  },
}
