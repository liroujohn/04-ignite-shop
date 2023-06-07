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

export function Cart() {
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
            {/* <p>Parece que seu carrinho está vazio :( </p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1687132800&Signature=VNI~S5iLAVOACAywlm1RjA3gI-OIbENSh2holoaTkTUdeihnwsEOISjVkNrEdXJ7dz8JPLayP7NxcirD8GRb3V6R8nZs96rVWsKKDgi2NS0zBDMrp09MjY89BpFNm82itGu44nYzAoxSM7EWEzf5pWqC95Ec0QxS3pZWfalxUi6MAO7effQAZPnuk25qBsfGTijHSHchmWCPYL4GEp5RYq8SzxqBgscFyS0XuNRpvNfkQ8D51S2s7zyZj4PUmFiAUV3BE26yNISEZJaQa3ysgTutvUfe3QxM3yLUHvi9PJFFaDoBcaSe9PKepCST7d57OGMvScSqGvmK2IhoIDAVRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  width={100}
                  height={93}
                />
              </CartProductImage>

              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50.00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 100.00</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar comprar</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
