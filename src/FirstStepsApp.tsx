import { ItemCounter } from "./shopping-cart/itemCounter";


interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Meta Quest 3S', quantity: 2 },
  { productName: 'Pro Controller', quantity: 4 },
  { productName: 'Batman Arkam', quantity: 1 },
]


export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>
      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter name={productName} quantity={quantity} />
        ))
      }




      {/* <ItemCounter name="Meta Quest 3S" quantity={2} />
      <ItemCounter name="Pro Controller" quantity={4} />
      <ItemCounter name="Batman Arkam" quantity={1} /> */}

    </>
  )
}