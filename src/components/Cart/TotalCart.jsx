import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './TotalCart.css'
import { CartContext } from '../../context/CartContext'
import { Button } from '../ui/Button'

export function TotalCart () {
  const { totalCart, onPurchaseWithCredit } = useContext(CartContext)

  return (
    <>
      <section className='card cart__total'>
        <p>Total</p>
        <span>$ {totalCart()}</span>
      </section>
      <section className='cart__buttons'>
        <Link to='/'>
          <Button>Volver al catalogo</Button>
        </Link>
        <Link to='/cart/checkout'>
          <Button onClick={onPurchaseWithCredit}>Finalizar compra</Button>
        </Link>
      </section>
    </>
  )
}
