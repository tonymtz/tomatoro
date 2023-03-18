import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'

import { defaultTheme, GlobalStyle } from '~/components/themes'
import { TimerProvider } from '~/contexts/timer.context'

export default function App ({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={ theme }>
      <TimerProvider>
        <GlobalStyle/>
        <Component { ...pageProps } />
      </TimerProvider>
    </ThemeProvider>
  )
}
