// A faulty API route to test Sentry's error monitoring

type Data = {
  name: string
}

export default function handler () {
  throw new Error('Sentry Example API Route Error')
  // res.status(200).json({ name: 'John Doe' })
}
