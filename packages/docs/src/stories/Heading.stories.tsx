import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Title',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus, nulla reprehenderit quod cumque repudianda',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Example title H1',
    as: 'h1',
  },

  parameters: {
    docs: {
      description: {
        story:
          'A tag padrão é H2, mas utilizando o `as` podemos mudar para qualuqer outra.',
      },
    },
  },
}
