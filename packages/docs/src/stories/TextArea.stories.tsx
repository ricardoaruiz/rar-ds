import { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@rar-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', rowGap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
}
