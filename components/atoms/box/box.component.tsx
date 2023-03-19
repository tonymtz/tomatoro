import styled from '@emotion/styled'

interface BoxProps {
  bg?: string
  m?: number
}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
`
