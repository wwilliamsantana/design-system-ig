import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Interface de BOX</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
