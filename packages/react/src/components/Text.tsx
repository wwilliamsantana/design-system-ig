import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '4xl': { fontSize: '$2xl' },
      '5xl': { fontSize: '$4xl' },
      '6xl': { fontSize: '$5xl' },
      '7xl': { fontSize: '$6xl' },
      '8xl': { fontSize: '$7xl' },
      '9xl': { fontSize: '$8xl' },
      '2xl': { fontSize: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {}

Text.displayName = 'Text'
