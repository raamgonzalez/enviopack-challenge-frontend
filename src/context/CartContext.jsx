import { createContext, useEffect, useState } from 'react'
import { productos } from '../mocks/products.json'

export const CartContext = createContext('')

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCart(productos)
  }, [])

  return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
  )
}
