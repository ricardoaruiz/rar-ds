import { ComponentProps } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { StyledArrow, StyledContent } from './Tooltip.styles'

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

export type ContentProps = ComponentProps<typeof TooltipPrimitive.Content>

export function TooltipContent({ children, ...props }: ContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </TooltipPrimitive.Portal>
  )
}

TooltipContent.displayName = 'TooltipContent'

// Exports
export const TooltipTrigger = TooltipPrimitive.Trigger
TooltipTrigger.displayName = 'TooltipTrigger'
