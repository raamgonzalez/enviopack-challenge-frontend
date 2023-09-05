import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { ItemCart } from './ItemCart'
import './CartList.css'
import { TotalCart } from './TotalCart'
import { Title } from '../ui/Title'

export function CartList (product) {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <>
        <div className='cart__empty empty'>
            <h2 className='empty__title'>No hay productos en el carrito</h2>
            <Button><Link to='/'>Volver al Home</Link></Button>
        </div>
      </>
    )
  }

  return (
  <>
    <Title>Carrito</Title>
		<section className='cart__products'>
      {
        cart.map((product) =>
          <ItemCart key={product.sku} product={product}/>
        )
      }
    </section>
    <TotalCart/>
  </>
  )
}
