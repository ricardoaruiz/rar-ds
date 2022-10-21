import { Meta, StoryObj } from '@storybook/react'

import { Box, Checkbox, CheckboxProps, Text } from '@rar-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', columnGap: '$2' }}>
        {Story()}
        <Text size="sm"> Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
