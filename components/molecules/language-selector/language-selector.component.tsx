import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Posthog from 'posthog-js'
import { Select, Spinner } from 'theme-ui'
import { useBoolean } from 'usehooks-ts'

export const LanguageSelector = () => {
  const router = useRouter()
  const { lang, t } = useTranslation('common')
  const { setFalse, setTrue, value: isLoading } = useBoolean(false)

  const onChange = (newLocale: string) => {
    setTrue()
    const { asPath, pathname, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale }).then(() => {
      setFalse()
      Posthog?.capture('$language_changed', { language: newLocale })
    })
  }

  return isLoading ?
    <Spinner size={ 36 } strokeWidth={ 5 } title={ t('loadingLanguage') }/> :
    (
      <Select value={ lang } onChange={ ({ target }) => onChange(target.value) }>
        <option value="en">English 🇺🇸</option>
        <option value="es">Español 🇪🇸</option>
      </Select>
    )
}
