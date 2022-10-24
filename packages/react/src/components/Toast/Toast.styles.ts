import { styled, keyframes } from '../../styles'
import { X } from 'phosphor-react'
import {
  Viewport,
  Root,
  Title,
  Description,
  Action,
  Close,
} from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const StyledViewport = styled(Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const StyledToast = styled(Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray500',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$3',
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const StyledTitle = styled(Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$gray100',
})

export const StyledDescription = styled(Description, {
  gridArea: 'description',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  marginTop: '$1',
})

export const StyledAction = styled(Action, {
  gridArea: 'action',
})

export const StyledClose = styled(Close, {
  all: 'unset',
  width: '$6',
  height: '$6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '$sm',

  '&:hover': {
    backgroundColor: '$gray900',
    cursor: 'pointer',
  },
})

export const CloseIcon = styled(X, {
  color: '$white',
})
