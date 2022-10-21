import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@rar-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'H2 Heading',
  },
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2` mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
