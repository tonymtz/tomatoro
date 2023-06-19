import styled from '@emotion/styled'
import { ThemeUIStyleObject } from '@theme-ui/css'
import { Flex } from 'theme-ui'

export const Container = styled(Flex)`
  background-color: #333;
  color: white;
  flex-direction: column;
  padding: 2em 1em;
  position: relative;
`

export const Section = styled(Flex)`
  flex-direction: column;
  margin: 1.5em 0 0.5em;
`

export const section: ThemeUIStyleObject = {
  flexDirection: ['column', 'row'],
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: '768px',
  padding: '1em',
  width: '100%',
}
