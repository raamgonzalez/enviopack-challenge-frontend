import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { ItemCart } from './ItemCart'
import { TotalCart } from './TotalCart'
import { Title } from '../ui/Title'
import './CartList.css'

export function CartList (product) {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <>
        <div className='cart__empty empty'>
            <h2 className='empty__title'>No hay productos en el carrito</h2>
            <Button onClick={() => navigate('/')}>Volver al Home</Button>
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
