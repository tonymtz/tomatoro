import { FC } from 'react'
import { Flex } from 'theme-ui'
import { useLocalStorage } from 'usehooks-ts'

import { Button } from '~/components/atoms/button'

export const ThemeSelector: FC = () => {
  const [, setTheme] = useLocalStorage('theme', 'light')

  return (
    <Flex sx={ { gap: '1em' } }>
      <Button onClick={ () => setTheme('light') }>Default</Button>
      <Button onClick={ () => setTheme('dark') }>Dark</Button>
    </Flex>
  )
}
