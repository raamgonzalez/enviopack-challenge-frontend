import { createContext, useState } from 'react'
import { products } from '../mocks/products.json'

export const CartContext = createContext('')

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  const clearCart = () => setCart([])

  const isInCart = (id) => {
    return !!cart.find(product => product.id === id)
  }

  const eraseProduct = (id) => {
    const eProduct = cart.filter((item) => item.id !== id)
    setCart(eProduct)
  }

  const onAddProduct = (item) => {
    if (isInCart(item.id)) return
    setCart([...cart], { ...item })
  }

  // useEffect(() => {
  //   setCart(productos)
  // }, [])

  return (
		<CartContext.Provider value={{ cart, setCart, eraseProduct, isInCart, clearCart }}>
			{children}
		</CartContext.Provider>
  )
}
