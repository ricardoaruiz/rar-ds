import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@rar-ui/react'
import { fontSizes } from '@rar-ui/tokens'

const sizeOptions = Object.keys(fontSizes).map((key) => key)

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: sizeOptions,
      control: { type: 'select' },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio, saepe repudiandae sit adipisci dicta quibusdam facilis ipsa! Unde, quo? Aliquid fugiat incidunt deserunt harum odio commodi ipsam ea distinctio eius?',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o text sempre será um `p` mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
