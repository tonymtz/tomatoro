import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

const variants = {
  primary: css``,
  secondary: css``,
  green: css`
    background-color: #5faf4e;
  `,
  yellow: css`
    background-color: #ccac56;
  `,
}

export interface ButtonProps {
  children?: ReactNode;
  variant?: keyof typeof variants;
  disabled?: boolean;

  onClick?(): void;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: #666;
  border: 0;
  border-radius: 0.5em;
  color: #eee;
  font-weight: bold;
  padding: 1em 2em;
  transition: All 200ms ease;

  ${ ({ variant }) => variants[variant || 'primary'] }
  &:active,
  &:focus,
  &:hover {
    font-weight: bold;
  }

  &:disabled {
    opacity: 0.75;
  }
`
