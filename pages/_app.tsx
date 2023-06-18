import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ThemeProvider } from 'theme-ui'
import { useEffectOnce, useLocalStorage } from 'usehooks-ts'

import { getTheme, globalStyles } from '~/components/themes'
import {
  NotificationsProvider,
} from '~/contexts/notifications/notifications-context.provider'
import { TimerProvider } from '~/contexts/timer'

if (typeof window !== 'undefined') {
  Posthog.init(
    process.env.NEXT_PUBLIC_POSTHOG_KEY as string,
    {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      loaded: (posthog) => {
        // Enable debug mode in development
        if (process.env.NODE_ENV === 'development') {
          posthog.opt_out_capturing()
        }
      },
    },
  )
}

export default function App ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [theme] = useLocalStorage('theme', 'light')

  useEffectOnce(() => {
    // Track page views
    const handleRouteChange = () => Posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  })

  useEffectOnce((() => {
    // Temporal fix for uninstalling previous worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister()
        console.log('unregistered!')
      })
    }
  }))

  useEffectOnce(() => {
    // extract the value from the query params
    const { code, ...updatedQuery } = router.query

    if (Object.keys(updatedQuery).length === 0) {
      return
    }

    // create an updated router path object
    const newPathObject = {
      pathname: router.pathname,
    }

    // update the URL, without re-triggering data fetching
    router.push(newPathObject, undefined, { shallow: true }).then()
  })

  return (
    <PostHogProvider client={ Posthog }>
      <ThemeProvider theme={ getTheme(theme) }>
        <NotificationsProvider>
          <TimerProvider>{ globalStyles }
            {/* @ts-ignore */}
            <Component { ...pageProps } />
          </TimerProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </PostHogProvider>
  )
}
