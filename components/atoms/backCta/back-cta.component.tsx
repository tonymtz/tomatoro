import Link from 'next/link'
import React, { FC } from 'react'
import { Link as TuiLink } from 'theme-ui'

interface Props {
  label?: string
}

export const BackCta: FC<Props> = ({ label }) => (
  <TuiLink as={ Link } href="/">{ label || 'Return to Tomatoro Home' }</TuiLink>
)
