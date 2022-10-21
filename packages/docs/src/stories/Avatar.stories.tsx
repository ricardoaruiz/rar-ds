import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@rar-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ricardoaruiz.png',
    alt: 'Ricardo Ruiz',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
