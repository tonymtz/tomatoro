import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Select, Spinner } from 'theme-ui'
import { useBoolean, useIsClient } from 'usehooks-ts'

import { isAmericanCountry } from '~/utils/is-american-country'
import { track } from '~/utils/tracking.utils'

export const LanguageSelector = () => {
  const router = useRouter()
  const { lang, t } = useTranslation('common')
  const { setFalse, setTrue, value: isLoading } = useBoolean(false)
  const isClient = useIsClient()
  const showMxFlag = isClient && isAmericanCountry(Intl.NumberFormat().resolvedOptions().locale)

  const onChange = (newLocale: string) => {
    setTrue()
    const { asPath, pathname, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale }).then(() => {
      setFalse()
      track('$language_changed', { language: newLocale })
    })
  }

  return isLoading ?
    <Spinner size={ 36 } strokeWidth={ 5 } title={ t('loadingLanguage') }/> :
    (
      <Select value={ lang } onChange={ ({ target }) => onChange(target.value) }>
        <option value="en">English 🇺🇸</option>
        <option value="es">Español { showMxFlag ? '🇲🇽' : '🇪🇸' }&nbsp;</option>
      </Select>
    )
}
