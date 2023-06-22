import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import React, { FC } from 'react'
import { Link as TuiLink } from 'theme-ui'

interface Props {
  label?: string
}

export const BackCta: FC<Props> = ({ label }) => {
  const { t } = useTranslation('common')
  return <TuiLink as={ Link } href="/">{ label || t('backCta') }</TuiLink>
}
