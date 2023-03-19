import { FC } from 'react'
import { useLocalStorage } from 'usehooks-ts'

import { Button } from '~/components/atoms/button'
import { darkTheme, defaultTheme } from '~/components/themes'

export const ThemeSelector: FC = () => {
  const [, setTheme] = useLocalStorage('theme', defaultTheme)

  return (
    <>
      <Button onClick={ () => setTheme(defaultTheme) }>Default</Button>
      <Button onClick={ () => setTheme(darkTheme) }>Dark</Button>
    </>
  )
}
