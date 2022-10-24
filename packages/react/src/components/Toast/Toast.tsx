import { ToastProvider } from '@radix-ui/react-toast'
import { ComponentProps } from 'react'

import {
  StyledViewport,
  StyledToast,
  StyledTitle,
  StyledDescription,
  StyledAction,
  StyledClose,
  CloseIcon,
} from './Toast.styles'

export type ToastProps = ComponentProps<typeof StyledToast> &
  ComponentProps<typeof ToastProvider> & {
    onClose?: () => void
  }

export const Toast = ({
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  onClose,
  children,
  ...props
}: ToastProps) => {
  const toastProviderProps = { duration, label, swipeDirection, swipeThreshold }
  const toastProps = props

  return (
    <ToastProvider {...toastProviderProps}>
      <StyledToast {...toastProps}>
        {children}

        <StyledClose onClick={onClose}>
          <CloseIcon />
        </StyledClose>
      </StyledToast>
      <StyledViewport />
    </ToastProvider>
  )
}

export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
