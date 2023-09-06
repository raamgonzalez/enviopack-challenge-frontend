import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Button } from '../ui/Button'
import './TotalCart.css'

export function TotalCart () {
  const { totalCart, onPurchaseWithCredit } = useContext(CartContext)
  const navigate = useNavigate()

  const purchaseAndNavigate = () => {
    onPurchaseWithCredit()
    navigate('/cart/checkout')
  }
  return (
    <>
      <section className='card cart__total'>
        <p>Total</p>
        <span>$ {totalCart()}</span>
      </section>
      <section className='cart__buttons'>
          <Button onClick={() => { navigate('/') }}>Volver al catalogo</Button>
          <Button onClick={purchaseAndNavigate}>Finalizar compra</Button>
      </section>
    </>
  )
}
