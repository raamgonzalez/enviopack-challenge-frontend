import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export function CartList (product) {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <>
        <div className='cart__empty empty'>
            <h2 className='empty__title'>No hay productos en el carrito</h2>
            <Link to='/'>Volver al Home</Link>
        </div>
      </>
    )
  }

  return (
		<div>CartList</div>
  )
}
