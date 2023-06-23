import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const { geo, nextUrl: url } = req
  const country = geo?.country || 'US'

  url.searchParams.set('country', country)

  return NextResponse.rewrite(url)
}
