import { styled } from '@stitches/react'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  width: '3rem',
  height: '3rem',

  background: '$gray800',
  color: '$gray500',

  svg: {
    fontSize: 24,
  },
})
