import Posthog from 'posthog-js'

interface InitProps {
  posthogHost?: string
  posthogKey: string
}

export function init ({ posthogHost, posthogKey }: InitProps) {
  if (typeof window !== 'undefined') {
    Posthog.init(posthogKey, {
      api_host: posthogHost || 'https://app.posthog.com',
      loaded: (posthog) => {
        // Enable debug mode in development
        if (process.env.NODE_ENV === 'development') {
          posthog.opt_out_capturing()
        }
      },
    })
  }
}

type TrackingEvent =
  | 'legacy_worker_uninstalled'
  | '$pageview'
  | '$language_changed'
  | '$timer_start'
  | '$timer_stop'
  | '$timer_reset'
  | '$timer_end'
  | '$segment_change'
  | '$settings_opened'
  | '$settings_closed'
  | '$settings_changed'
  | '$timer_changed'
  | '$notifications_requested'
  | '$feedback_cta_clicked'
  | '$feedback_submitted'
  | '$subscription_submitted'
  | '$thank_you_screen'

export function track (event: TrackingEvent, properties?: Record<string, any>) {
  Posthog?.capture(event, properties)
}
