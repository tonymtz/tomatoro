import styled from '@emotion/styled'
import { Flex } from 'theme-ui'

export const Container = styled(Flex)`
  background-color: white;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const Nav = styled(Flex)`
  align-items: center;
  gap: 1.5em;
  justify-content: flex-end;
`
