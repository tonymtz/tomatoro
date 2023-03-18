import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ ({ theme }) => theme.bodyColor };
    color: ${ ({ theme }) => theme.textColor };
    margin: 0;
  }
`
