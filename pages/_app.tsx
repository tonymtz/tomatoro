import type { AppProps } from 'next/app'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ThemeProvider } from 'theme-ui'
import { useEffectOnce, useIsClient, useLocalStorage } from 'usehooks-ts'

import { getTheme, globalStyles } from '~/components/themes'
import {
  NotificationsProvider,
} from '~/contexts/notifications/notifications-context.provider'
import { TimerProvider } from '~/contexts/timer'

export default function App ({ Component, pageProps }: AppProps) {
  const isClient = useIsClient()
  const [theme] = useLocalStorage('theme', 'light')

  useEffectOnce(() => {
    if (isClient) {
      posthog.init(
        process.env.NEXT_PUBLIC_POSTHOG_KEY as string,
        {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
          // Enable debug mode in development
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') {
              posthog.debug()
            }
          },
        },
      )
    }
  })

  return (
    <PostHogProvider>
      <ThemeProvider theme={ getTheme(theme) }>
        <NotificationsProvider>
          <TimerProvider>
            { globalStyles }
            <Component { ...pageProps } />
          </TimerProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </PostHogProvider>
  )
}
