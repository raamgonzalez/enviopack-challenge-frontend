import { createContext, useContext, useState } from 'react'
import { UsersContext } from './UsersContext'

export const CartContext = createContext('')

export function CartContextProvider ({ children }) {
  const { credit, setCredit } = useContext(UsersContext)
  const [cart, setCart] = useState([])

  const clearCart = () => setCart([])

  const isInCart = (id) => {
    return !!cart.find(product => product.id === id)
  }

  const eraseProduct = (id) => {
    const eProduct = cart.filter((item) => item.id !== id)
    setCart(eProduct)
  }

  const onAddProduct = ({ product }) => {
    if (isInCart(product.id)) return
    setCart([...cart, { ...product }])
  }

  const totalCart = () => {
    return cart.reduce((acumulador, product) => acumulador + product.price, 0)
  }

  const onPurchaseWithCredit = () => {
    const pricePurchase = totalCart()
    if (credit > pricePurchase) {
      setCredit(credit - pricePurchase)
      clearCart()
      return true
    } else {
      return false
    }
  }

  return (
		<CartContext.Provider value={{ cart, setCart, eraseProduct, clearCart, onAddProduct, totalCart, onPurchaseWithCredit }}>
			{children}
		</CartContext.Provider>
  )
}
