import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  padding: '0 $4',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite500',
        color: '$white',

        '&:disabled': {
          backgroundColor: '$gray200',
        },

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        },

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:disabled': {
          color: '$gray600',
        },

        '&:not(:disabled):hover': {
          color: '$white',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
