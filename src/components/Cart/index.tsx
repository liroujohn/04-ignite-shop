import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import {
  CartClosed,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'
import { useCart } from '@/src/hooks/useCart'

export function Cart() {
  const { cartItems, cartTotal, removeCartItem } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClosed>
            <X size={24} weight="bold" />
          </CartClosed>

          <h2>Sacola de comprar</h2>

          <section>
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio :( </p>}

            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    alt=""
                    src={cartItem.imageUrl}
                    width={100}
                    height={93}
                  />
                </CartProductImage>

                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeCartItem(cartItem.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar comprar</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
