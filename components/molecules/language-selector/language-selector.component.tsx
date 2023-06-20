import Link from 'next/link'
import { Text } from 'theme-ui'

export const LanguageSelector = () => {
  return (
    <div>
      <Link href="/" locale="en">
        <Text>🇺🇸</Text>
      </Link>
      <Text>{'/'}</Text>
      <Link href="/" locale="es">
        <Text>🇪🇸</Text>
      </Link>
    </div>
  )
}
