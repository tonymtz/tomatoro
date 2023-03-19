import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { useLocalStorage } from 'usehooks-ts'

import { defaultTheme, globalStyles } from '~/components/themes'
import { NotificationsProvider } from '~/contexts/notifications/notifications-context.provider'
import { TimerProvider } from '~/contexts/timer'

export default function App ({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={ theme }>
      <NotificationsProvider>
        <TimerProvider>
          {globalStyles}
          <Component { ...pageProps } />
        </TimerProvider>
      </NotificationsProvider>
    </ThemeProvider>
  )
}
