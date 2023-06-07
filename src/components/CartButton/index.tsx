import { Handbag } from 'phosphor-react'
import { CartButtonContainer } from '../CartButton/styles'
import { ComponentProps } from 'react'

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight="bold" />
    </CartButtonContainer>
  )
}
