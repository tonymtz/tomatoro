import styled from '@emotion/styled'

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`

export const ListItem = styled.li`
  & > * {
    display: inline-block;

    &:first-child {
      margin-right: 1em;
    }
  }
`
