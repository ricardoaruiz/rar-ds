import { Meta } from '@storybook/react'

import {
  Toast,
  ToastProps,
  ToastTitle,
  Button,
  ToastDescription,
} from '@rar-ui/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    onClose: {
      action: 'onClose',
    },
  },
} as Meta<ToastProps>

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show toast
      </Button>

      <Toast
        open={open}
        onOpenChange={setOpen}
        onClose={() => console.log('onClose')}
      >
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription>Toast Description</ToastDescription>
      </Toast>
    </>
  )
}
